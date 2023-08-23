import React from "react";
import UnfoldMoreRoundedIcon from "@mui/icons-material/UnfoldMoreRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import TemplateCard from "../components/shared/TemplateCard";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";

import ListAltIcon from "@mui/icons-material/ListAlt";
import DocumentCard from "../components/shared/DocumentCard";
import Header from "../components/shared/Header";

function HomePage() {
  return (
    <>
      <main className="w-screen h-screen overflow-hidden pb-12 ">
        <Header />
        <div className="h-full w-full overflow-scroll  ">
          <div className="bg-grayBg h-auto w-full  m-auto flex justify-center items-center">
            <div className="max-w-[1040px] w-full m-4">
              <div className="flex justify-between items-center mt-4">
                <span>Start a new document</span>
                <div className="flex items-center ">
                  <div className="hover:bg-darkHover p-[4px] pl-[8px] pr-[8px] rounded-md ">
                    <button>
                      Tempelate gallery
                      <UnfoldMoreRoundedIcon />
                    </button>
                  </div>

                  <div className="h-[100%] flex w-[1px] border-r-[1px] border-borderDark">
                    .
                  </div>

                  <button className="h-[24px] w-[24px] p-4 rounded-full hover:bg-darkHover flex items-center justify-center">
                    <MoreVertRoundedIcon />
                  </button>
                </div>

                {/* <div>
              <select name="Template gallery" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div> */}
              </div>

              {/* Items Collections */}

              <div className="grid grid-cols-7  ">
                <TemplateCard
                  id=""
                  name="Blank"
                  image="https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png"
                  type=""
                />
                <TemplateCard
                  id=""
                  name="Resume"
                  image="https://ssl.gstatic.com/docs/templates/thumbnails/1wyFqxsRmKm9q--7j4WRmBMn694YdhV6hmNrfh4rVm2E_400.png"
                  type="Coral"
                />
                <TemplateCard
                  id=""
                  name="Resume"
                  image="https://ssl.gstatic.com/docs/templates/thumbnails/10bJALGfGJG8BrzBSmG6EznIq6-84l1TZkQ-HC8jO368_400.png"
                  type="Serif"
                />
                <TemplateCard
                  id=""
                  name="Letter"
                  image="https://ssl.gstatic.com/docs/templates/thumbnails/10e8_E36oj6_LuCRzckBFX_9oqbCHntmYB-jxB5U9gsw_400_2.png"
                  type="Spearmint"
                />
                <TemplateCard
                  id=""
                  name="Project Proposal"
                  image="https://ssl.gstatic.com/docs/templates/thumbnails/1XykI9TfWo4IoUqGLjQ-D8NIU4jZ1Ml9OI8-Euj5FrA0_400_3.png"
                  type="Tropic"
                />
                <TemplateCard
                  id=""
                  name="Brochure"
                  image="https://ssl.gstatic.com/docs/templates/thumbnails/1TojfPV3jurwEV2RpmVqnCCCR4z9g2eQBZ40XTHPBqk8_400_3.png"
                  type="Geometric"
                />
                <TemplateCard
                  id=""
                  name="Report"
                  image="https://ssl.gstatic.com/docs/templates/thumbnails/1OLxGsoZ-q6o9MiMbWpY7FngEKzF94SS6fZXAwo-vorM_400_2.png"
                  type="Luxe"
                />
              </div>
            </div>
          </div>

          <div className="h-full w-full m-auto flex justify-center">
            {/* New Section */}

            <div className="max-w-[1040px]   w-full">
              <div className="flex justify-between w-full   items-center pt-4 pb-4">
                <span>Recent documents</span>

                <div className="flex w-[40%] justify-between">
                  <div className="flex items-center ">
                    <div className="hover:bg-grayBg p-[4px] pl-[8px] pr-[8px] rounded-md ">
                      <select
                        name="Template gallery"
                        className="cursor-pointer bg-transparent"
                        id="cars"
                      >
                        <option value="volvo">Owned by anyone</option>
                        <option value="saab">Owned by me</option>
                        <option value="mercedes">Not owned by me</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ">
                    <button className="h-[32px] w-[32px] p-4 rounded-full hover:bg-grayBg flex items-center justify-center">
                      <ListAltIcon />
                    </button>
                    <button className="h-[32px] w-[32px] p-4 rounded-full hover:bg-grayBg flex items-center justify-center">
                      <SortByAlphaIcon />
                    </button>
                    <button className="h-[32px] w-[32px] p-4 rounded-full hover:bg-grayBg flex items-center justify-center">
                      <FolderOpenRoundedIcon />
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-5">
                <DocumentCard
                  id=""
                  name="Resume"
                  image="https://ssl.gstatic.com/docs/templates/thumbnails/1wyFqxsRmKm9q--7j4WRmBMn694YdhV6hmNrfh4rVm2E_400.png"
                  date="20 Aug 2023"
                  type="owner"
                />
                <DocumentCard
                  id=""
                  name="The Way of Living"
                  image="https://ssl.gstatic.com/docs/templates/thumbnails/1wyFqxsRmKm9q--7j4WRmBMn694YdhV6hmNrfh4rVm2E_400.png"
                  date="20 Aug 2023"
                  type="owner"
                />
                <DocumentCard
                  id=""
                  name="Discrete Math Part 1"
                  image="https://ssl.gstatic.com/docs/templates/thumbnails/1wyFqxsRmKm9q--7j4WRmBMn694YdhV6hmNrfh4rVm2E_400.png"
                  date="20 Aug 2023"
                  type="owner"
                />
                <DocumentCard
                  id=""
                  name="Self Awarness is Coming"
                  image="https://ssl.gstatic.com/docs/templates/thumbnails/1wyFqxsRmKm9q--7j4WRmBMn694YdhV6hmNrfh4rVm2E_400.png"
                  date="20 Aug 2023"
                  type="owner"
                />
                <DocumentCard
                  id=""
                  name="This is the way"
                  image="https://ssl.gstatic.com/docs/templates/thumbnails/1wyFqxsRmKm9q--7j4WRmBMn694YdhV6hmNrfh4rVm2E_400.png"
                  date="20 Aug 2023"
                  type="shared"
                />
                <DocumentCard
                  id=""
                  name="Avengers Assemble"
                  image="https://ssl.gstatic.com/docs/templates/thumbnails/1wyFqxsRmKm9q--7j4WRmBMn694YdhV6hmNrfh4rVm2E_400.png"
                  date="20 Aug 2023"
                  type="owner"
                />
                <DocumentCard
                  id=""
                  name="Resume"
                  image="https://ssl.gstatic.com/docs/templates/thumbnails/1wyFqxsRmKm9q--7j4WRmBMn694YdhV6hmNrfh4rVm2E_400.png"
                  date="20 Aug 2023"
                  type="shared"
                />
                <DocumentCard
                  id=""
                  name="Resume"
                  image="https://ssl.gstatic.com/docs/templates/thumbnails/1wyFqxsRmKm9q--7j4WRmBMn694YdhV6hmNrfh4rVm2E_400.png"
                  date="20 Aug 2023"
                  type="owner"
                />
                <DocumentCard
                  id=""
                  name="Resume"
                  image="https://ssl.gstatic.com/docs/templates/thumbnails/1wyFqxsRmKm9q--7j4WRmBMn694YdhV6hmNrfh4rVm2E_400.png"
                  date="20 Aug 2023"
                  type="owner"
                />
                <DocumentCard
                  id=""
                  name="Resume"
                  image="https://ssl.gstatic.com/docs/templates/thumbnails/1wyFqxsRmKm9q--7j4WRmBMn694YdhV6hmNrfh4rVm2E_400.png"
                  date="20 Aug 2023"
                  type="owner"
                />
                <DocumentCard
                  id=""
                  name="Resume"
                  image="https://ssl.gstatic.com/docs/templates/thumbnails/1wyFqxsRmKm9q--7j4WRmBMn694YdhV6hmNrfh4rVm2E_400.png"
                  date="20 Aug 2023"
                  type="owner"
                />
                <DocumentCard
                  id=""
                  name="Resume"
                  image="https://ssl.gstatic.com/docs/templates/thumbnails/1wyFqxsRmKm9q--7j4WRmBMn694YdhV6hmNrfh4rVm2E_400.png"
                  date="20 Aug 2023"
                  type="owner"
                />
                <DocumentCard
                  id=""
                  name="Resume"
                  image="https://ssl.gstatic.com/docs/templates/thumbnails/1wyFqxsRmKm9q--7j4WRmBMn694YdhV6hmNrfh4rVm2E_400.png"
                  date="20 Aug 2023"
                  type="owner"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
