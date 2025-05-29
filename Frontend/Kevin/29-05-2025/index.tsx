import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  import { Button } from "@/components/ui/button";
  import { Card, CardContent } from "@/components/ui/card";
  import React from "react";
  import { FaqSection } from "./FaqSection";
  import { UpcomingBIDSection } from "./UpcomingBIDSection";
  
  export default function UpcommingIpoView(): JSX.Element {
    // Data for toggle buttons that appear multiple times
    const toggleData = [
      {
        id: 1,
        value: "RHP",
        color: "text-[#414bea] bg-white border border-[#414bea]",
      },
      { id: 2, value: "DRHP", color: "text-white bg-[#f05537]" },
    ];
  
    // Positions for toggle groups
    const togglePositions = [
      { top: "363px", left: "46px" },
      { top: "363px", left: "672px" },
      { top: "365px", left: "1298px" },
      { top: "879px", left: "47px" },
      { top: "879px", left: "673px" },
      { top: "879px", left: "1282px" },
      { top: "1382px", left: "43px" },
      { top: "1382px", left: "672px" },
      { top: "1382px", left: "1278px" },
      { top: "1894px", left: "1278px" },
    ];
  
    return (
      <div className="bg-[#f6f5f5] flex flex-row justify-center w-full">
        <div className="bg-[#f6f5f5] w-full max-w-[1920px] relative">
          {/* Navigation Bar */}
          <img className="w-full h-[140px]" alt="Nav bar" src="" />
  
          {/* Breadcrumb and Title Section */}
          <div className="w-full max-w-[723px] mt-6 mx-[60px]">
            <Breadcrumb className="mb-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="#"
                    className="text-xs text-[#0000ff] font-['Poppins-Regular',Helvetica]"
                  >
                    Bluestock
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-xs">
                  &gt;
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="#"
                    className="text-xs text-[#0000ff] font-['Poppins-Regular',Helvetica]"
                  >
                    IPO
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-xs">
                  &gt;
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <span className="text-xs text-black font-['Poppins-Regular',Helvetica]">
                    UPCOMING IPO
                  </span>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
  
            <h1 className="font-['Poppins-SemiBold',Helvetica] font-semibold text-black text-[32px]">
              Upcoming IPO
            </h1>
            <p className="font-['Poppins-Light',Helvetica] font-light text-black text-sm mt-4">
              Companies that have filled for an IPO with SEBI. Few details might
              be disclosed by the companies later.
            </p>
          </div>
  
          {/* Main Content Section */}
          <div className="w-full max-w-[1794px] mx-auto mt-8 px-[63px]">
            {/* Upcoming BID Section */}
            <UpcomingBIDSection />
  
            {/* Toggle Groups */}
            {togglePositions.map((position, index) => (
              <div
                key={index}
                className="absolute w-[220px] h-[43px]"
                style={{ top: position.top, left: position.left }}
              >
                <div className="flex space-x-2">
                  {toggleData.map((toggle) => (
                    <div key={toggle.id} className="w-[107px] h-[43px]">
                      <Button
                        variant="outline"
                        className={`w-[105px] h-[43px] rounded-[10px] ${toggle.color}`}
                      >
                        <span className="font-['Poppins-Medium',Helvetica] font-medium text-[22px]">
                          {toggle.value}
                        </span>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
  
          {/* FAQ Section */}
          <FaqSection />
  
          {/* Footer */}
          <Card className="w-[1713px] h-[193px] mx-auto mt-8 mb-8">
            <CardContent className="flex items-center justify-center h-full">
              <p className="font-['Poppins-Medium',Helvetica] font-medium text-black text-[83px] leading-[25px]">
                Add / Extend Footer
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
  