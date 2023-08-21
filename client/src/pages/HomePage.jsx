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
                  image="https://lh3.googleusercontent.com/fife/AKsag4MKt4oeNNxr-VOo6WIUWAcjbjJeJWVxVbib9r7sYWeh2ZL9-TaDBA3VHqAG892hodSbrSvwFtp0MKe35ba1r1sfAeiOtvORFcrOZaFSxMTktbkn4a6XSnF_SD2JHZV8IgzKOd3LURcFDOd9_K2ATlomO3WpMhk6Yxrfwynd15AS38rJ1skaRolXkg28yLCQKG9aAu_dmHvf9fXNaxzikGzs63skpj2btGCbaMher_GecH2rwV90F6BWXLeOFb9yebhs72X_OhyHe_7KJvEoSvmJnpdwmB8GxKbTvvDrU2iulKyUVBLrDpadHFDyjpFPgUYwtn_Yr68FBbGQwXeK3Xlk-G7g4D_X2pqBj9WAgrYZ6OsKFrzNVuJJTjhVLXoUOt-MDpGNGlzlIy4mzWQ96rppQLveKL32AGSJa4TQLWFThqXKNS1jtkdkr25ShfZ98zJfxa1TRAtxsrRPvUWw4xsq-kYP7bKknZxKIH6V4Rn48it9FCSDf-Uo8A8i4_M1avPbUenalWFv1ShqiqMl7CiP5UMYZUEgdUbzZNd5KjhsCVYzeDIIjjd6w7aiXcqQW86On_3Olde42TXJdR7kgFxvvAnTPDpm6lmaQd8jFoCYKmgyMYl2Uq-7oamjOq_XWhksgMKM3Vxjb2e7Rly3QxL3kM8BagP0TUUaIak3c1CIiBuSrdLDlSZnxEAEre3z8JHGhtg0KFBwY09j-Mwc_V3xJqIXGdew4622zU8Yp15CwxIAQDAIbiCXGablPi5ch5mnY-aYtBHO9KBllTpcXWtAK3BWoXVqmesEywpCeWRKYuPaVoGlECmfuHpHZl5SwsstUS0XMcT-PuMA3jCGV5aCvrWvlFupyaS99O1Nb4Dl123ItZb8RpZ-98BAcclOQ9CkZeJFdfWi50wLYcpoNmbzZlYMaWt4iLnQW8TEMf0b4XUiN_qzEY3hg4hyvI2yo0bfILu-hz2778PLhCsPPHYaT5xBwBwyuis4mJ3PjfmJTqDfpL0aUTCs-FEWcF-KxPxCRZPZPwQte7oGCCays93rxPwRaE_U_uR6zRAgE9H6OANQBwxWIyCxEcdGpgQiAOwcmQ_tNM8pDzPEyqwXi6aZBcKDb6MHJmLDxQu7x4aoI7JU0SFbvx3Ob3dNEQY5rqnwww7-vj0AEn-PsINBJPD2D97KC_yrkGVm52NX1_z_b14tnlquCEADNFEA2rQUCFYsbngk8UT-6kYTebSOnY8zdjqZ7jTUr6rcUlzphrKLx7f2C1JCFrjqLmk1KNY9XwnCn6Q0K_I3x6DbhThq_CuIRSbj8d2FofEtvZARBVHFdvjpac7Huw6NrdMEkHZtfG6cTQBd1Ck7uegj5Io1VSYUiQMxjqWnTCQy-GA8MaLjUlBkd0S6qpzFx5KABaSan0X2ueKoxkXb-a7vOd-xnNuJd10IEkcrHf7i185NtdXN54PHBANSyLPyeB6TQtR0W7AV7WLrzS5PePJQ2Qo_RBQaF5kPXPMWkQdQnw6FTVpdrtGvf2o8qFNlJ9BqVrlw9IiwgYqLc7eEOkag=w416"
                  date="20 Aug 2023"
                  type="owner"
                />
                <DocumentCard
                  id=""
                  name="The Way of Living"
                  image="https://lh3.googleusercontent.com/fife/AKsag4MXt7Pk1tTS-Fh13SYqEKuMqoCPTrnAWcELYOw2mysClTd6zy44kPIxe7OBq6hQWdabDBotch95T6vMXbAgWT1Mfz12qmebtW713j6QhTAhDAdwweaVhR2ST28ClgYdqspRkSSht0BRqOGaQNwf_Bscmw_T8S3GFm9KS6_jlxkVFclKiJo_dELndVnssv2GtB_spua0dEMExixhmRKLhCgUPUp8oe-jRL8BUZUBkdXKS9hKU5arEaXMcMIB9LMSXhY8cUdmDlLWz2uXlDl5jB4C4WAKwkIIz0xm2czN18Qd4rUirF4GWhTKKvfTZXNR5UaCfOpeqGDWtCfqJcQ_VIJo7EOXqWUV6zBSf1sSlNySxkzaahs25OQ9In9F7h93wCh87tLKr6dURy-4hSK-JBkNqFW-CZpXjB4bWBCqQDhqJ1i3iYrSUlBcYgBcnTAMZA6M-DxBtcOyDnqz6Nw2UUMoG6YUH7RZcPWS_NxpLLZlVSibNLxI05UmSGQLyV_p-aZpz29I-PFav0xWKjjHAK-nAVYs2R7Lprdhbj7LBQiwWNWWnWFJ05vlLNyjr12KZ_V7KcmIm78zaiLu-h9vfglfks4souDVTzsEvdiLRhXlIB3pRM7PApi538WZ-JGtLMMnaRULIQUTPy9R6n5NvMN-vZy635NYCKOFyAoQ30hpgNlVvCMXK9oguzeaeFkeoHSZ7GKixEp-cmbx93kyhWZztZZ478LtpZVz3cBJOIL4QMKe3YDhAy1VUNAhujKb_550BN0mnpDyblMufIdofVEOIQMLn0knvNbNvKWRMyjDDFhN2gTZlNjy8HkIPZ6EBSggxVCS5yTDjc9tsSIThZYZgWthZKlMHp8roA2yDEm6fhKBqOAVVQ90kfO1tyLiwYfPhI3Ee6_i9tEYZgLxc7FG72E-s2buHtPABQTgCpY500MNoWpZCasYlbGHxMKIG0sfm57_CHIg2WjoTdE-VYCPeGyQSikil2vGmunE496V8pEh9pu0pzLMhRlF5v9CNdgSMKHI0edX726mtOZss849FVmvNyWmQV6PXLWuBh1IAm9xw7jcZ1r5NEEETxm6xhLk4AcmcqLQ5HObFJiM5X-kR1a4T8JABGGQs1OAHGi0gNSOLTTGuNneQ9AdNSQUIBWPgczvZnmqFtMfq-MtLEUjzc6frvBYPXAkGb0TYTmiBMu8sPGniWV5U5XJ-JHda8F7n3CY058eha9_ZFIRWeTqiDcWg2SkKLWzh6k4aT17_utmAlNMe-IWNCagmxvX5TAVQ6uIMf-U1hfPUc8ptvSX0j-IlqvqvAM3cbhZjFpo6bBEz3qv_vWWqe7zGWfIhtP1QRgp09j3kqpBUCsyy6S9XFMDAO9yk7ORnRMNezkdjfwCWnuKiLHOEHv-mIWUUTtlkjfACGvdLDGfXHn68NI9hOiVUnEjqVyI-c6wQ2o8243PFQRE_Xq_IsRapardkFAk_3vpk4vkfU5Gyg6A2TLGzkCGROYkmlqM-bMyTp9hsWCJu54zJeJ3h4D15jg0zmc1P105jcn2X0FB=w416"
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
