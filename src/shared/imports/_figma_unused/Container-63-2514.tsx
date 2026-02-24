const svgPaths = {
p13a2d900: "M10.1842 0.0461602C10.2964 0.083485 10.4001 0.142545 10.4895 0.219968C10.5788 0.29739 10.652 0.391657 10.7049 0.497383C10.7578 0.60311 10.7894 0.718223 10.7978 0.836149C10.8062 0.954074 10.7913 1.0725 10.7539 1.18466L7.15391 11.9847C7.07848 12.2112 6.91616 12.3985 6.70265 12.5053C6.48914 12.6121 6.24193 12.6298 6.01541 12.5544C5.78889 12.4789 5.60161 12.3166 5.49477 12.1031C5.38793 11.8896 5.37028 11.6424 5.44571 11.4159L9.04571 0.61586C9.08303 0.503682 9.14209 0.399958 9.21952 0.310611C9.29694 0.221265 9.3912 0.148048 9.49693 0.095143C9.60266 0.042238 9.71777 0.0106818 9.8357 0.00227716C9.95362 -0.00612745 10.072 0.00878427 10.1842 0.0461602V0.0461602ZM4.23611 2.96396C4.40483 3.13274 4.49962 3.36161 4.49962 3.60026C4.49962 3.83891 4.40483 4.06778 4.23611 4.23656L2.17241 6.30026L4.23611 8.36396C4.32207 8.44698 4.39063 8.54629 4.4378 8.6561C4.48497 8.7659 4.50979 8.884 4.51083 9.0035C4.51187 9.123 4.4891 9.24151 4.44385 9.35212C4.39859 9.46273 4.33177 9.56321 4.24726 9.64772C4.16276 9.73222 4.06227 9.79905 3.95167 9.8443C3.84106 9.88955 3.72255 9.91232 3.60305 9.91129C3.48355 9.91025 3.36545 9.88542 3.25564 9.83825C3.14584 9.79108 3.04653 9.72252 2.96351 9.63656L0.263508 6.93656C0.0947839 6.76778 0 6.53891 0 6.30026C0 6.06161 0.0947839 5.83274 0.263508 5.66396L2.96351 2.96396C3.13228 2.79524 3.36116 2.70045 3.59981 2.70045C3.83846 2.70045 4.06733 2.79524 4.23611 2.96396V2.96396ZM11.9635 2.96396C12.1323 2.79524 12.3612 2.70045 12.5998 2.70045C12.8385 2.70045 13.0673 2.79524 13.2361 2.96396L15.9361 5.66396C16.1048 5.83274 16.1996 6.06161 16.1996 6.30026C16.1996 6.53891 16.1048 6.76778 15.9361 6.93656L13.2361 9.63656C13.1531 9.72252 13.0538 9.79108 12.944 9.83825C12.8342 9.88542 12.7161 9.91025 12.5966 9.91129C12.4771 9.91232 12.3586 9.88955 12.2479 9.8443C12.1373 9.79905 12.0369 9.73222 11.9524 9.64772C11.8678 9.56321 11.801 9.46273 11.7558 9.35212C11.7105 9.24151 11.6877 9.123 11.6888 9.0035C11.6898 8.884 11.7146 8.7659 11.7618 8.6561C11.809 8.54629 11.8775 8.44698 11.9635 8.36396L14.0272 6.30026L11.9635 4.23656C11.7948 4.06778 11.7 3.83891 11.7 3.60026C11.7 3.36161 11.7948 3.13274 11.9635 2.96396V2.96396Z",
p16480400: "M0 6.9375C0 6.62684 0.25184 6.375 0.5625 6.375H12.5628C12.8734 6.375 13.1253 6.62684 13.1253 6.9375C13.1253 7.24816 12.8734 7.5 12.5628 7.5H0.5625C0.25184 7.5 0 7.24816 0 6.9375Z",
p170a7400: "M1.10799 0C0.590228 0 0.170495 0.419733 0.170495 0.9375V2.5739C0.170495 3.09167 0.590228 3.5114 1.10799 3.5114C1.62576 3.5114 2.04549 3.09167 2.04549 2.5739V1.875H5.62517V7.14551H7.50018V1.875H11.0798V2.5739C11.0798 3.09167 11.4996 3.5114 12.0173 3.5114C12.5351 3.5114 12.9548 3.09167 12.9548 2.5739V0.9375C12.9548 0.419733 12.5351 0 12.0173 0H1.10799Z",
p1df11c0: "M9.35355 11.3536L11.3536 9.35355M11.3536 6.35355L6.35355 11.3536M11.3536 3.35355L3.35355 11.3536M11.3536 0.353553L0.353553 11.3536",
p22b4a1c0: "M0 9.75H1.5V10.125H0.75V10.875H1.5V11.25H0V12H2.25V9H0V9.75ZM0.75 3H1.5V0H0V0.75H0.75V3ZM0 5.25H1.35L0 6.825V7.5H2.25V6.75H0.9L2.25 5.175V4.5H0V5.25ZM4.5 0.75C4.08579 0.75 3.75 1.08579 3.75 1.5C3.75 1.91421 4.08579 2.25 4.5 2.25H13.5C13.9142 2.25 14.25 1.91421 14.25 1.5C14.25 1.08579 13.9142 0.75 13.5 0.75H4.5ZM3.75 10.5C3.75 10.9142 4.08579 11.25 4.5 11.25H13.5C13.9142 11.25 14.25 10.9142 14.25 10.5C14.25 10.0858 13.9142 9.75 13.5 9.75H4.5C4.08579 9.75 3.75 10.0858 3.75 10.5ZM3.75 6C3.75 6.41421 4.08579 6.75 4.5 6.75H13.5C13.9142 6.75 14.25 6.41421 14.25 6C14.25 5.58579 13.9142 5.25 13.5 5.25H4.5C4.08579 5.25 3.75 5.58579 3.75 6Z",
p24adb580: "M1.125 4.21875C1.125 3.44175 1.755 2.8125 2.53125 2.8125H15.4688C16.245 2.8125 16.875 3.4425 16.875 4.21875V13.7812C16.875 14.5575 16.245 15.1875 15.4688 15.1875H2.53125C2.15829 15.1875 1.8006 15.0393 1.53688 14.7756C1.27316 14.5119 1.125 14.1542 1.125 13.7812V4.21875ZM15.75 7.03125C15.75 6.95666 15.7204 6.88512 15.6676 6.83238C15.6149 6.77963 15.5433 6.75 15.4688 6.75H9.84375C9.76916 6.75 9.69762 6.77963 9.64488 6.83238C9.59213 6.88512 9.5625 6.95666 9.5625 7.03125V8.15625C9.5625 8.3115 9.6885 8.4375 9.84375 8.4375H15.4688C15.5433 8.4375 15.6149 8.40787 15.6676 8.35512C15.7204 8.30238 15.75 8.23084 15.75 8.15625V7.03125ZM15.75 9.84375C15.75 9.76916 15.7204 9.69762 15.6676 9.64488C15.6149 9.59213 15.5433 9.5625 15.4688 9.5625H9.84375C9.76916 9.5625 9.69762 9.59213 9.64488 9.64488C9.59213 9.69762 9.5625 9.76916 9.5625 9.84375V10.9688C9.5625 11.124 9.6885 11.25 9.84375 11.25H15.4688C15.5433 11.25 15.6149 11.2204 15.6676 11.1676C15.7204 11.1149 15.75 11.0433 15.75 10.9688V9.84375ZM15.75 12.6562C15.75 12.5817 15.7204 12.5101 15.6676 12.4574C15.6149 12.4046 15.5433 12.375 15.4688 12.375H9.84375C9.76916 12.375 9.69762 12.4046 9.64488 12.4574C9.59213 12.5101 9.5625 12.5817 9.5625 12.6562V13.7812C9.5625 13.9365 9.6885 14.0625 9.84375 14.0625H15.4688C15.5433 14.0625 15.6149 14.0329 15.6676 13.9801C15.7204 13.9274 15.75 13.8558 15.75 13.7812V12.6562ZM8.15625 14.0625C8.23084 14.0625 8.30238 14.0329 8.35512 13.9801C8.40787 13.9274 8.4375 13.8558 8.4375 13.7812V12.6562C8.4375 12.5817 8.40787 12.5101 8.35512 12.4574C8.30238 12.4046 8.23084 12.375 8.15625 12.375H2.53125C2.45666 12.375 2.38512 12.4046 2.33238 12.4574C2.27963 12.5101 2.25 12.5817 2.25 12.6562V13.7812C2.25 13.9365 2.376 14.0625 2.53125 14.0625H8.15625ZM2.53125 11.25H8.15625C8.23084 11.25 8.30238 11.2204 8.35512 11.1676C8.40787 11.1149 8.4375 11.0433 8.4375 10.9688V9.84375C8.4375 9.76916 8.40787 9.69762 8.35512 9.64488C8.30238 9.59213 8.23084 9.5625 8.15625 9.5625H2.53125C2.45666 9.5625 2.38512 9.59213 2.33238 9.64488C2.27963 9.69762 2.25 9.76916 2.25 9.84375V10.9688C2.25 11.124 2.376 11.25 2.53125 11.25ZM2.53125 8.4375H8.15625C8.23084 8.4375 8.30238 8.40787 8.35512 8.35512C8.40787 8.30238 8.4375 8.23084 8.4375 8.15625V7.03125C8.4375 6.95666 8.40787 6.88512 8.35512 6.83238C8.30238 6.77963 8.23084 6.75 8.15625 6.75H2.53125C2.45666 6.75 2.38512 6.77963 2.33238 6.83238C2.27963 6.88512 2.25 6.95666 2.25 7.03125V8.15625C2.25 8.3115 2.376 8.4375 2.53125 8.4375Z",
p268a3f00: "M6.35398 0.000221752H4.125C3.60723 0.000221752 3.1875 0.419955 3.1875 0.937722C3.1875 1.45549 3.60723 1.87522 4.125 1.87522H5.17427L2.45552 11.6252H0.9375C0.419733 11.6252 0 12.045 0 12.5627C0 13.0805 0.419733 13.5002 0.9375 13.5002H3.16788C3.18147 13.5005 3.19502 13.5005 3.20854 13.5002H5.4375C5.95527 13.5002 6.375 13.0805 6.375 12.5627C6.375 12.045 5.95527 11.6252 5.4375 11.6252H4.38823L7.10698 1.87522H8.625C9.14277 1.87522 9.5625 1.45549 9.5625 0.937722C9.5625 0.419955 9.14277 0.000221752 8.625 0.000221752H6.39461C6.38103 -7.47215e-05 6.36748 -7.31121e-05 6.35398 0.000221752Z",
p2a696580: "M1.125 4.5C0.5025 4.5 0 5.0025 0 5.625C0 6.2475 0.5025 6.75 1.125 6.75C1.7475 6.75 2.25 6.2475 2.25 5.625C2.25 5.0025 1.7475 4.5 1.125 4.5ZM1.125 0C0.5025 0 0 0.5025 0 1.125C0 1.7475 0.5025 2.25 1.125 2.25C1.7475 2.25 2.25 1.7475 2.25 1.125C2.25 0.5025 1.7475 0 1.125 0ZM1.125 9C0.5025 9 0 9.51 0 10.125C0 10.74 0.51 11.25 1.125 11.25C1.74 11.25 2.25 10.74 2.25 10.125C2.25 9.51 1.7475 9 1.125 9ZM3.375 10.125C3.375 10.5392 3.71079 10.875 4.125 10.875H13.125C13.5392 10.875 13.875 10.5392 13.875 10.125C13.875 9.71079 13.5392 9.375 13.125 9.375H4.125C3.71079 9.375 3.375 9.71079 3.375 10.125ZM3.375 5.625C3.375 6.03921 3.71079 6.375 4.125 6.375H13.125C13.5392 6.375 13.875 6.03921 13.875 5.625C13.875 5.21079 13.5392 4.875 13.125 4.875H4.125C3.71079 4.875 3.375 5.21079 3.375 5.625ZM4.125 0.375C3.71079 0.375 3.375 0.710786 3.375 1.125C3.375 1.53921 3.71079 1.875 4.125 1.875H13.125C13.5392 1.875 13.875 1.53921 13.875 1.125C13.875 0.710786 13.5392 0.375 13.125 0.375H4.125Z",
p2ae3a500: "M0.230169 0.209376C0.528748 -0.0777189 1.00353 -0.0684094 1.29063 0.230169L5 4.16792L8.70938 0.230169C8.99647 -0.0684095 9.47125 -0.0777189 9.76983 0.209376C10.0684 0.496471 10.0777 0.971254 9.79063 1.26983L5.54063 5.76983C5.39922 5.91689 5.20401 6 5 6C4.79599 6 4.60078 5.91689 4.45938 5.76983L0.209376 1.26983C-0.0777189 0.971254 -0.0684095 0.496471 0.230169 0.209376Z",
p2bd4e980: "M1.8 0C1.32261 0 0.864773 0.189642 0.527208 0.527208C0.189642 0.864773 0 1.32261 0 1.8V10.8C0 11.2774 0.189642 11.7352 0.527208 12.0728C0.864773 12.4104 1.32261 12.6 1.8 12.6H12.6C13.0774 12.6 13.5352 12.4104 13.8728 12.0728C14.2104 11.7352 14.4 11.2774 14.4 10.8V1.8C14.4 1.32261 14.2104 0.864773 13.8728 0.527208C13.5352 0.189642 13.0774 0 12.6 0H1.8ZM12.6 10.8H1.8L5.4 3.6L8.1 9L9.9 5.4L12.6 10.8Z",
p2ec9c400: "M6.56272 9C7.08049 9.00001 7.50022 9.41974 7.50021 9.93751L7.50018 11.6253H9.29C9.80777 11.6253 10.2275 12.045 10.2275 12.5628C10.2275 13.0805 9.80777 13.5003 9.29 13.5003H3.83533C3.31756 13.5003 2.89783 13.0805 2.89783 12.5628C2.89783 12.045 3.31756 11.6253 3.83533 11.6253H5.62518L5.62521 9.93749C5.62521 9.41972 6.04495 8.99999 6.56272 9Z",
p331f9200: "M0 0.912162C0 0.408389 0.405259 0 0.905172 0H6.21552C8.12106 0 9.53448 1.67276 9.53448 3.56572C9.53448 4.44776 9.2276 5.28199 8.70706 5.92146C9.80044 6.65728 10.5 7.97124 10.5 9.40356C10.5 11.5896 8.87044 13.5 6.69828 13.5H0.905172C0.405259 13.5 0 13.0916 0 12.5878C0 12.0841 0.405259 11.6757 0.905172 11.6757H0.965517V1.82432H0.905172C0.405259 1.82432 0 1.41594 0 0.912162ZM2.77586 1.82432V5.30713H6.21552C6.97617 5.30713 7.72413 4.60381 7.72413 3.56572C7.72413 2.52764 6.97617 1.82432 6.21552 1.82432H2.77586ZM2.77586 7.13145V11.6757H6.69828C7.72555 11.6757 8.68965 10.7347 8.68965 9.40356C8.68965 8.07237 7.72556 7.13145 6.69828 7.13145H2.77586Z",
p3ff29e00: "M0.21934 0.238708C0.359965 0.0982579 0.550589 0.0193681 0.74934 0.0193681C0.948091 0.0193681 1.13871 0.0982579 1.27934 0.238708L4.99934 3.95871L8.71934 0.238708C8.788 0.165022 8.8708 0.105919 8.9628 0.064927C9.0548 0.023935 9.15412 0.00189351 9.25482 0.000116722C9.35552 -0.00166006 9.45555 0.0168643 9.54894 0.0545854C9.64233 0.0923064 9.72716 0.148451 9.79838 0.21967C9.8696 0.290889 9.92574 0.375722 9.96346 0.46911C10.0012 0.562499 10.0197 0.662527 10.0179 0.76323C10.0162 0.863933 9.99411 0.963247 9.95312 1.05525C9.91213 1.14725 9.85303 1.23005 9.77934 1.29871L5.52934 5.54871C5.38871 5.68916 5.19809 5.76805 4.99934 5.76805C4.80059 5.76805 4.60997 5.68916 4.46934 5.54871L0.21934 1.29871C0.0788894 1.15808 0 0.967459 0 0.768708C0 0.569957 0.0788894 0.379334 0.21934 0.238708Z",
p5e7b300: "M9.57164 2.28316C9.73768 2.11124 9.9363 1.97412 10.1559 1.87978C10.3755 1.78544 10.6117 1.73579 10.8507 1.73371C11.0897 1.73163 11.3267 1.77718 11.548 1.86768C11.7692 1.95819 11.9701 2.09184 12.1391 2.26085C12.3082 2.42986 12.4418 2.63083 12.5323 2.85205C12.6228 3.07326 12.6684 3.31028 12.6663 3.54928C12.6642 3.78829 12.6146 4.02448 12.5202 4.24409C12.4259 4.4637 12.2888 4.66232 12.1168 4.82836L9.41684 7.52836C9.07929 7.86581 8.62153 8.05538 8.14424 8.05538C7.66694 8.05538 7.20919 7.86581 6.87164 7.52836C6.7019 7.36442 6.47455 7.27371 6.23858 7.27576C6.0026 7.27781 5.77687 7.37246 5.61 7.53933C5.44313 7.70619 5.34848 7.93192 5.34643 8.1679C5.34438 8.40388 5.4351 8.63122 5.59904 8.80096C6.27414 9.47586 7.18965 9.85499 8.14424 9.85499C9.09883 9.85499 10.0143 9.47586 10.6894 8.80096L13.3894 6.10096C14.0452 5.42199 14.4081 4.51263 14.3999 3.56872C14.3917 2.62481 14.0131 1.72189 13.3456 1.05442C12.6781 0.386947 11.7752 0.0083384 10.8313 0.000136089C9.88737 -0.00806622 8.978 0.354794 8.29904 1.01056L6.94904 2.36056C6.86308 2.44358 6.79451 2.54289 6.74735 2.6527C6.70018 2.7625 6.67535 2.8806 6.67431 3.0001C6.67327 3.1196 6.69605 3.23811 6.7413 3.34872C6.78655 3.45933 6.85338 3.55981 6.93788 3.64432C7.02239 3.72882 7.12287 3.79565 7.23348 3.8409C7.34408 3.88615 7.4626 3.90893 7.5821 3.90789C7.7016 3.90685 7.8197 3.88202 7.9295 3.83485C8.0393 3.78769 8.13862 3.71912 8.22164 3.63316L9.57164 2.28316V2.28316ZM5.07164 6.78316C5.40919 6.44572 5.86694 6.25615 6.34424 6.25615C6.82153 6.25615 7.27929 6.44572 7.61684 6.78316C7.69986 6.86912 7.79917 6.93769 7.90897 6.98485C8.01878 7.03202 8.13687 7.05685 8.25638 7.05789C8.37588 7.05893 8.49439 7.03616 8.605 6.9909C8.7156 6.94565 8.81609 6.87882 8.90059 6.79432C8.9851 6.70982 9.05192 6.60933 9.09718 6.49872C9.14243 6.38811 9.1652 6.2696 9.16416 6.1501C9.16312 6.0306 9.1383 5.9125 9.09113 5.8027C9.04396 5.69289 8.9754 5.59358 8.88944 5.51056C8.21434 4.83567 7.29883 4.45653 6.34424 4.45653C5.38965 4.45653 4.47414 4.83567 3.79904 5.51056L1.09904 8.21056C0.755201 8.54265 0.480945 8.93989 0.292273 9.37911C0.1036 9.81832 0.00428966 10.2907 0.000135924 10.7687C-0.00401781 11.2467 0.0870683 11.7208 0.268079 12.1632C0.449091 12.6056 0.716402 13.0076 1.05442 13.3456C1.39243 13.6836 1.79438 13.9509 2.2368 14.1319C2.67923 14.3129 3.15328 14.404 3.63128 14.3999C4.10929 14.3957 4.58168 14.2964 5.02089 14.1077C5.46011 13.9191 5.85735 13.6448 6.18944 13.301L7.53944 11.951C7.6254 11.8679 7.69396 11.7686 7.74113 11.6588C7.7883 11.549 7.81312 11.4309 7.81416 11.3114C7.8152 11.1919 7.79243 11.0734 7.74718 10.9628C7.70192 10.8522 7.6351 10.7517 7.55059 10.6672C7.46609 10.5827 7.3656 10.5159 7.255 10.4706C7.14439 10.4254 7.02588 10.4026 6.90638 10.4036C6.78687 10.4047 6.66878 10.4295 6.55897 10.4767C6.44917 10.5238 6.34986 10.5924 6.26684 10.6784L4.91684 12.0284C4.75079 12.2003 4.55217 12.3374 4.33257 12.4317C4.11296 12.5261 3.87676 12.5757 3.63776 12.5778C3.39876 12.5799 3.16173 12.5343 2.94052 12.4438C2.71931 12.3533 2.51833 12.2197 2.34933 12.0507C2.18032 11.8817 2.04666 11.6807 1.95616 11.4595C1.86565 11.2383 1.82011 11.0012 1.82219 10.7622C1.82426 10.5232 1.87392 10.287 1.96826 10.0674C2.06259 9.84783 2.19972 9.64921 2.37164 9.48316L5.07164 6.78316Z",
} as const;


function Breadcrumbs() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Breadcrumbs">
      <div className="content-stretch flex gap-[14px] items-center justify-center pr-[14px] relative rounded-[8px] shrink-0" data-name="Breadcrumbs">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Services</p>
      </div>
      <div className="content-stretch flex gap-[14px] items-center justify-center pr-[14px] relative rounded-[8px] shrink-0" data-name="Breadcrumbs">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-right">
          <div className="absolute bottom-1/4 flex items-center justify-center left-[35%] right-[35%] top-1/4">
            <div className="-rotate-90 flex-none h-[6px] w-[10px]">
              <div className="relative size-full" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
                  <path clipRule="evenodd" d={svgPaths.p2ae3a500} fill="var(--fill-0, #A3A3A3)" fillRule="evenodd" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">New service category</p>
      </div>
    </div>
  );
}

function Button() {
  return <div className="content-stretch flex gap-[14px] items-center shrink-0" data-name="Button" />;
}

function Frame11() {
  return <div className="absolute bg-white left-[23px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px]" />;
}

function SwitchOn() {
  return (
    <div className="bg-[#05376d] h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px]" data-name="Switch on">
      <Frame11 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <SwitchOn />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Public view</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#171717] text-[30px] whitespace-nowrap">
        <p className="leading-[32px]">New service category</p>
      </div>
      <Button />
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="field-toggle">
        <Container3 />
      </div>
    </div>
  );
}

function HeadingPageHeading() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start pt-[32px] relative shrink-0 w-full" data-name="Heading_page / Heading">
      <Breadcrumbs />
      <Container2 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Full name</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic overflow-hidden relative text-[#171717] text-[14px] text-ellipsis whitespace-nowrap">Containers for wood waste</p>
        </div>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Short name</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">Lorem Ipsum</p>
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Mobile name</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">Lorem Ipsum</p>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label />
        <Input />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[66px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label1 />
        <Input1 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[66px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label2 />
        <Input2 />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Description</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p24adb580} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Comand() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Comand">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[16px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="bold">
            <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 13.5">
                <path clipRule="evenodd" d={svgPaths.p331f9200} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="italic">
            <div className="absolute inset-[12.5%_23.96%_12.5%_22.92%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5625 13.5005">
                <path clipRule="evenodd" d={svgPaths.p268a3f00} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="strikethrough">
            <div className="absolute inset-[12.5%_13.54%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1253 13.5003">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p2ec9c400} fill="var(--fill-0, #404040)" fillRule="evenodd" />
                  <path d={svgPaths.p170a7400} fill="var(--fill-0, #404040)" />
                  <path clipRule="evenodd" d={svgPaths.p16480400} fill="var(--fill-0, #404040)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="link">
            <div className="absolute inset-[10.25%_10.25%_9.75%_9.75%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
                <path clipRule="evenodd" d={svgPaths.p5e7b300} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="code">
            <div className="absolute inset-[15%_5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1996 12.6005">
                <path clipRule="evenodd" d={svgPaths.p13a2d900} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format_list_bulleted">
            <div className="absolute inset-[18.75%_12.5%_18.75%_10.42%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.875 11.25">
                <path d={svgPaths.p2a696580} fill="var(--fill-0, #404040)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format_list_numbered">
            <div className="absolute inset-[16.67%_12.5%_16.67%_8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.25 12">
                <path d={svgPaths.p22b4a1c0} fill="var(--fill-0, #404040)" id="Vector" />
              </svg>
            </div>
          </div>
          <Frame />
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="photograph">
            <div className="absolute inset-[15%_10%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 12.6">
                <path clipRule="evenodd" d={svgPaths.p2bd4e980} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex items-start px-[16px] py-[14px] relative size-full">
        <p className="flex-[1_0_0] font-['DM_Mono:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic opacity-0 relative text-[#262626] text-[16px] whitespace-pre-wrap">{`King put on your head-- Do you think you might do something better with the Lory, with a round face, and large eyes full of soup. 'There's certainly too much overcome to do anything but sit with its.`}</p>
      </div>
    </div>
  );
}

function ResizeIndicator() {
  return (
    <div className="absolute bottom-[4px] right-[4px] size-[12px]" data-name="Resize indicator">
      <div className="absolute inset-[-0.63%_0_0_-0.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0754 12.0754">
          <g id="Resize indicator">
            <path d={svgPaths.p1df11c0} id="Path" stroke="var(--stroke-0, #D4D4D4)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[240px] items-start overflow-clip relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <Comand />
      <Container4 />
      <ResizeIndicator />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">HTML-Description</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p24adb580} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Comand1() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Comand">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[16px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="bold">
            <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 13.5">
                <path clipRule="evenodd" d={svgPaths.p331f9200} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="italic">
            <div className="absolute inset-[12.5%_23.96%_12.5%_22.92%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5625 13.5005">
                <path clipRule="evenodd" d={svgPaths.p268a3f00} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="strikethrough">
            <div className="absolute inset-[12.5%_13.54%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1253 13.5003">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p2ec9c400} fill="var(--fill-0, #404040)" fillRule="evenodd" />
                  <path d={svgPaths.p170a7400} fill="var(--fill-0, #404040)" />
                  <path clipRule="evenodd" d={svgPaths.p16480400} fill="var(--fill-0, #404040)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="link">
            <div className="absolute inset-[10.25%_10.25%_9.75%_9.75%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
                <path clipRule="evenodd" d={svgPaths.p5e7b300} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="code">
            <div className="absolute inset-[15%_5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1996 12.6005">
                <path clipRule="evenodd" d={svgPaths.p13a2d900} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format_list_bulleted">
            <div className="absolute inset-[18.75%_12.5%_18.75%_10.42%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.875 11.25">
                <path d={svgPaths.p2a696580} fill="var(--fill-0, #404040)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format_list_numbered">
            <div className="absolute inset-[16.67%_12.5%_16.67%_8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.25 12">
                <path d={svgPaths.p22b4a1c0} fill="var(--fill-0, #404040)" id="Vector" />
              </svg>
            </div>
          </div>
          <Frame1 />
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="photograph">
            <div className="absolute inset-[15%_10%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 12.6">
                <path clipRule="evenodd" d={svgPaths.p2bd4e980} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex items-start px-[16px] py-[14px] relative size-full">
        <p className="flex-[1_0_0] font-['DM_Mono:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic opacity-0 relative text-[#262626] text-[16px] whitespace-pre-wrap">{`King put on your head-- Do you think you might do something better with the Lory, with a round face, and large eyes full of soup. 'There's certainly too much overcome to do anything but sit with its.`}</p>
      </div>
    </div>
  );
}

function ResizeIndicator1() {
  return (
    <div className="absolute bottom-[4px] right-[4px] size-[12px]" data-name="Resize indicator">
      <div className="absolute inset-[-0.63%_0_0_-0.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0754 12.0754">
          <g id="Resize indicator">
            <path d={svgPaths.p1df11c0} id="Path" stroke="var(--stroke-0, #D4D4D4)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[240px] items-start overflow-clip relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <Comand1 />
      <Container5 />
      <ResizeIndicator1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label3 />
        <Input3 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label4 />
        <Input4 />
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Service type</p>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 relative text-[#737373] text-[14px] whitespace-pre-wrap">Select option</p>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
            <div className="absolute bottom-[31.25%] left-1/4 right-[24.91%] top-[39.91%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.018 5.76805">
                <path clipRule="evenodd" d={svgPaths.p3ff29e00} fill="var(--fill-0, #737373)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return <div className="absolute bg-white left-[2px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px]" />;
}

function SwitchOff() {
  return (
    <div className="bg-[#e5e5e5] h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px]" data-name="Switch off">
      <Frame12 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <SwitchOff />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Postpayment only</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col gap-[8px] h-[66px] items-start relative shrink-0 w-full" data-name="fields">
        <Label5 />
        <Input5 />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="field-toggle">
        <Container6 />
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Photo for Web and App</p>
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip py-[29px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#737373] text-[14px] text-center whitespace-pre-wrap">
        <span className="leading-[20px]">{`Drag & Drop your files or `}</span>
        <span className="leading-[20px] text-[#05376d]">Browse</span>
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame22 />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[574px]" data-name="fields">
        <Label6 />
        <Input6 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px] w-full whitespace-pre-wrap">Optimal image dimensions: 180x180px</p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Row />
        <Frame19 />
        <Frame21 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-full" data-name="Card">
      <Body />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[24px] py-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[18px] whitespace-pre-wrap">Configurations</p>
        </div>
      </div>
    </div>
  );
}

function Line() {
  return <div className="bg-[#e5e5e5] h-px shrink-0 w-full" data-name="Line" />;
}

function Label7() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Inventory categories</p>
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 relative text-[#737373] text-[14px] whitespace-pre-wrap">Select option</p>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
            <div className="absolute bottom-[31.25%] left-1/4 right-[24.91%] top-[39.91%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.018 5.76805">
                <path clipRule="evenodd" d={svgPaths.p3ff29e00} fill="var(--fill-0, #737373)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">VAT Category</p>
    </div>
  );
}

function Input8() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 relative text-[#737373] text-[14px] whitespace-pre-wrap">Select option</p>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
            <div className="absolute bottom-[31.25%] left-1/4 right-[24.91%] top-[39.91%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.018 5.76805">
                <path clipRule="evenodd" d={svgPaths.p3ff29e00} fill="var(--fill-0, #737373)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Free rental days</p>
    </div>
  );
}

function Input9() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 relative text-[#737373] text-[14px] whitespace-pre-wrap">Select option</p>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
            <div className="absolute bottom-[31.25%] left-1/4 right-[24.91%] top-[39.91%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.018 5.76805">
                <path clipRule="evenodd" d={svgPaths.p3ff29e00} fill="var(--fill-0, #737373)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[66px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label7 />
        <Input7 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[66px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label8 />
        <Input8 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[66px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label9 />
        <Input9 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px] w-full whitespace-pre-wrap">Days included in the price before the paid period</p>
      </div>
    </div>
  );
}

function Frame13() {
  return <div className="absolute bg-white left-[2px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px]" />;
}

function SwitchOff1() {
  return (
    <div className="bg-[#e5e5e5] h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px]" data-name="Switch off">
      <Frame13 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <SwitchOff1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Multiple Inventory in 1 order</p>
    </div>
  );
}

function Frame14() {
  return <div className="absolute bg-white left-[2px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px]" />;
}

function SwitchOff2() {
  return (
    <div className="bg-[#e5e5e5] h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px]" data-name="Switch off">
      <Frame14 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <SwitchOff2 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Service frequency</p>
    </div>
  );
}

function Frame15() {
  return <div className="absolute bg-white left-[2px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px]" />;
}

function SwitchOff3() {
  return (
    <div className="bg-[#e5e5e5] h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px]" data-name="Switch off">
      <Frame15 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <SwitchOff3 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">{`Сlient image uploading `}</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="field-toggle">
        <Container8 />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="field-toggle">
        <Container9 />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="field-toggle">
        <Container10 />
      </div>
    </div>
  );
}

function Frame16() {
  return <div className="absolute bg-white left-[2px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px]" />;
}

function SwitchOff4() {
  return (
    <div className="bg-[#e5e5e5] h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px]" data-name="Switch off">
      <Frame16 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <SwitchOff4 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Disabling email sending for free services</p>
    </div>
  );
}

function Frame17() {
  return <div className="absolute bg-white left-[23px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px]" />;
}

function SwitchOn1() {
  return (
    <div className="bg-[#05376d] h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px]" data-name="Switch on">
      <Frame17 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <SwitchOn1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Available for promo</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="field-toggle">
        <Container12 />
      </div>
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Promo categories</p>
    </div>
  );
}

function Input10() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 relative text-[#737373] text-[14px] whitespace-pre-wrap">Select option</p>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
            <div className="absolute bottom-[31.25%] left-1/4 right-[24.91%] top-[39.91%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.018 5.76805">
                <path clipRule="evenodd" d={svgPaths.p3ff29e00} fill="var(--fill-0, #737373)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Frame18 />
      <div className="content-stretch flex flex-col gap-[8px] h-[66px] items-start relative shrink-0 w-[574px]" data-name="fields">
        <Label10 />
        <Input10 />
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Row1 />
        <Frame23 />
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="field-toggle">
          <Container11 />
        </div>
        <Frame24 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-full" data-name="Card">
      <div className="bg-white relative shrink-0 w-full" data-name="Heading_card / Default">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
          <Container7 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Separator">
            <Line />
          </div>
        </div>
      </div>
      <Body1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[24px] py-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[18px] whitespace-pre-wrap">Service terms</p>
        </div>
      </div>
    </div>
  );
}

function Line1() {
  return <div className="bg-[#e5e5e5] h-px shrink-0 w-full" data-name="Line" />;
}

function Label11() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Title (EN)</p>
    </div>
  );
}

function Input11() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">Containers for wood waste</p>
        </div>
      </div>
    </div>
  );
}

function Label12() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Subtitle (EN)</p>
    </div>
  );
}

function Input12() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">Lorem Ipsum</p>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label11 />
        <Input11 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[66px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label12 />
        <Input12 />
      </div>
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Confirmation text (EN)</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p24adb580} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Comand2() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Comand">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[16px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="bold">
            <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 13.5">
                <path clipRule="evenodd" d={svgPaths.p331f9200} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="italic">
            <div className="absolute inset-[12.5%_23.96%_12.5%_22.92%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5625 13.5005">
                <path clipRule="evenodd" d={svgPaths.p268a3f00} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="strikethrough">
            <div className="absolute inset-[12.5%_13.54%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1253 13.5003">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p2ec9c400} fill="var(--fill-0, #404040)" fillRule="evenodd" />
                  <path d={svgPaths.p170a7400} fill="var(--fill-0, #404040)" />
                  <path clipRule="evenodd" d={svgPaths.p16480400} fill="var(--fill-0, #404040)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="link">
            <div className="absolute inset-[10.25%_10.25%_9.75%_9.75%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
                <path clipRule="evenodd" d={svgPaths.p5e7b300} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="code">
            <div className="absolute inset-[15%_5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1996 12.6005">
                <path clipRule="evenodd" d={svgPaths.p13a2d900} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format_list_bulleted">
            <div className="absolute inset-[18.75%_12.5%_18.75%_10.42%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.875 11.25">
                <path d={svgPaths.p2a696580} fill="var(--fill-0, #404040)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format_list_numbered">
            <div className="absolute inset-[16.67%_12.5%_16.67%_8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.25 12">
                <path d={svgPaths.p22b4a1c0} fill="var(--fill-0, #404040)" id="Vector" />
              </svg>
            </div>
          </div>
          <Frame2 />
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="photograph">
            <div className="absolute inset-[15%_10%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 12.6">
                <path clipRule="evenodd" d={svgPaths.p2bd4e980} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex items-start px-[16px] py-[14px] relative size-full">
        <p className="flex-[1_0_0] font-['DM_Mono:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic opacity-0 relative text-[#262626] text-[16px] whitespace-pre-wrap">{`King put on your head-- Do you think you might do something better with the Lory, with a round face, and large eyes full of soup. 'There's certainly too much overcome to do anything but sit with its.`}</p>
      </div>
    </div>
  );
}

function ResizeIndicator2() {
  return (
    <div className="absolute bottom-[4px] right-[4px] size-[12px]" data-name="Resize indicator">
      <div className="absolute inset-[-0.63%_0_0_-0.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0754 12.0754">
          <g id="Resize indicator">
            <path d={svgPaths.p1df11c0} id="Path" stroke="var(--stroke-0, #D4D4D4)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Input13() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[240px] items-start overflow-clip relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <Comand2 />
      <Container14 />
      <ResizeIndicator2 />
    </div>
  );
}

function Label14() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Price information (EN)</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p24adb580} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Comand3() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Comand">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[16px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="bold">
            <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 13.5">
                <path clipRule="evenodd" d={svgPaths.p331f9200} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="italic">
            <div className="absolute inset-[12.5%_23.96%_12.5%_22.92%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5625 13.5005">
                <path clipRule="evenodd" d={svgPaths.p268a3f00} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="strikethrough">
            <div className="absolute inset-[12.5%_13.54%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1253 13.5003">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p2ec9c400} fill="var(--fill-0, #404040)" fillRule="evenodd" />
                  <path d={svgPaths.p170a7400} fill="var(--fill-0, #404040)" />
                  <path clipRule="evenodd" d={svgPaths.p16480400} fill="var(--fill-0, #404040)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="link">
            <div className="absolute inset-[10.25%_10.25%_9.75%_9.75%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
                <path clipRule="evenodd" d={svgPaths.p5e7b300} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="code">
            <div className="absolute inset-[15%_5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1996 12.6005">
                <path clipRule="evenodd" d={svgPaths.p13a2d900} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format_list_bulleted">
            <div className="absolute inset-[18.75%_12.5%_18.75%_10.42%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.875 11.25">
                <path d={svgPaths.p2a696580} fill="var(--fill-0, #404040)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format_list_numbered">
            <div className="absolute inset-[16.67%_12.5%_16.67%_8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.25 12">
                <path d={svgPaths.p22b4a1c0} fill="var(--fill-0, #404040)" id="Vector" />
              </svg>
            </div>
          </div>
          <Frame3 />
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="photograph">
            <div className="absolute inset-[15%_10%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 12.6">
                <path clipRule="evenodd" d={svgPaths.p2bd4e980} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex items-start px-[16px] py-[14px] relative size-full">
        <p className="flex-[1_0_0] font-['DM_Mono:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic opacity-0 relative text-[#262626] text-[16px] whitespace-pre-wrap">{`King put on your head-- Do you think you might do something better with the Lory, with a round face, and large eyes full of soup. 'There's certainly too much overcome to do anything but sit with its.`}</p>
      </div>
    </div>
  );
}

function ResizeIndicator3() {
  return (
    <div className="absolute bottom-[4px] right-[4px] size-[12px]" data-name="Resize indicator">
      <div className="absolute inset-[-0.63%_0_0_-0.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0754 12.0754">
          <g id="Resize indicator">
            <path d={svgPaths.p1df11c0} id="Path" stroke="var(--stroke-0, #D4D4D4)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Input14() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[240px] items-start overflow-clip relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <Comand3 />
      <Container15 />
      <ResizeIndicator3 />
    </div>
  );
}

function Label15() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">HTML-Text (Body) (EN)</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p24adb580} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Comand4() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Comand">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[16px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="bold">
            <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 13.5">
                <path clipRule="evenodd" d={svgPaths.p331f9200} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="italic">
            <div className="absolute inset-[12.5%_23.96%_12.5%_22.92%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5625 13.5005">
                <path clipRule="evenodd" d={svgPaths.p268a3f00} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="strikethrough">
            <div className="absolute inset-[12.5%_13.54%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1253 13.5003">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p2ec9c400} fill="var(--fill-0, #404040)" fillRule="evenodd" />
                  <path d={svgPaths.p170a7400} fill="var(--fill-0, #404040)" />
                  <path clipRule="evenodd" d={svgPaths.p16480400} fill="var(--fill-0, #404040)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="link">
            <div className="absolute inset-[10.25%_10.25%_9.75%_9.75%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
                <path clipRule="evenodd" d={svgPaths.p5e7b300} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="code">
            <div className="absolute inset-[15%_5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1996 12.6005">
                <path clipRule="evenodd" d={svgPaths.p13a2d900} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format_list_bulleted">
            <div className="absolute inset-[18.75%_12.5%_18.75%_10.42%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.875 11.25">
                <path d={svgPaths.p2a696580} fill="var(--fill-0, #404040)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format_list_numbered">
            <div className="absolute inset-[16.67%_12.5%_16.67%_8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.25 12">
                <path d={svgPaths.p22b4a1c0} fill="var(--fill-0, #404040)" id="Vector" />
              </svg>
            </div>
          </div>
          <Frame4 />
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="photograph">
            <div className="absolute inset-[15%_10%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 12.6">
                <path clipRule="evenodd" d={svgPaths.p2bd4e980} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex items-start px-[16px] py-[14px] relative size-full">
        <p className="flex-[1_0_0] font-['DM_Mono:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic opacity-0 relative text-[#262626] text-[16px] whitespace-pre-wrap">{`King put on your head-- Do you think you might do something better with the Lory, with a round face, and large eyes full of soup. 'There's certainly too much overcome to do anything but sit with its.`}</p>
      </div>
    </div>
  );
}

function ResizeIndicator4() {
  return (
    <div className="absolute bottom-[4px] right-[4px] size-[12px]" data-name="Resize indicator">
      <div className="absolute inset-[-0.63%_0_0_-0.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0754 12.0754">
          <g id="Resize indicator">
            <path d={svgPaths.p1df11c0} id="Path" stroke="var(--stroke-0, #D4D4D4)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Input15() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[240px] items-start overflow-clip relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <Comand4 />
      <Container16 />
      <ResizeIndicator4 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label13 />
        <Input13 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label14 />
        <Input14 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label15 />
        <Input15 />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Row2 />
      <Frame20 />
    </div>
  );
}

function Body3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative w-full">
        <Frame25 />
      </div>
    </div>
  );
}

function TableCard() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[14px] items-start justify-center min-w-[272px] overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-[1172px]" data-name="Table card">
      <Body3 />
    </div>
  );
}

function Label16() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Title (LV)</p>
    </div>
  );
}

function Input16() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">Containers for wood waste</p>
        </div>
      </div>
    </div>
  );
}

function Label17() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Subtitle (LV)</p>
    </div>
  );
}

function Input17() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">Lorem Ipsum</p>
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label16 />
        <Input16 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[66px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label17 />
        <Input17 />
      </div>
    </div>
  );
}

function Label18() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Confirmation text (LV)</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p24adb580} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Comand5() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Comand">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[16px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="bold">
            <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 13.5">
                <path clipRule="evenodd" d={svgPaths.p331f9200} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="italic">
            <div className="absolute inset-[12.5%_23.96%_12.5%_22.92%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5625 13.5005">
                <path clipRule="evenodd" d={svgPaths.p268a3f00} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="strikethrough">
            <div className="absolute inset-[12.5%_13.54%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1253 13.5003">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p2ec9c400} fill="var(--fill-0, #404040)" fillRule="evenodd" />
                  <path d={svgPaths.p170a7400} fill="var(--fill-0, #404040)" />
                  <path clipRule="evenodd" d={svgPaths.p16480400} fill="var(--fill-0, #404040)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="link">
            <div className="absolute inset-[10.25%_10.25%_9.75%_9.75%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
                <path clipRule="evenodd" d={svgPaths.p5e7b300} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="code">
            <div className="absolute inset-[15%_5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1996 12.6005">
                <path clipRule="evenodd" d={svgPaths.p13a2d900} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format_list_bulleted">
            <div className="absolute inset-[18.75%_12.5%_18.75%_10.42%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.875 11.25">
                <path d={svgPaths.p2a696580} fill="var(--fill-0, #404040)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format_list_numbered">
            <div className="absolute inset-[16.67%_12.5%_16.67%_8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.25 12">
                <path d={svgPaths.p22b4a1c0} fill="var(--fill-0, #404040)" id="Vector" />
              </svg>
            </div>
          </div>
          <Frame5 />
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="photograph">
            <div className="absolute inset-[15%_10%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 12.6">
                <path clipRule="evenodd" d={svgPaths.p2bd4e980} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex items-start px-[16px] py-[14px] relative size-full">
        <p className="flex-[1_0_0] font-['DM_Mono:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic opacity-0 relative text-[#262626] text-[16px] whitespace-pre-wrap">{`King put on your head-- Do you think you might do something better with the Lory, with a round face, and large eyes full of soup. 'There's certainly too much overcome to do anything but sit with its.`}</p>
      </div>
    </div>
  );
}

function ResizeIndicator5() {
  return (
    <div className="absolute bottom-[4px] right-[4px] size-[12px]" data-name="Resize indicator">
      <div className="absolute inset-[-0.63%_0_0_-0.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0754 12.0754">
          <g id="Resize indicator">
            <path d={svgPaths.p1df11c0} id="Path" stroke="var(--stroke-0, #D4D4D4)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Input18() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[240px] items-start overflow-clip relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <Comand5 />
      <Container17 />
      <ResizeIndicator5 />
    </div>
  );
}

function Label19() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Price information(LV)</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p24adb580} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Comand6() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Comand">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[16px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="bold">
            <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 13.5">
                <path clipRule="evenodd" d={svgPaths.p331f9200} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="italic">
            <div className="absolute inset-[12.5%_23.96%_12.5%_22.92%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5625 13.5005">
                <path clipRule="evenodd" d={svgPaths.p268a3f00} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="strikethrough">
            <div className="absolute inset-[12.5%_13.54%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1253 13.5003">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p2ec9c400} fill="var(--fill-0, #404040)" fillRule="evenodd" />
                  <path d={svgPaths.p170a7400} fill="var(--fill-0, #404040)" />
                  <path clipRule="evenodd" d={svgPaths.p16480400} fill="var(--fill-0, #404040)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="link">
            <div className="absolute inset-[10.25%_10.25%_9.75%_9.75%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
                <path clipRule="evenodd" d={svgPaths.p5e7b300} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="code">
            <div className="absolute inset-[15%_5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1996 12.6005">
                <path clipRule="evenodd" d={svgPaths.p13a2d900} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format_list_bulleted">
            <div className="absolute inset-[18.75%_12.5%_18.75%_10.42%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.875 11.25">
                <path d={svgPaths.p2a696580} fill="var(--fill-0, #404040)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format_list_numbered">
            <div className="absolute inset-[16.67%_12.5%_16.67%_8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.25 12">
                <path d={svgPaths.p22b4a1c0} fill="var(--fill-0, #404040)" id="Vector" />
              </svg>
            </div>
          </div>
          <Frame6 />
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="photograph">
            <div className="absolute inset-[15%_10%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 12.6">
                <path clipRule="evenodd" d={svgPaths.p2bd4e980} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex items-start px-[16px] py-[14px] relative size-full">
        <p className="flex-[1_0_0] font-['DM_Mono:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic opacity-0 relative text-[#262626] text-[16px] whitespace-pre-wrap">{`King put on your head-- Do you think you might do something better with the Lory, with a round face, and large eyes full of soup. 'There's certainly too much overcome to do anything but sit with its.`}</p>
      </div>
    </div>
  );
}

function ResizeIndicator6() {
  return (
    <div className="absolute bottom-[4px] right-[4px] size-[12px]" data-name="Resize indicator">
      <div className="absolute inset-[-0.63%_0_0_-0.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0754 12.0754">
          <g id="Resize indicator">
            <path d={svgPaths.p1df11c0} id="Path" stroke="var(--stroke-0, #D4D4D4)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Input19() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[240px] items-start overflow-clip relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <Comand6 />
      <Container18 />
      <ResizeIndicator6 />
    </div>
  );
}

function Label20() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">HTML-Text (Body)(LV)</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p24adb580} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Comand7() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Comand">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[16px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="bold">
            <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 13.5">
                <path clipRule="evenodd" d={svgPaths.p331f9200} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="italic">
            <div className="absolute inset-[12.5%_23.96%_12.5%_22.92%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5625 13.5005">
                <path clipRule="evenodd" d={svgPaths.p268a3f00} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="strikethrough">
            <div className="absolute inset-[12.5%_13.54%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1253 13.5003">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p2ec9c400} fill="var(--fill-0, #404040)" fillRule="evenodd" />
                  <path d={svgPaths.p170a7400} fill="var(--fill-0, #404040)" />
                  <path clipRule="evenodd" d={svgPaths.p16480400} fill="var(--fill-0, #404040)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="link">
            <div className="absolute inset-[10.25%_10.25%_9.75%_9.75%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
                <path clipRule="evenodd" d={svgPaths.p5e7b300} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="code">
            <div className="absolute inset-[15%_5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1996 12.6005">
                <path clipRule="evenodd" d={svgPaths.p13a2d900} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format_list_bulleted">
            <div className="absolute inset-[18.75%_12.5%_18.75%_10.42%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.875 11.25">
                <path d={svgPaths.p2a696580} fill="var(--fill-0, #404040)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format_list_numbered">
            <div className="absolute inset-[16.67%_12.5%_16.67%_8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.25 12">
                <path d={svgPaths.p22b4a1c0} fill="var(--fill-0, #404040)" id="Vector" />
              </svg>
            </div>
          </div>
          <Frame7 />
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="photograph">
            <div className="absolute inset-[15%_10%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 12.6">
                <path clipRule="evenodd" d={svgPaths.p2bd4e980} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex items-start px-[16px] py-[14px] relative size-full">
        <p className="flex-[1_0_0] font-['DM_Mono:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic opacity-0 relative text-[#262626] text-[16px] whitespace-pre-wrap">{`King put on your head-- Do you think you might do something better with the Lory, with a round face, and large eyes full of soup. 'There's certainly too much overcome to do anything but sit with its.`}</p>
      </div>
    </div>
  );
}

function ResizeIndicator7() {
  return (
    <div className="absolute bottom-[4px] right-[4px] size-[12px]" data-name="Resize indicator">
      <div className="absolute inset-[-0.63%_0_0_-0.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0754 12.0754">
          <g id="Resize indicator">
            <path d={svgPaths.p1df11c0} id="Path" stroke="var(--stroke-0, #D4D4D4)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Input20() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[240px] items-start overflow-clip relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <Comand7 />
      <Container19 />
      <ResizeIndicator7 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label18 />
        <Input18 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label19 />
        <Input19 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label20 />
        <Input20 />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Row3 />
      <Frame27 />
    </div>
  );
}

function Body4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative w-full">
        <Frame26 />
      </div>
    </div>
  );
}

function TableCard1() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[14px] items-start justify-center min-w-[272px] overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-[1172px]" data-name="Table card">
      <Body4 />
    </div>
  );
}

function Label21() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Title (RU)</p>
    </div>
  );
}

function Input21() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">Containers for wood waste</p>
        </div>
      </div>
    </div>
  );
}

function Label22() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Subtitle (RU)</p>
    </div>
  );
}

function Input22() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">Lorem Ipsum</p>
        </div>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label21 />
        <Input21 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[66px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label22 />
        <Input22 />
      </div>
    </div>
  );
}

function Label23() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Confirmation text (RU)</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p24adb580} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Comand8() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Comand">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[16px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="bold">
            <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 13.5">
                <path clipRule="evenodd" d={svgPaths.p331f9200} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="italic">
            <div className="absolute inset-[12.5%_23.96%_12.5%_22.92%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5625 13.5005">
                <path clipRule="evenodd" d={svgPaths.p268a3f00} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="strikethrough">
            <div className="absolute inset-[12.5%_13.54%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1253 13.5003">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p2ec9c400} fill="var(--fill-0, #404040)" fillRule="evenodd" />
                  <path d={svgPaths.p170a7400} fill="var(--fill-0, #404040)" />
                  <path clipRule="evenodd" d={svgPaths.p16480400} fill="var(--fill-0, #404040)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="link">
            <div className="absolute inset-[10.25%_10.25%_9.75%_9.75%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
                <path clipRule="evenodd" d={svgPaths.p5e7b300} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="code">
            <div className="absolute inset-[15%_5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1996 12.6005">
                <path clipRule="evenodd" d={svgPaths.p13a2d900} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format_list_bulleted">
            <div className="absolute inset-[18.75%_12.5%_18.75%_10.42%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.875 11.25">
                <path d={svgPaths.p2a696580} fill="var(--fill-0, #404040)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format_list_numbered">
            <div className="absolute inset-[16.67%_12.5%_16.67%_8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.25 12">
                <path d={svgPaths.p22b4a1c0} fill="var(--fill-0, #404040)" id="Vector" />
              </svg>
            </div>
          </div>
          <Frame8 />
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="photograph">
            <div className="absolute inset-[15%_10%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 12.6">
                <path clipRule="evenodd" d={svgPaths.p2bd4e980} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex items-start px-[16px] py-[14px] relative size-full">
        <p className="flex-[1_0_0] font-['DM_Mono:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic opacity-0 relative text-[#262626] text-[16px] whitespace-pre-wrap">{`King put on your head-- Do you think you might do something better with the Lory, with a round face, and large eyes full of soup. 'There's certainly too much overcome to do anything but sit with its.`}</p>
      </div>
    </div>
  );
}

function ResizeIndicator8() {
  return (
    <div className="absolute bottom-[4px] right-[4px] size-[12px]" data-name="Resize indicator">
      <div className="absolute inset-[-0.63%_0_0_-0.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0754 12.0754">
          <g id="Resize indicator">
            <path d={svgPaths.p1df11c0} id="Path" stroke="var(--stroke-0, #D4D4D4)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Input23() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[240px] items-start overflow-clip relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <Comand8 />
      <Container20 />
      <ResizeIndicator8 />
    </div>
  );
}

function Label24() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Price information (RU)</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p24adb580} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Comand9() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Comand">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[16px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="bold">
            <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 13.5">
                <path clipRule="evenodd" d={svgPaths.p331f9200} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="italic">
            <div className="absolute inset-[12.5%_23.96%_12.5%_22.92%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5625 13.5005">
                <path clipRule="evenodd" d={svgPaths.p268a3f00} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="strikethrough">
            <div className="absolute inset-[12.5%_13.54%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1253 13.5003">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p2ec9c400} fill="var(--fill-0, #404040)" fillRule="evenodd" />
                  <path d={svgPaths.p170a7400} fill="var(--fill-0, #404040)" />
                  <path clipRule="evenodd" d={svgPaths.p16480400} fill="var(--fill-0, #404040)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="link">
            <div className="absolute inset-[10.25%_10.25%_9.75%_9.75%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
                <path clipRule="evenodd" d={svgPaths.p5e7b300} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="code">
            <div className="absolute inset-[15%_5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1996 12.6005">
                <path clipRule="evenodd" d={svgPaths.p13a2d900} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format_list_bulleted">
            <div className="absolute inset-[18.75%_12.5%_18.75%_10.42%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.875 11.25">
                <path d={svgPaths.p2a696580} fill="var(--fill-0, #404040)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format_list_numbered">
            <div className="absolute inset-[16.67%_12.5%_16.67%_8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.25 12">
                <path d={svgPaths.p22b4a1c0} fill="var(--fill-0, #404040)" id="Vector" />
              </svg>
            </div>
          </div>
          <Frame9 />
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="photograph">
            <div className="absolute inset-[15%_10%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 12.6">
                <path clipRule="evenodd" d={svgPaths.p2bd4e980} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex items-start px-[16px] py-[14px] relative size-full">
        <p className="flex-[1_0_0] font-['DM_Mono:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic opacity-0 relative text-[#262626] text-[16px] whitespace-pre-wrap">{`King put on your head-- Do you think you might do something better with the Lory, with a round face, and large eyes full of soup. 'There's certainly too much overcome to do anything but sit with its.`}</p>
      </div>
    </div>
  );
}

function ResizeIndicator9() {
  return (
    <div className="absolute bottom-[4px] right-[4px] size-[12px]" data-name="Resize indicator">
      <div className="absolute inset-[-0.63%_0_0_-0.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0754 12.0754">
          <g id="Resize indicator">
            <path d={svgPaths.p1df11c0} id="Path" stroke="var(--stroke-0, #D4D4D4)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Input24() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[240px] items-start overflow-clip relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <Comand9 />
      <Container21 />
      <ResizeIndicator9 />
    </div>
  );
}

function Label25() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">HTML-Text (Body) (RU)</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p24adb580} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Comand10() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Comand">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[16px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="bold">
            <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 13.5">
                <path clipRule="evenodd" d={svgPaths.p331f9200} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="italic">
            <div className="absolute inset-[12.5%_23.96%_12.5%_22.92%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5625 13.5005">
                <path clipRule="evenodd" d={svgPaths.p268a3f00} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="strikethrough">
            <div className="absolute inset-[12.5%_13.54%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1253 13.5003">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p2ec9c400} fill="var(--fill-0, #404040)" fillRule="evenodd" />
                  <path d={svgPaths.p170a7400} fill="var(--fill-0, #404040)" />
                  <path clipRule="evenodd" d={svgPaths.p16480400} fill="var(--fill-0, #404040)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="link">
            <div className="absolute inset-[10.25%_10.25%_9.75%_9.75%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
                <path clipRule="evenodd" d={svgPaths.p5e7b300} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="code">
            <div className="absolute inset-[15%_5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1996 12.6005">
                <path clipRule="evenodd" d={svgPaths.p13a2d900} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format_list_bulleted">
            <div className="absolute inset-[18.75%_12.5%_18.75%_10.42%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.875 11.25">
                <path d={svgPaths.p2a696580} fill="var(--fill-0, #404040)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format_list_numbered">
            <div className="absolute inset-[16.67%_12.5%_16.67%_8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.25 12">
                <path d={svgPaths.p22b4a1c0} fill="var(--fill-0, #404040)" id="Vector" />
              </svg>
            </div>
          </div>
          <Frame10 />
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="photograph">
            <div className="absolute inset-[15%_10%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 12.6">
                <path clipRule="evenodd" d={svgPaths.p2bd4e980} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex items-start px-[16px] py-[14px] relative size-full">
        <p className="flex-[1_0_0] font-['DM_Mono:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic opacity-0 relative text-[#262626] text-[16px] whitespace-pre-wrap">{`King put on your head-- Do you think you might do something better with the Lory, with a round face, and large eyes full of soup. 'There's certainly too much overcome to do anything but sit with its.`}</p>
      </div>
    </div>
  );
}

function ResizeIndicator10() {
  return (
    <div className="absolute bottom-[4px] right-[4px] size-[12px]" data-name="Resize indicator">
      <div className="absolute inset-[-0.63%_0_0_-0.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0754 12.0754">
          <g id="Resize indicator">
            <path d={svgPaths.p1df11c0} id="Path" stroke="var(--stroke-0, #D4D4D4)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Input25() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[240px] items-start overflow-clip relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <Comand10 />
      <Container22 />
      <ResizeIndicator10 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label23 />
        <Input23 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label24 />
        <Input24 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
        <Label25 />
        <Input25 />
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Row4 />
      <Frame29 />
    </div>
  );
}

function Body5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative w-full">
        <Frame28 />
      </div>
    </div>
  );
}

function TableCard2() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[14px] items-start justify-center min-w-[272px] overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-[1172px]" data-name="Table card">
      <Body5 />
    </div>
  );
}

function Body2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <TableCard />
        <TableCard1 />
        <TableCard2 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-full" data-name="Card">
      <div className="bg-white relative shrink-0 w-full" data-name="Heading_card / Default">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
          <Container13 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Separator">
            <Line1 />
          </div>
        </div>
      </div>
      <Body2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Button">
      <div className="bg-[#05376d] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Create Service category</p>
      </div>
      <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)]" />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#262626] text-[14px] text-center">Cancel</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[900px]" data-name="Container">
      <Button1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1220px] relative shrink-0 w-full" data-name="Container">
      <HeadingPageHeading />
      <Card />
      <Card1 />
      <Card2 />
      <div className="bg-[#fafafa] content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Heading_page / Action">
        <Container23 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[48px] px-[32px] relative size-full" data-name="Container">
      <Container1 />
    </div>
  );
}