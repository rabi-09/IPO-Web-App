import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function UpcomingBIDSection(): JSX.Element {
  // Company data for the IPO cards
  const ipoData = [
    {
      id: 1,
      name: "Nova Agritech Ltd.",
      logo: "/images-1.png",
      priceband: "Rs  39 - 41",
      issueSize: "143.81 Cr.",
      issueType: "Book Built",
      openDate: "2024-01-22",
      closeDate: "2024-01-24",
      listingDate: "2024-01-30",
      hasRhpDrhp: true,
    },
    {
      id: 2,
      name: "EPACK Durable Ltd.",
      logo: "/download-1.png",
      priceband: "Rs  218 - 230",
      issueSize: "640.05 Cr.",
      issueType: "Book Built",
      openDate: "2024-01-19",
      closeDate: "2024-01-23",
      listingDate: "2024-01-29",
      hasRhpDrhp: false,
    },
    {
      id: 3,
      name: "RK Swamy Ltd.",
      logo: "/download-1-1.png",
      priceband: "Not Issued",
      issueSize: "Not Issued",
      issueType: "Book Built",
      openDate: "Not Issued",
      closeDate: "Not Issued",
      listingDate: "Not Issued",
      hasRhpDrhp: false,
    },
    {
      id: 4,
      name: "Oravel Stays Ltd.",
      logo: "/download-2.png",
      priceband: "Not Issued",
      issueSize: "8430 Cr.",
      issueType: "Book Built",
      openDate: "Not Issued",
      closeDate: "Not Issued",
      listingDate: "Not Issued",
      hasRhpDrhp: false,
    },
    {
      id: 5,
      name: "Imagine marketing Ltd.",
      logo: "/download-1-2.png",
      priceband: "Not Issued",
      issueSize: "2000 cr.",
      issueType: "Book Built",
      openDate: "Not Issued",
      closeDate: "Not Issued",
      listingDate: "Not Issued",
      hasRhpDrhp: false,
    },
    {
      id: 6,
      name: "Kids Clinic India Ltd.",
      logo: "/download-2-1.png",
      priceband: "Not Issued",
      issueSize: "Not Issued",
      issueType: "Book Built",
      openDate: "Not Issued",
      closeDate: "Not Issued",
      listingDate: "Not Issued",
      hasRhpDrhp: false,
    },
    {
      id: 7,
      name: "OLA Electric Mobility Ltd.",
      logo: "/download-2-2.png",
      priceband: "Not Issued",
      issueSize: "Not Issued",
      issueType: "Book Built",
      openDate: "Not Issued",
      closeDate: "Not Issued",
      listingDate: "Not Issued",
      hasRhpDrhp: false,
    },
    {
      id: 8,
      name: "One Mobikwik Systems Ltd.",
      logo: "/mobikwik-1.png",
      priceband: "Not Issued",
      issueSize: "1900 Cr.",
      issueType: "Book Built",
      openDate: "Not Issued",
      closeDate: "Not Issued",
      listingDate: "Not Issued",
      hasRhpDrhp: false,
    },
    {
      id: 9,
      name: "Le Travenues Technology",
      logo: "/download-3-1.png",
      priceband: "Not Issued",
      issueSize: "1600 Cr.",
      issueType: "Book Built",
      openDate: "Not Issued",
      closeDate: "Not Issued",
      listingDate: "Not Issued",
      hasRhpDrhp: false,
    },
    {
      id: 10,
      name: "CMR Green Technologies",
      logo: "/download-3-2.png",
      priceband: "Not Issued",
      issueSize: "Not Issued",
      issueType: "Book Built",
      openDate: "Not Issued",
      closeDate: "Not Issued",
      listingDate: "Not Issued",
      hasRhpDrhp: true,
    },
    {
      id: 11,
      name: "Wellness Forever",
      logo: "/download-4-1.png",
      priceband: "Not Issued",
      issueSize: "Not Issued",
      issueType: "Book Built",
      openDate: "Not Issued",
      closeDate: "Not Issued",
      listingDate: "Not Issued",
      hasRhpDrhp: true,
    },
    {
      id: 12,
      name: "PKH Ventures Ltd.",
      logo: "/download-4-2.png",
      priceband: "Not Issued",
      issueSize: "Not Issued",
      issueType: "Book Built",
      openDate: "Not Issued",
      closeDate: "Not Issued",
      listingDate: "Not Issued",
      hasRhpDrhp: false,
    },
  ];

  return (
    <section className="w-full py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ipoData.map((ipo) => (
          <Card
            key={ipo.id}
            className="w-full h-[450px] shadow-md overflow-hidden"
          >
            <CardContent className="p-0 h-full relative">
              <div className="p-6 flex items-center">
                <img
                  src={ipo.logo}
                  alt={`${ipo.name} logo`}
                  className="w-[110px] h-[60px] object-contain mr-4"
                />
                <h3 className="font-medium text-[#414bea] text-2xl">
                  {ipo.name}
                </h3>
              </div>

              <div className="px-6 mt-8 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-[#5a5858] text-lg">PRICE BAND</p>
                  <p className="font-semibold text-black text-lg mt-2">
                    {ipo.priceband}
                  </p>
                </div>

                <div>
                  <p className="text-[#5a5858] text-lg">OPEN</p>
                  <p className="font-semibold text-black text-lg mt-2">
                    {ipo.openDate}
                  </p>
                </div>

                <div>
                  <p className="text-[#5a5858] text-lg">CLOSE</p>
                  <p className="font-semibold text-black text-lg mt-2">
                    {ipo.closeDate}
                  </p>
                </div>
              </div>

              <div className="px-6 mt-8 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-[#5a5858] text-lg">ISSUE SIZE</p>
                  <p className="font-semibold text-black text-lg mt-2">
                    {ipo.issueSize}
                  </p>
                </div>

                <div>
                  <p className="text-[#5a5858] text-lg">ISSUE TYPE</p>
                  <p className="font-semibold text-black text-lg mt-2">
                    {ipo.issueType}
                  </p>
                </div>

                <div>
                  <p className="text-[#5a5858] text-lg">LISTING DATE</p>
                  <p className="font-semibold text-black text-lg mt-2">
                    {ipo.listingDate}
                  </p>
                </div>
              </div>

              {ipo.hasRhpDrhp && (
                <div className="absolute bottom-6 left-6 flex space-x-3">
                  <Badge
                    variant="outline"
                    className="h-[43px] px-6 py-2 rounded-[10px] border-[#414bea] flex items-center"
                  >
                    <span className="text-[#414bea] text-[22px] font-medium">
                      RHP
                    </span>
                  </Badge>
                  <Badge className="h-[43px] px-6 py-2 rounded-[10px] bg-[#f05537] border-none flex items-center">
                    <span className="text-white text-[22px] font-medium">
                      DRHP
                    </span>
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
