from rest_framework import serializers
from .models import Company, IPO, Document, User, Application

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'


class IPOSerializer(serializers.ModelSerializer):
    company = CompanySerializer()  # Nested serializer to create/update the company data

    class Meta:
        model = IPO
        fields = '__all__'

    def create(self, validated_data):
        company_data = validated_data.pop('company')

        company = Company.objects.create(**company_data)

        # Create the IPO and associate it with the company
        ipo = IPO.objects.create(company=company, **validated_data)

        return ipo

    def update(self, instance, validated_data):
        company_data = validated_data.pop('company', None)

        if company_data:
            # Update or create company if provided
            instance.company.name = company_data.get('name', instance.company.name)
            instance.company.save()

        # Update IPO instance with the rest of the validated data
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        return instance


class DocumentSerializer(serializers.ModelSerializer):
    ipo = serializers.PrimaryKeyRelatedField(queryset=IPO.objects.all())  # Accept IPO id for document creation

    class Meta:
        model = Document
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'
