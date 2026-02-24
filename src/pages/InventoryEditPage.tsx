import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const svgPaths = {
p26e2b7f0: "M5.22 8.22C5.36063 8.07955 5.55125 8.00066 5.75 8.00066C5.94875 8.00066 6.13937 8.07955 6.28 8.22L10 11.94L13.72 8.22C13.7887 8.14631 13.8715 8.08721 13.9635 8.04622C14.0555 8.00523 14.1548 7.98319 14.2555 7.98141C14.3562 7.97963 14.4562 7.99816 14.5496 8.03588C14.643 8.0736 14.7278 8.12974 14.799 8.20096C14.8703 8.27218 14.9264 8.35701 14.9641 8.4504C15.0018 8.54379 15.0204 8.64382 15.0186 8.74452C15.0168 8.84522 14.9948 8.94454 14.9538 9.03654C14.9128 9.12854 14.8537 9.21134 14.78 9.28L10.53 13.53C10.3894 13.6705 10.1988 13.7493 10 13.7493C9.80125 13.7493 9.61063 13.6705 9.47 13.53L5.22 9.28C5.07955 9.13937 5.00066 8.94875 5.00066 8.75C5.00066 8.55125 5.07955 8.36063 5.22 8.22Z",
p272bda70: "M11.875 6.46354C10.5559 5.99832 9.02845 6.29325 7.97335 7.34835C6.50888 8.81282 6.50888 11.1872 7.97335 12.6517C9.02845 13.7067 10.5559 14.0017 11.875 13.5365M6.25 8.75H10.625M6.25 11.25H10.625M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z",
p2da5df80: "M2.96274 2.96274C3.12139 2.80409 3.37861 2.80409 3.53726 2.96274L6.5 5.92548L9.46274 2.96274C9.62139 2.80409 9.87861 2.80409 10.0373 2.96274C10.1959 3.12139 10.1959 3.37861 10.0373 3.53726L7.07452 6.5L10.0373 9.46274C10.1959 9.62139 10.1959 9.87861 10.0373 10.0373C9.87861 10.1959 9.62139 10.1959 9.46274 10.0373L6.5 7.07452L3.53726 10.0373C3.37861 10.1959 3.12139 10.1959 2.96274 10.0373C2.80409 9.87861 2.80409 9.62139 2.96274 9.46274L5.92548 6.5L2.96274 3.53726C2.80409 3.37861 2.80409 3.12139 2.96274 2.96274Z",
p38e5e800: "M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z",
} as const;

const svgPathsView = {
p1a72f800: "M12 3.75C9.81196 3.75 7.71354 4.61919 6.16637 6.16637C4.61919 7.71354 3.75 9.81196 3.75 12C3.75 13.0834 3.96339 14.1562 4.37799 15.1571C4.79259 16.1581 5.40029 17.0675 6.16637 17.8336C6.93245 18.5997 7.84193 19.2074 8.84286 19.622C9.8438 20.0366 10.9166 20.25 12 20.25C13.0834 20.25 14.1562 20.0366 15.1571 19.622C16.1581 19.2074 17.0675 18.5997 17.8336 17.8336C18.5997 17.0675 19.2074 16.1581 19.622 15.1571C20.0366 14.1562 20.25 13.0834 20.25 12C20.25 9.81196 19.3808 7.71354 17.8336 6.16637C16.2865 4.61919 14.188 3.75 12 3.75ZM5.10571 5.10571C6.93419 3.27723 9.41414 2.25 12 2.25C14.5859 2.25 17.0658 3.27723 18.8943 5.10571C20.7228 6.93419 21.75 9.41414 21.75 12C21.75 13.2804 21.4978 14.5482 21.0078 15.7312C20.5178 16.9141 19.7997 17.9889 18.8943 18.8943C17.9889 19.7997 16.9141 20.5178 15.7312 21.0078C14.5482 21.4978 13.2804 21.75 12 21.75C10.7196 21.75 9.45176 21.4978 8.26884 21.0078C7.08591 20.5178 6.01108 19.7997 5.10571 18.8943C4.20034 17.9889 3.48216 16.9141 2.99217 15.7312C2.50219 14.5482 2.25 13.2804 2.25 12C2.25 9.41414 3.27723 6.93419 5.10571 5.10571ZM15.4359 9.1397C15.773 9.38046 15.8511 9.84887 15.6103 10.1859L11.8603 15.4359C11.7322 15.6153 11.5316 15.7293 11.3119 15.7474C11.0921 15.7656 10.8756 15.6862 10.7197 15.5303L8.46967 13.2803C8.17678 12.9874 8.17678 12.5126 8.46967 12.2197C8.76256 11.9268 9.23744 11.9268 9.53033 12.2197L11.1543 13.8436L14.3897 9.31407C14.6305 8.97701 15.0989 8.89894 15.4359 9.1397Z",
p1e899480: "M0.209473 11.7918L1.02896 8.81751C0.521793 7.94774 0.255318 6.95819 0.255318 5.94869C0.258183 2.78329 2.84557 0.208191 6.02609 0.208191C7.5705 0.208191 9.01749 0.80705 10.1063 1.8907C11.1951 2.97435 11.794 4.41732 11.794 5.95154C11.794 9.11694 9.20373 11.692 6.02609 11.692H6.02322C5.05761 11.692 4.10918 11.4496 3.26678 10.9934L0.209473 11.7918Z",
p1f07d480: "M1.01821 5.64675C4.11895 4.29581 6.1866 3.40519 7.22115 2.97488C10.175 1.74627 10.7888 1.53285 11.1888 1.5258C11.2768 1.52425 11.4736 1.54606 11.601 1.64946C11.7086 1.73678 11.7382 1.85473 11.7524 1.93751C11.7666 2.0203 11.7842 2.20888 11.7702 2.35623C11.6101 4.03811 10.9175 8.11957 10.5651 10.0033C10.416 10.8004 10.1224 11.0676 9.83821 11.0938C9.22053 11.1506 8.7515 10.6856 8.15325 10.2934C7.2171 9.67976 6.68824 9.29775 5.77954 8.69894C4.72939 8.00691 5.41016 7.62655 6.00864 7.00495C6.16526 6.84227 8.88677 4.36686 8.93944 4.1423C8.94603 4.11421 8.95215 4.00953 8.88995 3.95425C8.82776 3.89897 8.73597 3.91787 8.66973 3.93291C8.57584 3.95422 7.08033 4.94269 4.18321 6.89832C3.75872 7.18981 3.37422 7.33184 3.02973 7.32439C2.64996 7.31619 1.91942 7.10966 1.37634 6.93313C0.71023 6.7166 0.18082 6.60213 0.226919 6.2344C0.250931 6.04286 0.514693 5.84698 1.01821 5.64675Z",
p26824a80: "M14.9062 2.24981C14.6824 2.24981 14.4678 2.33873 14.3095 2.497L13.4419 3.36513L14.6351 4.55838L15.503 3.6905C15.6613 3.53223 15.7502 3.31758 15.7502 3.09375C15.7502 2.86992 15.6613 2.65527 15.503 2.497C15.3447 2.33873 15.1301 2.24981 14.9062 2.24981ZM13.8396 5.35387L12.6465 4.16072L6.34536 10.4611C6.34532 10.4612 6.34541 10.4611 6.34536 10.4611C6.01521 10.7915 5.77239 11.1991 5.63911 11.6468L5.33604 12.664L6.35313 12.3609C6.80081 12.2276 7.20835 11.9849 7.53875 11.6548C7.53879 11.6547 7.53871 11.6548 7.53875 11.6548L13.8396 5.35387ZM13.5139 1.70162C13.8831 1.33237 14.3841 1.12481 14.9062 1.12481C15.4284 1.12481 15.9293 1.33226 16.2985 1.7015C16.6677 2.07075 16.8752 2.57156 16.8752 3.09375C16.8752 3.61594 16.6677 4.11675 16.2985 4.486L8.33425 12.4502C7.87168 12.9125 7.30115 13.2525 6.67437 13.4391C6.67433 13.4391 6.67441 13.4391 6.67437 13.4391L4.66062 14.0391C4.46267 14.0981 4.24831 14.0438 4.10225 13.8977C3.9562 13.7517 3.90194 13.5373 3.96092 13.3394L4.56089 11.3257C4.5609 11.3257 4.56087 11.3258 4.56089 11.3257C4.74751 10.699 5.08734 10.1284 5.54964 9.66587L13.5139 1.70162ZM3.9375 5.0625C3.63913 5.0625 3.35298 5.18103 3.142 5.392C2.93103 5.60298 2.8125 5.88913 2.8125 6.1875V14.0625C2.8125 14.3609 2.93103 14.647 3.142 14.858C3.35298 15.069 3.63913 15.1875 3.9375 15.1875H11.8125C12.1109 15.1875 12.397 15.069 12.608 14.858C12.819 14.647 12.9375 14.3609 12.9375 14.0625V10.5C12.9375 10.1893 13.1893 9.9375 13.5 9.9375C13.8107 9.9375 14.0625 10.1893 14.0625 10.5V14.0625C14.0625 14.6592 13.8254 15.2315 13.4035 15.6535C12.9815 16.0754 12.4092 16.3125 11.8125 16.3125H3.9375C3.34076 16.3125 2.76847 16.0754 2.34651 15.6535C1.92455 15.2315 1.6875 14.6592 1.6875 14.0625V6.1875C1.6875 5.59076 1.92455 5.01847 2.34651 4.59651C2.76847 4.17455 3.34076 3.9375 3.9375 3.9375H7.5C7.81066 3.9375 8.0625 4.18934 8.0625 4.5C8.0625 4.81066 7.81066 5.0625 7.5 5.0625H3.9375Z",
p26e2b7f0: "M5.22 8.22C5.36063 8.07955 5.55125 8.00066 5.75 8.00066C5.94875 8.00066 6.13937 8.07955 6.28 8.22L10 11.94L13.72 8.22C13.7887 8.14631 13.8715 8.08721 13.9635 8.04622C14.0555 8.00523 14.1548 7.98319 14.2555 7.98141C14.3562 7.97963 14.4562 7.99816 14.5496 8.03588C14.643 8.0736 14.7278 8.12974 14.799 8.20096C14.8703 8.27218 14.9264 8.35701 14.9641 8.4504C15.0018 8.54379 15.0204 8.64382 15.0186 8.74452C15.0168 8.84522 14.9948 8.94454 14.9538 9.03654C14.9128 9.12854 14.8537 9.21134 14.78 9.28L10.53 13.53C10.3894 13.6705 10.1988 13.7493 10 13.7493C9.80125 13.7493 9.61063 13.6705 9.47 13.53L5.22 9.28C5.07955 9.13937 5.00066 8.94875 5.00066 8.75C5.00066 8.55125 5.07955 8.36063 5.22 8.22Z",
p28ffe520: "M4.3464 11.1336L5.356 8.6096C5.51692 8.20751 5.75778 7.84227 6.064 7.536L11.6 2.0016C11.9183 1.68334 12.3499 1.50454 12.8 1.50454C13.2501 1.50454 13.6817 1.68334 14 2.0016C14.3183 2.31986 14.4971 2.75151 14.4971 3.2016C14.4971 3.65169 14.3183 4.08334 14 4.4016L8.464 9.936C8.1576 10.2424 7.792 10.484 7.3896 10.6448L4.8664 11.6544C4.79371 11.6835 4.71408 11.6906 4.63738 11.6749C4.56067 11.6592 4.49028 11.6213 4.43491 11.5659C4.37955 11.5105 4.34165 11.4401 4.32591 11.3634C4.31018 11.2867 4.3173 11.2071 4.3464 11.1344V11.1336Z",
p2b4a67f0: "M2.8 4.6C2.8 4.048 3.248 3.6 3.8 3.6H8C8.15913 3.6 8.31174 3.53679 8.42426 3.42426C8.53679 3.31174 8.6 3.15913 8.6 3C8.6 2.84087 8.53679 2.68826 8.42426 2.57574C8.31174 2.46321 8.15913 2.4 8 2.4H3.8C3.21652 2.4 2.65695 2.63179 2.24437 3.04437C1.83179 3.45695 1.6 4.01652 1.6 4.6V12.2C1.6 12.7835 1.83179 13.3431 2.24437 13.7556C2.65695 14.1682 3.21652 14.4 3.8 14.4H11.4C11.9835 14.4 12.5431 14.1682 12.9556 13.7556C13.3682 13.3431 13.6 12.7835 13.6 12.2V8C13.6 7.84087 13.5368 7.68826 13.4243 7.57574C13.3117 7.46321 13.1591 7.4 13 7.4C12.8409 7.4 12.6883 7.46321 12.5757 7.57574C12.4632 7.68826 12.4 7.84087 12.4 8V12.2C12.4 12.752 11.952 13.2 11.4 13.2H3.8C3.248 13.2 2.8 12.752 2.8 12.2V4.6Z",
p33ab7980: "M0 12L0.848137 8.92015C0.323782 8.01616 0.0487106 6.9924 0.0515759 5.94582C0.0515759 2.66635 2.73352 0 6.02578 0C7.62464 0 9.12607 0.618821 10.2521 1.7424C11.3811 2.86597 12.0029 4.36027 12 5.94867C12 9.22814 9.31804 11.8945 6.02292 11.8945H6.02005C5.02005 11.8945 4.03725 11.6435 3.16332 11.1702L0 12ZM3.31518 10.0951L3.4957 10.2034C4.25788 10.654 5.1318 10.8907 6.02292 10.8935H6.02578C8.76217 10.8935 10.9914 8.67776 10.9914 5.95152C10.9914 4.63118 10.4756 3.39069 9.53867 2.45532C8.60171 1.51996 7.35243 1.00665 6.02578 1.00665C3.2894 1.0038 1.06017 3.21958 1.06017 5.94582C1.06017 6.87833 1.32092 7.78802 1.81948 8.5751L1.93696 8.76331L1.43553 10.5856L3.31518 10.0951Z",
p38e5e800: "M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z",
p3d7a2b00: "M12.5 3.125H7.5V16.875H12.5V3.125ZM13.75 16.875H16.5625C17.425 16.875 18.125 16.175 18.125 15.3125V4.6875C18.125 3.82417 17.425 3.125 16.5625 3.125H13.75V16.875ZM3.4375 3.125H6.25V16.875H3.4375C3.0231 16.875 2.62567 16.7104 2.33265 16.4174C2.03962 16.1243 1.875 15.7269 1.875 15.3125V4.6875C1.875 3.82417 2.575 3.125 3.4375 3.125Z",
p3e117700: "M7 0.8C6.41652 0.8 5.85694 1.03179 5.44436 1.44437C5.03178 1.85695 4.8 2.41652 4.8 3V3.3544C4.164 3.416 3.5328 3.4952 2.908 3.5928C2.829 3.60356 2.75293 3.62996 2.68425 3.67046C2.61557 3.71095 2.55565 3.76473 2.50799 3.82865C2.46033 3.89256 2.42588 3.96534 2.40667 4.04272C2.38746 4.1201 2.38386 4.20054 2.39609 4.27932C2.40831 4.35811 2.43612 4.43367 2.47789 4.50159C2.51965 4.56951 2.57453 4.62842 2.63932 4.67489C2.70411 4.72135 2.77752 4.75444 2.85524 4.77221C2.93297 4.78998 3.01345 4.79209 3.092 4.7784L3.2112 4.7608L3.884 13.1752C3.92805 13.7266 4.17816 14.2411 4.58453 14.6163C4.99089 14.9916 5.52369 15.1999 6.0768 15.2H9.9224C10.4755 15.2002 11.0084 14.992 11.4149 14.6169C11.8214 14.2418 12.0718 13.7273 12.116 13.176L12.7888 4.76L12.908 4.7784C13.0638 4.79962 13.2216 4.75886 13.3477 4.66489C13.4737 4.57092 13.5578 4.43125 13.5819 4.27591C13.606 4.12057 13.5682 3.96197 13.4766 3.83422C13.385 3.70648 13.2469 3.61979 13.092 3.5928C12.4638 3.49503 11.8328 3.41553 11.2 3.3544V3C11.2 2.41652 10.9682 1.85695 10.5556 1.44437C10.1431 1.03179 9.58348 0.8 9 0.8H7ZM8 3.2C8.672 3.2 9.3384 3.22 10 3.26V3C10 2.448 9.552 2 9 2H7C6.448 2 6 2.448 6 3V3.26C6.6616 3.22 7.328 3.2 8 3.2ZM6.864 6.176C6.85763 6.01687 6.78832 5.86679 6.67129 5.75877C6.55427 5.65074 6.39913 5.59363 6.24 5.6C6.08087 5.60636 5.93079 5.67568 5.82277 5.79271C5.71474 5.90973 5.65763 6.06487 5.664 6.224L5.904 12.224C5.90715 12.3028 5.92579 12.3802 5.95886 12.4518C5.99192 12.5234 6.03876 12.5877 6.09671 12.6412C6.15465 12.6947 6.22256 12.7363 6.29656 12.7635C6.37056 12.7908 6.44921 12.8032 6.528 12.8C6.60679 12.7968 6.68419 12.7782 6.75578 12.7451C6.82737 12.7121 6.89175 12.6652 6.94523 12.6073C6.99872 12.5493 7.04027 12.4814 7.06751 12.4074C7.09475 12.3334 7.10715 12.2548 7.104 12.176L6.864 6.176ZM10.336 6.224C10.3392 6.14521 10.3268 6.06656 10.2995 5.99256C10.2723 5.91856 10.2307 5.85065 10.1772 5.79271C10.1237 5.73476 10.0594 5.68792 9.98778 5.65486C9.91619 5.62179 9.83879 5.60315 9.76 5.6C9.60087 5.59363 9.44573 5.65074 9.32871 5.75877C9.21168 5.86679 9.14237 6.01687 9.136 6.176L8.896 12.176C8.89285 12.2548 8.90525 12.3334 8.93249 12.4074C8.95973 12.4814 9.00128 12.5493 9.05477 12.6073C9.10825 12.6652 9.17263 12.7121 9.24422 12.7451C9.31581 12.7782 9.39321 12.7968 9.472 12.8C9.55079 12.8032 9.62944 12.7908 9.70344 12.7635C9.77744 12.7363 9.84535 12.6947 9.90329 12.6412C9.96124 12.5877 10.0081 12.5234 10.0411 12.4518C10.0742 12.3802 10.0928 12.3028 10.096 12.224L10.336 6.224Z",
p3ebf6d00: "M9 2.8125C9.31066 2.8125 9.5625 3.06434 9.5625 3.375V8.4375H14.625C14.9357 8.4375 15.1875 8.68934 15.1875 9C15.1875 9.31066 14.9357 9.5625 14.625 9.5625H9.5625V14.625C9.5625 14.9357 9.31066 15.1875 9 15.1875C8.68934 15.1875 8.4375 14.9357 8.4375 14.625V9.5625H3.375C3.06434 9.5625 2.8125 9.31066 2.8125 9C2.8125 8.68934 3.06434 8.4375 3.375 8.4375H8.4375V3.375C8.4375 3.06434 8.68934 2.8125 9 2.8125Z",
p865e080: "M9 3.5C7.54131 3.5 6.14236 4.07946 5.11091 5.11091C4.07946 6.14236 3.5 7.54131 3.5 9C3.5 10.4587 4.07946 11.8576 5.11091 12.8891C6.14236 13.9205 7.54131 14.5 9 14.5C10.4587 14.5 11.8576 13.9205 12.8891 12.8891C13.9205 11.8576 14.5 10.4587 14.5 9C14.5 7.54131 13.9205 6.14236 12.8891 5.11091C11.8576 4.07946 10.4587 3.5 9 3.5ZM2 9C2.00009 7.88067 2.26861 6.77768 2.78303 5.78356C3.29745 4.78944 4.04276 3.93318 4.95645 3.2866C5.87015 2.64002 6.92557 2.22197 8.0342 2.06754C9.14282 1.9131 10.2723 2.02677 11.3279 2.39902C12.3836 2.77127 13.3345 3.39124 14.101 4.20692C14.8676 5.0226 15.4273 6.0102 15.7333 7.08689C16.0393 8.16358 16.0827 9.29795 15.8597 10.3949C15.6368 11.4918 15.154 12.5192 14.452 13.391L17.78 16.72C17.8537 16.7887 17.9128 16.8715 17.9538 16.9635C17.9948 17.0555 18.0168 17.1548 18.0186 17.2555C18.0204 17.3562 18.0018 17.4562 17.9641 17.5496C17.9264 17.643 17.8703 17.7278 17.799 17.799C17.7278 17.8703 17.643 17.9264 17.5496 17.9641C17.4562 18.0018 17.3562 18.0204 17.2555 18.0186C17.1548 18.0168 17.0555 17.9948 16.9635 17.9538C16.8715 17.9128 16.7887 17.8537 16.72 17.78L13.391 14.452C12.3625 15.2804 11.1207 15.8009 9.80901 15.9536C8.49727 16.1062 7.16912 15.8846 5.97795 15.3145C4.78677 14.7444 3.78117 13.849 3.07727 12.7316C2.37338 11.6143 1.99991 10.3206 2 9Z",
peb08d00: "M4.53276 3.45918C4.42101 3.21108 4.30353 3.20538 4.19751 3.20253C4.11155 3.19968 4.01127 3.19968 3.91098 3.19968C3.81069 3.19968 3.65024 3.23675 3.5127 3.38504C3.37516 3.53333 2.99121 3.89264 2.99121 4.62553C2.99121 5.35557 3.52703 6.0628 3.60153 6.16261C3.67602 6.26242 4.63591 7.81089 6.15167 8.4069C7.41241 8.9031 7.67029 8.80329 7.9425 8.77762C8.2147 8.75196 8.82502 8.41831 8.95109 8.0704C9.0743 7.72249 9.0743 7.42591 9.03705 7.36318C8.9998 7.30044 8.89952 7.26337 8.75052 7.18922C8.60152 7.11508 7.868 6.75576 7.73046 6.70443C7.59293 6.65595 7.49264 6.63029 7.39522 6.77857C7.29493 6.92686 7.0084 7.26051 6.92244 7.36032C6.83648 7.46013 6.74765 7.47154 6.59866 7.3974C6.44966 7.32325 5.96829 7.16641 5.39809 6.6588C4.95396 6.26527 4.6531 5.77762 4.56714 5.62933C4.48118 5.48105 4.55854 5.4012 4.63304 5.32705C4.69895 5.26146 4.78204 5.1531 4.85654 5.06755C4.93104 4.982 4.95683 4.91926 5.00554 4.81945C5.05425 4.71964 5.03132 4.63409 4.99407 4.55994C4.95683 4.48865 4.66456 3.75291 4.53276 3.45918Z",
} as const;

export default function InventoryEditPage() {
  const { providerId, inventoryId } = useParams();
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    itemId: '925',
    inventoryCategory: ['6 m³'],
    volume: '',
    loadCapacity: '',
    pricePerMinute: '',
    isActive: true,
    isOnDuty: false
  });

  const [newCategory, setNewCategory] = useState('');

  const removeCategory = (index: number) => {
    setFormData({
      ...formData,
      inventoryCategory: formData.inventoryCategory.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь будет отправка данных на сервер
    console.log('Saving inventory data:', formData);
    navigate(`/companies/${providerId}`);
  };

  const handleCancel = () => {
    navigate(`/companies/${providerId}`);
  };

  return (
    <div className="bg-[#fafafa] min-h-screen w-full">
      {/* Main Container */}
      <div className="content-stretch flex flex-col items-center pb-[32px] sm:pb-[48px] px-4 sm:px-6 md:px-8 lg:px-[32px] w-full">
        <div className="content-stretch flex flex-col gap-[24px] sm:gap-[32px] items-start max-w-[1220px] w-full">
          {/* Breadcrumbs and Header */}
          <div className="content-stretch flex flex-col gap-[12px] sm:gap-[14px] items-start pt-4 sm:pt-6 md:pt-[32px] w-full">
            {/* Breadcrumbs */}
            <div className="content-stretch flex items-start w-full overflow-x-auto scrollbar-hide">
              <button
                onClick={() => navigate('/companies')}
                className="flex gap-[10px] sm:gap-[14px] items-center justify-center pr-[10px] sm:pr-[14px] rounded-[8px] shrink-0"
              >
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[13px] sm:text-[14px] hover:text-[#171717] whitespace-nowrap">
                  Companies
                </p>
              </button>
              <div className="flex gap-[10px] sm:gap-[14px] items-center justify-center pr-[10px] sm:pr-[14px] rounded-[8px] shrink-0">
                <svg className="size-[16px] sm:size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
                </svg>
                <button
                  onClick={() => navigate(`/companies/${providerId}`)}
                  className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[13px] sm:text-[14px] hover:text-[#171717] whitespace-nowrap"
                >
                  SIA "NIKA MI"
                </button>
              </div>
              <div className="flex gap-[10px] sm:gap-[14px] items-center justify-center pr-[10px] sm:pr-[14px] rounded-[8px] shrink-0">
                <svg className="size-[16px] sm:size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
                </svg>
                <button
                  onClick={() => {
                    navigate(`/companies/${providerId}`);
                    // TODO: set active tab to 'inventory'
                  }}
                  className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[13px] sm:text-[14px] hover:text-[#171717] whitespace-nowrap"
                >
                  Inventory
                </button>
              </div>
              <div className="flex gap-[10px] sm:gap-[14px] items-center justify-center pr-[10px] sm:pr-[14px] rounded-[8px] shrink-0">
                <svg className="size-[16px] sm:size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
                </svg>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[13px] sm:text-[14px] whitespace-nowrap">
                  {formData.itemId}
                </p>
              </div>
            </div>

            {/* Title and Toggles */}
            <div className="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between w-full">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] text-[#171717] text-[20px] sm:text-[24px] md:text-[30px]">
                <p className="leading-[24px] sm:leading-[28px] md:leading-[32px]">{formData.itemId}</p>
              </div>
              
              {/* Toggles */}
              <div className="content-stretch flex flex-col xs:flex-row gap-[16px] sm:gap-[24px] items-start">
                {/* Active Toggle */}
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, isActive: !formData.isActive })}
                  className="flex gap-[12px] items-center"
                >
                  <div className={`h-[24px] overflow-clip relative rounded-[100px] w-[45px] ${formData.isActive ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'}`}>
                    <div className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${formData.isActive ? 'left-[23px]' : 'left-[2px]'}`} />
                  </div>
                  <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                    Active
                  </span>
                </button>

                {/* On Duty Toggle */}
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, isOnDuty: !formData.isOnDuty })}
                  className="flex gap-[12px] items-center"
                >
                  <div className={`h-[24px] overflow-clip relative rounded-[100px] w-[45px] ${formData.isOnDuty ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'}`}>
                    <div className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${formData.isOnDuty ? 'left-[23px]' : 'left-[2px]'}`} />
                  </div>
                  <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                    On Duty
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white w-full rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] overflow-hidden">
            <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[20px] sm:gap-[24px] items-start p-4 sm:p-5 md:p-[24px] w-full">
              {/* Row 1: Item ID, Inventory category */}
              <div className="content-stretch flex flex-col md:flex-row gap-[20px] sm:gap-[24px] items-start w-full">
                {/* Item ID */}
                <div className="content-stretch flex flex-col gap-[8px] items-start w-full md:w-[374px]">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Item ID
                  </label>
                  <input
                    type="text"
                    value={formData.itemId}
                    onChange={(e) => setFormData({ ...formData, itemId: e.target.value })}
                    className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                  />
                </div>

                {/* Inventory category */}
                <div className="content-stretch flex flex-1 flex-col gap-[8px] items-start min-w-0 w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Inventory category
                  </label>
                  <div className="bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] w-full">
                      <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative w-full min-h-[38px]">
                        <div className="content-stretch flex flex-1 flex-col gap-[10px] items-start min-w-0 pt-[6px]">
                          {formData.inventoryCategory.length > 0 && (
                            <div className="content-start flex flex-wrap gap-[6px_8px] items-start w-full">
                              {formData.inventoryCategory.map((category, index) => (
                                <div key={index} className="bg-[#fffbf3] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] rounded-[6px] border border-[#fdecce]">
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#d97706] text-[14px] text-center">
                                    {category}
                                  </p>
                                  <button
                                    type="button"
                                    onClick={() => removeCategory(index)}
                                    className="shrink-0 size-[13px]"
                                  >
                                    <svg className="size-full" fill="none" viewBox="0 0 13 13">
                                      <path clipRule="evenodd" d={svgPaths.p2da5df80} fill="#D97706" fillRule="evenodd" />
                                    </svg>
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#a3a3a3] text-[14px] w-full">
                            Select option
                          </p>
                        </div>
                        <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: Volume, Load capacity, Price per minute */}
              <div className="content-stretch flex flex-col lg:flex-row gap-[20px] sm:gap-[24px] items-start w-full">
                {/* Volume */}
                <div className="content-stretch flex flex-1 flex-col gap-[8px] items-start min-w-0 w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Volume
                  </label>
                  <div className="relative w-full">
                    <select
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] appearance-none focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                    >
                      <option value=""></option>
                      <option value="6m3">6 m³</option>
                      <option value="8m3">8 m³</option>
                      <option value="10m3">10 m³</option>
                    </select>
                    <svg className="absolute right-[14px] top-1/2 -translate-y-1/2 size-[20px] pointer-events-none" fill="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Load capacity */}
                <div className="content-stretch flex flex-1 flex-col gap-[8px] items-start min-w-0 w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Load capacity
                  </label>
                  <input
                    type="text"
                    value={formData.loadCapacity}
                    onChange={(e) => setFormData({ ...formData, loadCapacity: e.target.value })}
                    className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                  />
                </div>

                {/* Price per minute */}
                <div className="content-stretch flex flex-1 flex-col gap-[8px] items-start min-w-0 w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Price per minute
                  </label>
                  <div className="relative w-full">
                    <svg className="absolute left-[14px] top-1/2 -translate-y-1/2 size-[20px]" fill="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p272bda70} stroke="#0F172A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                    <input
                      type="text"
                      value={formData.pricePerMinute}
                      onChange={(e) => setFormData({ ...formData, pricePerMinute: e.target.value })}
                      className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] pl-[44px] pr-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Action Buttons */}
          <div className="content-stretch flex items-start w-full">
            <div className="content-stretch flex flex-col xs:flex-row gap-[12px] items-center w-full xs:w-auto">
              <button
                onClick={handleSubmit}
                className="bg-[#05376d] flex items-center justify-center px-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#04305c] transition-colors w-full xs:w-auto"
              >
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[14px] text-white">
                  Save changes
                </span>
              </button>
              <button
                onClick={handleCancel}
                type="button"
                className="bg-white flex items-center justify-center px-[16px] py-[8px] rounded-[8px] border border-[#e5e5e5] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#fafafa] transition-colors w-full xs:w-auto"
              >
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#262626] text-[14px]">
                  Cancel
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
