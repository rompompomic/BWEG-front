
import imgImage2 from "figma:asset/4083b5444961bcb8aa5871f500ad6e6ed65bdcb5.png";
import imgFrame1681 from "figma:asset/2cbdc52762995857b9279da560765e40ca3ef3d1.png";

const svgPaths = {
p1941cb70: "M4.53276 3.45872C4.42101 3.21063 4.30353 3.20492 4.19751 3.20207C4.11155 3.19922 4.01127 3.19922 3.91098 3.19922C3.81069 3.19922 3.65024 3.23629 3.5127 3.38458C3.37516 3.53287 2.99121 3.89218 2.99121 4.62507C2.99121 5.35511 3.52703 6.06234 3.60153 6.16215C3.67602 6.26196 4.63591 7.81044 6.15167 8.40644C7.41241 8.90264 7.67029 8.80283 7.9425 8.77717C8.2147 8.7515 8.82502 8.41785 8.95109 8.06994C9.0743 7.72203 9.0743 7.42546 9.03705 7.36272C8.9998 7.29998 8.89952 7.26291 8.75052 7.18876C8.60152 7.11462 7.868 6.7553 7.73046 6.70397C7.59293 6.65549 7.49264 6.62983 7.39522 6.77812C7.29493 6.92641 7.0084 7.26006 6.92244 7.35987C6.83648 7.45968 6.74765 7.47108 6.59866 7.39694C6.44966 7.32279 5.96829 7.16595 5.39809 6.65834C4.95396 6.26481 4.6531 5.77717 4.56714 5.62888C4.48118 5.48059 4.55854 5.40074 4.63304 5.3266C4.69895 5.26101 4.78204 5.15264 4.85654 5.06709C4.93104 4.98154 4.95683 4.9188 5.00554 4.81899C5.05425 4.71918 5.03132 4.63363 4.99407 4.55949C4.95683 4.48819 4.66456 3.75245 4.53276 3.45872Z",
p1a72f800: "M12 3.75C9.81196 3.75 7.71354 4.61919 6.16637 6.16637C4.61919 7.71354 3.75 9.81196 3.75 12C3.75 13.0834 3.96339 14.1562 4.37799 15.1571C4.79259 16.1581 5.40029 17.0675 6.16637 17.8336C6.93245 18.5997 7.84193 19.2074 8.84286 19.622C9.8438 20.0366 10.9166 20.25 12 20.25C13.0834 20.25 14.1562 20.0366 15.1571 19.622C16.1581 19.2074 17.0675 18.5997 17.8336 17.8336C18.5997 17.0675 19.2074 16.1581 19.622 15.1571C20.0366 14.1562 20.25 13.0834 20.25 12C20.25 9.81196 19.3808 7.71354 17.8336 6.16637C16.2865 4.61919 14.188 3.75 12 3.75ZM5.10571 5.10571C6.93419 3.27723 9.41414 2.25 12 2.25C14.5859 2.25 17.0658 3.27723 18.8943 5.10571C20.7228 6.93419 21.75 9.41414 21.75 12C21.75 13.2804 21.4978 14.5482 21.0078 15.7312C20.5178 16.9141 19.7997 17.9889 18.8943 18.8943C17.9889 19.7997 16.9141 20.5178 15.7312 21.0078C14.5482 21.4978 13.2804 21.75 12 21.75C10.7196 21.75 9.45176 21.4978 8.26884 21.0078C7.08591 20.5178 6.01108 19.7997 5.10571 18.8943C4.20034 17.9889 3.48216 16.9141 2.99217 15.7312C2.50219 14.5482 2.25 13.2804 2.25 12C2.25 9.41414 3.27723 6.93419 5.10571 5.10571ZM15.4359 9.1397C15.773 9.38046 15.8511 9.84887 15.6103 10.1859L11.8603 15.4359C11.7322 15.6153 11.5316 15.7293 11.3119 15.7474C11.0921 15.7656 10.8756 15.6862 10.7197 15.5303L8.46967 13.2803C8.17678 12.9874 8.17678 12.5126 8.46967 12.2197C8.76256 11.9268 9.23744 11.9268 9.53033 12.2197L11.1543 13.8436L14.3897 9.31407C14.6305 8.97701 15.0989 8.89894 15.4359 9.1397Z",
p1e899480: "M0.209473 11.7918L1.02896 8.81751C0.521793 7.94774 0.255318 6.95819 0.255318 5.94869C0.258183 2.78329 2.84557 0.208191 6.02609 0.208191C7.5705 0.208191 9.01749 0.80705 10.1063 1.8907C11.1951 2.97435 11.794 4.41732 11.794 5.95154C11.794 9.11694 9.20373 11.692 6.02609 11.692H6.02322C5.05761 11.692 4.10918 11.4496 3.26678 10.9934L0.209473 11.7918Z",
p22ba5200: "M1.01821 5.64642C4.11895 4.29547 6.1866 3.40485 7.22115 2.97454C10.175 1.74594 10.7888 1.53251 11.1888 1.52547C11.2768 1.52392 11.4736 1.54572 11.601 1.64913C11.7086 1.73644 11.7382 1.85439 11.7524 1.93718C11.7666 2.01996 11.7842 2.20854 11.7702 2.3559C11.6101 4.03777 10.9175 8.11923 10.5651 10.003C10.416 10.8 10.1224 11.0673 9.83821 11.0934C9.22053 11.1503 8.7515 10.6852 8.15325 10.2931C7.2171 9.67942 6.68824 9.29742 5.77954 8.6986C4.72939 8.00657 5.41016 7.62622 6.00864 7.00461C6.16526 6.84194 8.88677 4.36652 8.93944 4.14196C8.94603 4.11388 8.95215 4.00919 8.88995 3.95391C8.82776 3.89863 8.73597 3.91754 8.66973 3.93257C8.57584 3.95388 7.08033 4.94235 4.18321 6.89799C3.75872 7.18948 3.37422 7.3315 3.02973 7.32406C2.64996 7.31585 1.91942 7.10933 1.37634 6.93279C0.71023 6.71627 0.18082 6.60179 0.226919 6.23406C0.250931 6.04253 0.514693 5.84665 1.01821 5.64642Z",
p26824a80: "M14.9062 2.24981C14.6824 2.24981 14.4678 2.33873 14.3095 2.497L13.4419 3.36513L14.6351 4.55838L15.503 3.6905C15.6613 3.53223 15.7502 3.31758 15.7502 3.09375C15.7502 2.86992 15.6613 2.65527 15.503 2.497C15.3447 2.33873 15.1301 2.24981 14.9062 2.24981ZM13.8396 5.35387L12.6465 4.16072L6.34536 10.4611C6.34532 10.4612 6.34541 10.4611 6.34536 10.4611C6.01521 10.7915 5.77239 11.1991 5.63911 11.6468L5.33604 12.664L6.35313 12.3609C6.80081 12.2276 7.20835 11.9849 7.53875 11.6548C7.53879 11.6547 7.53871 11.6548 7.53875 11.6548L13.8396 5.35387ZM13.5139 1.70162C13.8831 1.33237 14.3841 1.12481 14.9062 1.12481C15.4284 1.12481 15.9293 1.33226 16.2985 1.7015C16.6677 2.07075 16.8752 2.57156 16.8752 3.09375C16.8752 3.61594 16.6677 4.11675 16.2985 4.486L8.33425 12.4502C7.87168 12.9125 7.30115 13.2525 6.67437 13.4391C6.67433 13.4391 6.67441 13.4391 6.67437 13.4391L4.66062 14.0391C4.46267 14.0981 4.24831 14.0438 4.10225 13.8977C3.9562 13.7517 3.90194 13.5373 3.96092 13.3394L4.56089 11.3257C4.5609 11.3257 4.56087 11.3258 4.56089 11.3257C4.74751 10.699 5.08734 10.1284 5.54964 9.66587L13.5139 1.70162ZM3.9375 5.0625C3.63913 5.0625 3.35298 5.18103 3.142 5.392C2.93103 5.60298 2.8125 5.88913 2.8125 6.1875V14.0625C2.8125 14.3609 2.93103 14.647 3.142 14.858C3.35298 15.069 3.63913 15.1875 3.9375 15.1875H11.8125C12.1109 15.1875 12.397 15.069 12.608 14.858C12.819 14.647 12.9375 14.3609 12.9375 14.0625V10.5C12.9375 10.1893 13.1893 9.9375 13.5 9.9375C13.8107 9.9375 14.0625 10.1893 14.0625 10.5V14.0625C14.0625 14.6592 13.8254 15.2315 13.4035 15.6535C12.9815 16.0754 12.4092 16.3125 11.8125 16.3125H3.9375C3.34076 16.3125 2.76847 16.0754 2.34651 15.6535C1.92455 15.2315 1.6875 14.6592 1.6875 14.0625V6.1875C1.6875 5.59076 1.92455 5.01847 2.34651 4.59651C2.76847 4.17455 3.34076 3.9375 3.9375 3.9375H7.5C7.81066 3.9375 8.0625 4.18934 8.0625 4.5C8.0625 4.81066 7.81066 5.0625 7.5 5.0625H3.9375Z",
p28ffe520: "M4.3464 11.1336L5.356 8.6096C5.51692 8.20751 5.75778 7.84227 6.064 7.536L11.6 2.0016C11.9183 1.68334 12.3499 1.50454 12.8 1.50454C13.2501 1.50454 13.6817 1.68334 14 2.0016C14.3183 2.31986 14.4971 2.75151 14.4971 3.2016C14.4971 3.65169 14.3183 4.08334 14 4.4016L8.464 9.936C8.1576 10.2424 7.792 10.484 7.3896 10.6448L4.8664 11.6544C4.79371 11.6835 4.71408 11.6906 4.63738 11.6749C4.56067 11.6592 4.49028 11.6213 4.43491 11.5659C4.37955 11.5105 4.34165 11.4401 4.32591 11.3634C4.31018 11.2867 4.3173 11.2071 4.3464 11.1344V11.1336Z",
p2b4a67f0: "M2.8 4.6C2.8 4.048 3.248 3.6 3.8 3.6H8C8.15913 3.6 8.31174 3.53679 8.42426 3.42426C8.53679 3.31174 8.6 3.15913 8.6 3C8.6 2.84087 8.53679 2.68826 8.42426 2.57574C8.31174 2.46321 8.15913 2.4 8 2.4H3.8C3.21652 2.4 2.65695 2.63179 2.24437 3.04437C1.83179 3.45695 1.6 4.01652 1.6 4.6V12.2C1.6 12.7835 1.83179 13.3431 2.24437 13.7556C2.65695 14.1682 3.21652 14.4 3.8 14.4H11.4C11.9835 14.4 12.5431 14.1682 12.9556 13.7556C13.3682 13.3431 13.6 12.7835 13.6 12.2V8C13.6 7.84087 13.5368 7.68826 13.4243 7.57574C13.3117 7.46321 13.1591 7.4 13 7.4C12.8409 7.4 12.6883 7.46321 12.5757 7.57574C12.4632 7.68826 12.4 7.84087 12.4 8V12.2C12.4 12.752 11.952 13.2 11.4 13.2H3.8C3.248 13.2 2.8 12.752 2.8 12.2V4.6Z",
p33ab7980: "M0 12L0.848137 8.92015C0.323782 8.01616 0.0487106 6.9924 0.0515759 5.94582C0.0515759 2.66635 2.73352 0 6.02578 0C7.62464 0 9.12607 0.618821 10.2521 1.7424C11.3811 2.86597 12.0029 4.36027 12 5.94867C12 9.22814 9.31804 11.8945 6.02292 11.8945H6.02005C5.02005 11.8945 4.03725 11.6435 3.16332 11.1702L0 12ZM3.31518 10.0951L3.4957 10.2034C4.25788 10.654 5.1318 10.8907 6.02292 10.8935H6.02578C8.76217 10.8935 10.9914 8.67776 10.9914 5.95152C10.9914 4.63118 10.4756 3.39069 9.53867 2.45532C8.60171 1.51996 7.35243 1.00665 6.02578 1.00665C3.2894 1.0038 1.06017 3.21958 1.06017 5.94582C1.06017 6.87833 1.32092 7.78802 1.81948 8.5751L1.93696 8.76331L1.43553 10.5856L3.31518 10.0951Z",
p38e5e800: "M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z",
p3e117700: "M7 0.8C6.41652 0.8 5.85694 1.03179 5.44436 1.44437C5.03178 1.85695 4.8 2.41652 4.8 3V3.3544C4.164 3.416 3.5328 3.4952 2.908 3.5928C2.829 3.60356 2.75293 3.62996 2.68425 3.67046C2.61557 3.71095 2.55565 3.76473 2.50799 3.82865C2.46033 3.89256 2.42588 3.96534 2.40667 4.04272C2.38746 4.1201 2.38386 4.20054 2.39609 4.27932C2.40831 4.35811 2.43612 4.43367 2.47789 4.50159C2.51965 4.56951 2.57453 4.62842 2.63932 4.67489C2.70411 4.72135 2.77752 4.75444 2.85524 4.77221C2.93297 4.78998 3.01345 4.79209 3.092 4.7784L3.2112 4.7608L3.884 13.1752C3.92805 13.7266 4.17816 14.2411 4.58453 14.6163C4.99089 14.9916 5.52369 15.1999 6.0768 15.2H9.9224C10.4755 15.2002 11.0084 14.992 11.4149 14.6169C11.8214 14.2418 12.0718 13.7273 12.116 13.176L12.7888 4.76L12.908 4.7784C13.0638 4.79962 13.2216 4.75886 13.3477 4.66489C13.4737 4.57092 13.5578 4.43125 13.5819 4.27591C13.606 4.12057 13.5682 3.96197 13.4766 3.83422C13.385 3.70648 13.2469 3.61979 13.092 3.5928C12.4638 3.49503 11.8328 3.41553 11.2 3.3544V3C11.2 2.41652 10.9682 1.85695 10.5556 1.44437C10.1431 1.03179 9.58348 0.8 9 0.8H7ZM8 3.2C8.672 3.2 9.3384 3.22 10 3.26V3C10 2.448 9.552 2 9 2H7C6.448 2 6 2.448 6 3V3.26C6.6616 3.22 7.328 3.2 8 3.2ZM6.864 6.176C6.85763 6.01687 6.78832 5.86679 6.67129 5.75877C6.55427 5.65074 6.39913 5.59363 6.24 5.6C6.08087 5.60636 5.93079 5.67568 5.82277 5.79271C5.71474 5.90973 5.65763 6.06487 5.664 6.224L5.904 12.224C5.90715 12.3028 5.92579 12.3802 5.95886 12.4518C5.99192 12.5234 6.03876 12.5877 6.09671 12.6412C6.15465 12.6947 6.22256 12.7363 6.29656 12.7635C6.37056 12.7908 6.44921 12.8032 6.528 12.8C6.60679 12.7968 6.68419 12.7782 6.75578 12.7451C6.82737 12.7121 6.89175 12.6652 6.94523 12.6073C6.99872 12.5493 7.04027 12.4814 7.06751 12.4074C7.09475 12.3334 7.10715 12.2548 7.104 12.176L6.864 6.176ZM10.336 6.224C10.3392 6.14521 10.3268 6.06656 10.2995 5.99256C10.2723 5.91856 10.2307 5.85065 10.1772 5.79271C10.1237 5.73476 10.0594 5.68792 9.98778 5.65486C9.91619 5.62179 9.83879 5.60315 9.76 5.6C9.60087 5.59363 9.44573 5.65074 9.32871 5.75877C9.21168 5.86679 9.14237 6.01687 9.136 6.176L8.896 12.176C8.89285 12.2548 8.90525 12.3334 8.93249 12.4074C8.95973 12.4814 9.00128 12.5493 9.05477 12.6073C9.10825 12.6652 9.17263 12.7121 9.24422 12.7451C9.31581 12.7782 9.39321 12.7968 9.472 12.8C9.55079 12.8032 9.62944 12.7908 9.70344 12.7635C9.77744 12.7363 9.84535 12.6947 9.90329 12.6412C9.96124 12.5877 10.0081 12.5234 10.0411 12.4518C10.0742 12.3802 10.0928 12.3028 10.096 12.224L10.336 6.224Z",
p3ebf6d00: "M9 2.8125C9.31066 2.8125 9.5625 3.06434 9.5625 3.375V8.4375H14.625C14.9357 8.4375 15.1875 8.68934 15.1875 9C15.1875 9.31066 14.9357 9.5625 14.625 9.5625H9.5625V14.625C9.5625 14.9357 9.31066 15.1875 9 15.1875C8.68934 15.1875 8.4375 14.9357 8.4375 14.625V9.5625H3.375C3.06434 9.5625 2.8125 9.31066 2.8125 9C2.8125 8.68934 3.06434 8.4375 3.375 8.4375H8.4375V3.375C8.4375 3.06434 8.68934 2.8125 9 2.8125Z",
p865e080: "M9 3.5C7.54131 3.5 6.14236 4.07946 5.11091 5.11091C4.07946 6.14236 3.5 7.54131 3.5 9C3.5 10.4587 4.07946 11.8576 5.11091 12.8891C6.14236 13.9205 7.54131 14.5 9 14.5C10.4587 14.5 11.8576 13.9205 12.8891 12.8891C13.9205 11.8576 14.5 10.4587 14.5 9C14.5 7.54131 13.9205 6.14236 12.8891 5.11091C11.8576 4.07946 10.4587 3.5 9 3.5ZM2 9C2.00009 7.88067 2.26861 6.77768 2.78303 5.78356C3.29745 4.78944 4.04276 3.93318 4.95645 3.2866C5.87015 2.64002 6.92557 2.22197 8.0342 2.06754C9.14282 1.9131 10.2723 2.02677 11.3279 2.39902C12.3836 2.77127 13.3345 3.39124 14.101 4.20692C14.8676 5.0226 15.4273 6.0102 15.7333 7.08689C16.0393 8.16358 16.0827 9.29795 15.8597 10.3949C15.6368 11.4918 15.154 12.5192 14.452 13.391L17.78 16.72C17.8537 16.7887 17.9128 16.8715 17.9538 16.9635C17.9948 17.0555 18.0168 17.1548 18.0186 17.2555C18.0204 17.3562 18.0018 17.4562 17.9641 17.5496C17.9264 17.643 17.8703 17.7278 17.799 17.799C17.7278 17.8703 17.643 17.9264 17.5496 17.9641C17.4562 18.0018 17.3562 18.0204 17.2555 18.0186C17.1548 18.0168 17.0555 17.9948 16.9635 17.9538C16.8715 17.9128 16.7887 17.8537 16.72 17.78L13.391 14.452C12.3625 15.2804 11.1207 15.8009 9.80901 15.9536C8.49727 16.1062 7.16912 15.8846 5.97795 15.3145C4.78677 14.7444 3.78117 13.849 3.07727 12.7316C2.37338 11.6143 1.99991 10.3206 2 9Z",
} as const;

function Breadcrumbs1() {
  return (
    <div className="content-stretch flex gap-[14px] items-center justify-center pr-[14px] relative rounded-[8px] shrink-0" data-name="Breadcrumbs">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Companies</p>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-right">
          <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="var(--fill-0, #A3A3A3)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Breadcrumbs2() {
  return (
    <div className="content-stretch flex gap-[14px] items-center justify-center pr-[14px] relative rounded-[8px] shrink-0" data-name="Breadcrumbs">
      <ChevronRight />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">{`SIA "NIKA MI"`}</p>
    </div>
  );
}

function Breadcrumbs() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Breadcrumbs">
      <Breadcrumbs1 />
      <Breadcrumbs2 />
    </div>
  );
}

function Button() {
  return <div className="content-stretch flex gap-[14px] items-center shrink-0" data-name="Button" />;
}

function PencilSquare() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="pencil-square">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="pencil-square">
          <path clipRule="evenodd" d={svgPaths.p26824a80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#05376d] content-stretch flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <PencilSquare />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Edit</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Button">
      <Button2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#171717] text-[30px] whitespace-nowrap">
        <p className="leading-[32px]">{`SIA "NIKA MI"`}</p>
      </div>
      <Button />
      <Button1 />
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
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] whitespace-pre-wrap">Name</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <Label />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px] w-full whitespace-pre-wrap">{`SIA "NIKA MI"`}</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] whitespace-pre-wrap">Reg. number</p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <Label1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px] w-full whitespace-pre-wrap">40003278804</p>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] whitespace-pre-wrap">Country</p>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <Label2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px] w-full whitespace-pre-wrap">LV</p>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] whitespace-pre-wrap">Legal adress</p>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <Label3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px] w-full whitespace-pre-wrap">Kaudzīšu iela 76, Rumbula, Stopiņu novads, LV-2121, Latvija</p>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] whitespace-pre-wrap">Status</p>
    </div>
  );
}

function CheckCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check-circle">
          <path clipRule="evenodd" d={svgPaths.p1a72f800} fill="var(--fill-0, #22C55E)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <Label4 />
      <CheckCircle />
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <List />
        <List1 />
        <List2 />
        <List3 />
        <List4 />
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] whitespace-pre-wrap">Bank</p>
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <Label5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px] w-full whitespace-pre-wrap">AS Swedbank</p>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] whitespace-pre-wrap">Bank account</p>
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <Label6 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px] w-full whitespace-pre-wrap">LV61HABA0551051823400, AS Swedbank</p>
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] whitespace-pre-wrap">Contract num.</p>
    </div>
  );
}

function List7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <Label7 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px] w-full whitespace-pre-wrap">C0000001</p>
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] whitespace-pre-wrap">Contact details</p>
    </div>
  );
}

function List8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <Label8 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px] w-full whitespace-pre-wrap">{`email@email.lv, +37127080202 `}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <List5 />
        <List6 />
        <List7 />
        <List8 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[22px] items-start p-[24px] relative w-full">
          <Frame />
          <Frame1 />
          <div className="relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 size-[180px]" data-name="image 2">
            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[24px] py-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[18px] whitespace-pre-wrap">Сontact person</p>
        </div>
      </div>
    </div>
  );
}

function Line() {
  return <div className="bg-[#e5e5e5] h-px shrink-0 w-full" data-name="Line" />;
}

function Separator() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Separator">
      <Line />
    </div>
  );
}

function HeadingCardDefault() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Heading_card / Default">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container3 />
        <Separator />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[120px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgFrame1681} />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[2px] items-start leading-[20px] not-italic relative text-[#737373] text-[14px] text-ellipsis w-full">
        <p className="overflow-hidden relative shrink-0">{`+37127080202 `}</p>
        <p className="overflow-hidden relative shrink-0">,</p>
        <p className="overflow-hidden relative shrink-0">email@email.lv</p>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="relative shrink-0 w-full" data-name="Cell">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#171717] text-[14px] text-ellipsis w-full whitespace-nowrap">Krists Lācis</p>
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function WhatsApp() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[12px] top-1/2" data-name="WhatsApp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Group">
          <path d={svgPaths.p33ab7980} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1e899480} fill="var(--fill-0, #05376D)" id="Vector_2" />
          <path d={svgPaths.p33ab7980} fill="var(--fill-0, white)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p1941cb70} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#05376d] overflow-clip relative rounded-[15px] shrink-0 size-[24px]" data-name="Button">
      <WhatsApp />
    </div>
  );
}

function Telegram() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.75px)] size-[12px] top-1/2" data-name="Telegram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Telegram">
          <path clipRule="evenodd" d={svgPaths.p22ba5200} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#05376d] overflow-clip relative rounded-[15px] shrink-0 size-[24px]" data-name="Button">
      <Telegram />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Cell />
      <Frame9 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start justify-center relative w-full">
        <Frame8 />
        <Frame10 />
      </div>
    </div>
  );
}

function TableCard() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[14px] items-center min-w-[272px] overflow-clip p-[14px] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-[281px]" data-name="Table card">
      <Frame2 />
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative w-full">
        <TableCard />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-full" data-name="Card">
      <HeadingCardDefault />
      <Body />
    </div>
  );
}

function Tab1() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Orders</p>
    </div>
  );
}

function Tab2() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Vehicles</p>
    </div>
  );
}

function Tab3() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Inventory</p>
    </div>
  );
}

function Tab4() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Drivers</p>
    </div>
  );
}

function Tab5() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Service area</p>
    </div>
  );
}

function Tab6() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Working Hours</p>
    </div>
  );
}

function Tab7() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Destinations</p>
    </div>
  );
}

function Tab8() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Capacity</p>
    </div>
  );
}

function Tab9() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#d97706] text-[14px]">Inventory categories</p>
    </div>
  );
}

function Tab10() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Terms and conditions</p>
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-full" data-name="Tab">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
          <Tab1 />
          <Tab2 />
          <Tab3 />
          <Tab4 />
          <Tab5 />
          <Tab6 />
          <Tab7 />
          <Tab8 />
          <Tab9 />
          <Tab10 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1220px] relative shrink-0 w-full" data-name="Container">
      <HeadingPageHeading />
      <Card />
      <Card1 />
      <Tab />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="plus">
          <path clipRule="evenodd" d={svgPaths.p3ebf6d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#05376d] content-stretch flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <Plus />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">New category</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Button">
      <Button6 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Button5 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#171717] text-[24px] whitespace-nowrap">
        <p className="leading-[28px]">Inventory categories</p>
      </div>
      <Frame13 />
    </div>
  );
}

function ContinerLeft() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Continer Left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-start w-full" />
    </div>
  );
}

function MagnifyingGlass() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="magnifying-glass">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="magnifying-glass">
          <path clipRule="evenodd" d={svgPaths.p865e080} fill="var(--fill-0, #A3A3A3)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[7px] relative w-full">
          <MagnifyingGlass />
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px] whitespace-pre-wrap">Name</p>
        </div>
      </div>
    </div>
  );
}

function FieldSearch() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[210px]" data-name="field-search">
      <Input />
    </div>
  );
}

function ContainerRight() {
  return (
    <div className="relative shrink-0" data-name="Container Right">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-end relative">
        <FieldSearch />
      </div>
    </div>
  );
}

function SectionTableAction() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section table / Action">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[11px] pt-[10px] px-[24px] relative w-full">
          <ContinerLeft />
          <ContainerRight />
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Cell">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[6px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#171717] text-[14px] text-ellipsis w-full whitespace-nowrap">6 m³</p>
        </div>
      </div>
    </div>
  );
}

function InputTag() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[6px] shrink-0" data-name="Input tag">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] text-center">Max. amount in full cargo — 1</p>
    </div>
  );
}

function InputTag1() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[6px] shrink-0" data-name="Input tag">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] text-center">Min. rent days — 1</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <InputTag />
      <InputTag1 />
    </div>
  );
}

function PencilSquare1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="pencil-square">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="pencil-square">
          <g id="Vector">
            <path d={svgPaths.p28ffe520} fill="var(--fill-0, #05376D)" />
            <path d={svgPaths.p2b4a67f0} fill="var(--fill-0, #05376D)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Cell">
      <PencilSquare1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#05376d] text-[14px]">Edit</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center pl-[6px] relative shrink-0">
      <Cell2 />
    </div>
  );
}

function Trash() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trash">
          <path clipRule="evenodd" d={svgPaths.p3e117700} fill="var(--fill-0, #DC2626)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Trash />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#dc2626] text-[14px]">Delete</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame14 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[253px]">
      <Cell1 />
      <Frame16 />
      <Frame15 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-full">
        <Frame11 />
      </div>
    </div>
  );
}

function TableCard1() {
  return (
    <div className="bg-white min-w-[272px] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-[281px]" data-name="Table card">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-center min-w-[inherit] overflow-clip p-[14px] relative rounded-[inherit] w-full">
        <Frame3 />
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Cell">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[6px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#171717] text-[14px] text-ellipsis w-full whitespace-nowrap">9 m³</p>
        </div>
      </div>
    </div>
  );
}

function InputTag2() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[6px] shrink-0" data-name="Input tag">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] text-center">Max. amount in full cargo — 1</p>
    </div>
  );
}

function InputTag3() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[6px] shrink-0" data-name="Input tag">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] text-center">Min. rent days — 1</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <InputTag2 />
      <InputTag3 />
    </div>
  );
}

function PencilSquare2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="pencil-square">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="pencil-square">
          <g id="Vector">
            <path d={svgPaths.p28ffe520} fill="var(--fill-0, #05376D)" />
            <path d={svgPaths.p2b4a67f0} fill="var(--fill-0, #05376D)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Cell4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Cell">
      <PencilSquare2 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#05376d] text-[14px]">Edit</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center pl-[6px] relative shrink-0">
      <Cell4 />
    </div>
  );
}

function Trash1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trash">
          <path clipRule="evenodd" d={svgPaths.p3e117700} fill="var(--fill-0, #DC2626)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Trash1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#dc2626] text-[14px]">Delete</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame19 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[253px]">
      <Cell3 />
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-full">
        <Frame12 />
      </div>
    </div>
  );
}

function TableCard2() {
  return (
    <div className="bg-white min-w-[272px] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-[281px]" data-name="Table card">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-center min-w-[inherit] overflow-clip p-[14px] relative rounded-[inherit] w-full">
        <Frame5 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap gap-[16px] items-start pb-[25px] pt-[24px] px-[24px] relative w-full">
        <TableCard1 />
        <TableCard2 />
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-full" data-name="Table">
      <SectionTableAction />
      <Container6 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1220px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Table />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center pb-[48px] px-[32px] relative size-full" data-name="Container">
      <Container1 />
      <Container4 />
    </div>
  );
}