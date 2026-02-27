import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const svgPaths = {
p113e6700: "M0.5312 8.472C0.413684 8.16665 0.413684 7.82855 0.5312 7.5232C1.11298 6.01479 2.13796 4.71795 3.47117 3.80345C4.80437 2.88894 6.38329 2.39965 8 2.4C11.4056 2.4 14.3144 4.528 15.4688 7.528C15.5864 7.8328 15.5856 8.1712 15.4688 8.4768C14.887 9.98521 13.862 11.282 12.5288 12.1966C11.1956 13.1111 9.61671 13.6004 8 13.6C4.5944 13.6 1.6856 11.472 0.5312 8.472ZM11.2 8C11.2 8.84869 10.8629 9.66263 10.2627 10.2627C9.66263 10.8629 8.84869 11.2 8 11.2C7.15131 11.2 6.33737 10.8629 5.73726 10.2627C5.13714 9.66263 4.8 8.84869 4.8 8C4.8 7.15131 5.13714 6.33737 5.73726 5.73726C6.33737 5.13714 7.15131 4.8 8 4.8C8.84869 4.8 9.66263 5.13714 10.2627 5.73726C10.8629 6.33737 11.2 7.15131 11.2 8Z",
p11da3d80: "M1.34158 13.7931C1.18896 13.7044 1.07119 13.5646 1.01922 13.3959C0.941721 13.1443 0.9 12.877 0.9 12.6C0.9 11.1088 2.10883 9.9 3.6 9.9C4.0698 9.9 4.51158 10.02 4.89636 10.231C3.95396 11.159 3.32472 12.4043 3.18131 13.794C3.16062 13.9945 3.16926 14.1923 3.20397 14.3828C2.52955 14.324 1.89775 14.1164 1.34158 13.7931Z",
p12c80b80: "M4.77345 14.5718C4.59426 14.4096 4.4993 14.1731 4.52411 13.9326C4.75791 11.667 6.67267 9.9 9.00013 9.9C11.3276 9.9 13.2424 11.667 13.4762 13.9326C13.501 14.1731 13.406 14.4096 13.2268 14.5718C12.1091 15.5837 10.6266 16.2 9.00014 16.2C7.37368 16.2 5.89118 15.5837 4.77345 14.5718Z",
p1a72f800: "M12 3.75C9.81196 3.75 7.71354 4.61919 6.16637 6.16637C4.61919 7.71354 3.75 9.81196 3.75 12C3.75 13.0834 3.96339 14.1562 4.37799 15.1571C4.79259 16.1581 5.40029 17.0675 6.16637 17.8336C6.93245 18.5997 7.84193 19.2074 8.84286 19.622C9.8438 20.0366 10.9166 20.25 12 20.25C13.0834 20.25 14.1562 20.0366 15.1571 19.622C16.1581 19.2074 17.0675 18.5997 17.8336 17.8336C18.5997 17.0675 19.2074 16.1581 19.622 15.1571C20.0366 14.1562 20.25 13.0834 20.25 12C20.25 9.81196 19.3808 7.71354 17.8336 6.16637C16.2865 4.61919 14.188 3.75 12 3.75ZM5.10571 5.10571C6.93419 3.27723 9.41414 2.25 12 2.25C14.5859 2.25 17.0658 3.27723 18.8943 5.10571C20.7228 6.93419 21.75 9.41414 21.75 12C21.75 13.2804 21.4978 14.5482 21.0078 15.7312C20.5178 16.9141 19.7997 17.9889 18.8943 18.8943C17.9889 19.7997 16.9141 20.5178 15.7312 21.0078C14.5482 21.4978 13.2804 21.75 12 21.75C10.7196 21.75 9.45176 21.4978 8.26884 21.0078C7.08591 20.5178 6.01108 19.7997 5.10571 18.8943C4.20034 17.9889 3.48216 16.9141 2.99217 15.7312C2.50219 14.5482 2.25 13.2804 2.25 12C2.25 9.41414 3.27723 6.93419 5.10571 5.10571ZM15.4359 9.1397C15.773 9.38046 15.8511 9.84887 15.6103 10.1859L11.8603 15.4359C11.7322 15.6153 11.5316 15.7293 11.3119 15.7474C11.0921 15.7656 10.8756 15.6862 10.7197 15.5303L8.46967 13.2803C8.17678 12.9874 8.17678 12.5126 8.46967 12.2197C8.76256 11.9268 9.23744 11.9268 9.53033 12.2197L11.1543 13.8436L14.3897 9.31407C14.6305 8.97701 15.0989 8.89894 15.4359 9.1397Z",
p1f0c0b00: "M8.61321 1.62728C8.83015 1.42184 9.16985 1.42184 9.38679 1.62728C10.8994 3.05976 12.9403 3.93751 15.1875 3.93751C15.2233 3.93751 15.259 3.93729 15.2946 3.93685C15.5401 3.9338 15.7592 4.09036 15.8359 4.32362C16.1453 5.26469 16.3125 6.26966 16.3125 7.31255C16.3125 11.7691 13.2645 15.5122 9.14021 16.5738C9.04824 16.5974 8.95177 16.5974 8.85979 16.5738C4.73554 15.5122 1.6875 11.7691 1.6875 7.31255C1.6875 6.26966 1.85465 5.26469 2.16406 4.32362C2.24075 4.09036 2.45988 3.9338 2.70541 3.93685C2.74105 3.93729 2.77675 3.93751 2.8125 3.93751C5.05968 3.93751 7.10064 3.05976 8.61321 1.62728ZM9 6.1875C9.31066 6.1875 9.5625 6.43934 9.5625 6.75V9.5625C9.5625 9.87316 9.31066 10.125 9 10.125C8.68934 10.125 8.4375 9.87316 8.4375 9.5625V6.75C8.4375 6.43934 8.68934 6.1875 9 6.1875ZM9 11.25C8.68934 11.25 8.4375 11.5018 8.4375 11.8125V11.8181C8.4375 12.1288 8.68934 12.3806 9 12.3806H9.00563C9.31629 12.3806 9.56813 12.1288 9.56813 11.8181V11.8125C9.56813 11.5018 9.31629 11.25 9.00563 11.25H9Z",
p24ad8380: "M5.0625 1.6875C5.21168 1.6875 5.35476 1.74676 5.46025 1.85225C5.56574 1.95774 5.625 2.10082 5.625 2.25V3.375H12.375V2.25C12.375 2.10082 12.4343 1.95774 12.5398 1.85225C12.6452 1.74676 12.7883 1.6875 12.9375 1.6875C13.0867 1.6875 13.2298 1.74676 13.3352 1.85225C13.4407 1.95774 13.5 2.10082 13.5 2.25V3.375H14.0625C14.6592 3.375 15.2315 3.61205 15.6535 4.03401C16.0754 4.45597 16.3125 5.02826 16.3125 5.625V14.0625C16.3125 14.6592 16.0754 15.2315 15.6535 15.6535C15.2315 16.0754 14.6592 16.3125 14.0625 16.3125H3.9375C3.34076 16.3125 2.76847 16.0754 2.34651 15.6535C1.92455 15.2315 1.6875 14.6592 1.6875 14.0625V5.625C1.6875 5.02826 1.92455 4.45597 2.34651 4.03401C2.76847 3.61205 3.34076 3.375 3.9375 3.375H4.5V2.25C4.5 2.10082 4.55926 1.95774 4.66475 1.85225C4.77024 1.74676 4.91332 1.6875 5.0625 1.6875ZM15.1875 8.4375C15.1875 8.13913 15.069 7.85298 14.858 7.642C14.647 7.43103 14.3609 7.3125 14.0625 7.3125H3.9375C3.63913 7.3125 3.35298 7.43103 3.142 7.642C2.93103 7.85298 2.8125 8.13913 2.8125 8.4375V14.0625C2.8125 14.3609 2.93103 14.647 3.142 14.858C3.35298 15.069 3.63913 15.1875 3.9375 15.1875H14.0625C14.3609 15.1875 14.647 15.069 14.858 14.858C15.069 14.647 15.1875 14.3609 15.1875 14.0625V8.4375Z",
p2504cd00: "M4.21875 2.25C4.06342 2.25 3.9375 2.37592 3.9375 2.53125V15.4688C3.9375 15.6241 4.06342 15.75 4.21875 15.75H13.7812C13.9366 15.75 14.0625 15.6241 14.0625 15.4688V8.71875C14.0625 7.63144 13.1811 6.75 12.0938 6.75H10.9688C10.1921 6.75 9.5625 6.1204 9.5625 5.34375V4.21875C9.5625 3.13144 8.68106 2.25 7.59375 2.25H4.21875ZM4.21875 1.125C3.4421 1.125 2.8125 1.7546 2.8125 2.53125V15.4688C2.8125 16.2454 3.4421 16.875 4.21875 16.875H13.7812C14.5579 16.875 15.1875 16.2454 15.1875 15.4688V8.4375C15.1875 4.39892 11.9136 1.125 7.875 1.125H4.21875ZM10.3178 2.75089C10.5536 3.18764 10.6875 3.68756 10.6875 4.21875V5.34375C10.6875 5.49908 10.8134 5.625 10.9688 5.625H12.0938C12.6249 5.625 13.1249 5.75887 13.5616 5.99472C12.9366 4.54162 11.7709 3.37592 10.3178 2.75089ZM5.625 11.25C5.625 10.9393 5.87684 10.6875 6.1875 10.6875H11.8125C12.1232 10.6875 12.375 10.9393 12.375 11.25C12.375 11.5607 12.1232 11.8125 11.8125 11.8125H6.1875C5.87684 11.8125 5.625 11.5607 5.625 11.25ZM5.625 13.5C5.625 13.1893 5.87684 12.9375 6.1875 12.9375H9C9.31066 12.9375 9.5625 13.1893 9.5625 13.5C9.5625 13.8107 9.31066 14.0625 9 14.0625H6.1875C5.87684 14.0625 5.625 13.8107 5.625 13.5Z",
p26e2b7f0: "M5.22 8.22C5.36063 8.07955 5.55125 8.00066 5.75 8.00066C5.94875 8.00066 6.13937 8.07955 6.28 8.22L10 11.94L13.72 8.22C13.7887 8.14631 13.8715 8.08721 13.9635 8.04622C14.0555 8.00523 14.1548 7.98319 14.2555 7.98141C14.3562 7.97963 14.4562 7.99816 14.5496 8.03588C14.643 8.0736 14.7278 8.12974 14.799 8.20096C14.8703 8.27218 14.9264 8.35701 14.9641 8.4504C15.0018 8.54379 15.0204 8.64382 15.0186 8.74452C15.0168 8.84522 14.9948 8.94454 14.9538 9.03654C14.9128 9.12854 14.8537 9.21134 14.78 9.28L10.53 13.53C10.3894 13.6705 10.1988 13.7493 10 13.7493C9.80125 13.7493 9.61063 13.6705 9.47 13.53L5.22 9.28C5.07955 9.13937 5.00066 8.94875 5.00066 8.75C5.00066 8.55125 5.07955 8.36063 5.22 8.22Z",
p28ffe520: "M4.3464 11.1336L5.356 8.6096C5.51692 8.20751 5.75778 7.84227 6.064 7.536L11.6 2.0016C11.9183 1.68334 12.3499 1.50454 12.8 1.50454C13.2501 1.50454 13.6817 1.68334 14 2.0016C14.3183 2.31986 14.4971 2.75151 14.4971 3.2016C14.4971 3.65169 14.3183 4.08334 14 4.4016L8.464 9.936C8.1576 10.2424 7.792 10.484 7.3896 10.6448L4.8664 11.6544C4.79371 11.6835 4.71408 11.6906 4.63738 11.6749C4.56067 11.6592 4.49028 11.6213 4.43491 11.5659C4.37955 11.5105 4.34165 11.4401 4.32591 11.3634C4.31018 11.2867 4.3173 11.2071 4.3464 11.1344V11.1336Z",
p2b4a67f0: "M2.8 4.6C2.8 4.048 3.248 3.6 3.8 3.6H8C8.15913 3.6 8.31174 3.53679 8.42426 3.42426C8.53679 3.31174 8.6 3.15913 8.6 3C8.6 2.84087 8.53679 2.68826 8.42426 2.57574C8.31174 2.46321 8.15913 2.4 8 2.4H3.8C3.21652 2.4 2.65695 2.63179 2.24437 3.04437C1.83179 3.45695 1.6 4.01652 1.6 4.6V12.2C1.6 12.7835 1.83179 13.3431 2.24437 13.7556C2.65695 14.1682 3.21652 14.4 3.8 14.4H11.4C11.9835 14.4 12.5431 14.1682 12.9556 13.7556C13.3682 13.3431 13.6 12.7835 13.6 12.2V8C13.6 7.84087 13.5368 7.68826 13.4243 7.57574C13.3117 7.46321 13.1591 7.4 13 7.4C12.8409 7.4 12.6883 7.46321 12.5757 7.57574C12.4632 7.68826 12.4 7.84087 12.4 8V12.2C12.4 12.752 11.952 13.2 11.4 13.2H3.8C3.248 13.2 2.8 12.752 2.8 12.2V4.6Z",
p2cc98380: "M14.7964 14.3828C15.4707 14.3239 16.1024 14.1164 16.6584 13.7931C16.811 13.7044 16.9288 13.5646 16.9808 13.3959C17.0583 13.1443 17.1 12.877 17.1 12.6C17.1 11.1088 15.8912 9.9 14.4 9.9C13.9303 9.9 13.4886 10.0199 13.1039 10.2309C14.0464 11.1588 14.6757 12.4042 14.8191 13.794C14.8398 13.9945 14.8311 14.1922 14.7964 14.3828Z",
p32867e00: "M8 10C8.53043 10 9.03914 9.78929 9.41421 9.41421C9.78929 9.03914 10 8.53043 10 8C10 7.46957 9.78929 6.96086 9.41421 6.58579C9.03914 6.21071 8.53043 6 8 6C7.46957 6 6.96086 6.21071 6.58579 6.58579C6.21071 6.96086 6 7.46957 6 8C6 8.53043 6.21071 9.03914 6.58579 9.41421C6.96086 9.78929 7.46957 10 8 10Z",
p3d7a2b00: "M12.5 3.125H7.5V16.875H12.5V3.125ZM13.75 16.875H16.5625C17.425 16.875 18.125 16.175 18.125 15.3125V4.6875C18.125 3.82417 17.425 3.125 16.5625 3.125H13.75V16.875ZM3.4375 3.125H6.25V16.875H3.4375C3.0231 16.875 2.62567 16.7104 2.33265 16.4174C2.03962 16.1243 1.875 15.7269 1.875 15.3125V4.6875C1.875 3.82417 2.575 3.125 3.4375 3.125Z",
p3ebf6d00: "M9 2.8125C9.31066 2.8125 9.5625 3.06434 9.5625 3.375V8.4375H14.625C14.9357 8.4375 15.1875 8.68934 15.1875 9C15.1875 9.31066 14.9357 9.5625 14.625 9.5625H9.5625V14.625C9.5625 14.9357 9.31066 15.1875 9 15.1875C8.68934 15.1875 8.4375 14.9357 8.4375 14.625V9.5625H3.375C3.06434 9.5625 2.8125 9.31066 2.8125 9C2.8125 8.68934 3.06434 8.4375 3.375 8.4375H8.4375V3.375C8.4375 3.06434 8.68934 2.8125 9 2.8125Z",
p865e080: "M9 3.5C7.54131 3.5 6.14236 4.07946 5.11091 5.11091C4.07946 6.14236 3.5 7.54131 3.5 9C3.5 10.4587 4.07946 11.8576 5.11091 12.8891C6.14236 13.9205 7.54131 14.5 9 14.5C10.4587 14.5 11.8576 13.9205 12.8891 12.8891C13.9205 11.8576 14.5 10.4587 14.5 9C14.5 7.54131 13.9205 6.14236 12.8891 5.11091C11.8576 4.07946 10.4587 3.5 9 3.5ZM2 9C2.00009 7.88067 2.26861 6.77768 2.78303 5.78356C3.29745 4.78944 4.04276 3.93318 4.95645 3.2866C5.87015 2.64002 6.92557 2.22197 8.0342 2.06754C9.14282 1.9131 10.2723 2.02677 11.3279 2.39902C12.3836 2.77127 13.3345 3.39124 14.101 4.20692C14.8676 5.0226 15.4273 6.0102 15.7333 7.08689C16.0393 8.16358 16.0827 9.29795 15.8597 10.3949C15.6368 11.4918 15.154 12.5192 14.452 13.391L17.78 16.72C17.8537 16.7887 17.9128 16.8715 17.9538 16.9635C17.9948 17.0555 18.0168 17.1548 18.0186 17.2555C18.0204 17.3562 18.0018 17.4562 17.9641 17.5496C17.9264 17.643 17.8703 17.7278 17.799 17.799C17.7278 17.8703 17.643 17.9264 17.5496 17.9641C17.4562 18.0018 17.3562 18.0204 17.2555 18.0186C17.1548 18.0168 17.0555 17.9948 16.9635 17.9538C16.8715 17.9128 16.7887 17.8537 16.72 17.78L13.391 14.452C12.3625 15.2804 11.1207 15.8009 9.80901 15.9536C8.49727 16.1062 7.16912 15.8846 5.97795 15.3145C4.78677 14.7444 3.78117 13.849 3.07727 12.7316C2.37338 11.6143 1.99991 10.3206 2 9Z",
pb0c0f80: "M9 8.1C10.4912 8.1 11.7 6.89117 11.7 5.4C11.7 3.90883 10.4912 2.7 9 2.7C7.50883 2.7 6.3 3.90883 6.3 5.4C6.3 6.89117 7.50883 8.1 9 8.1Z",
pc028600: "M16.2 7.2C16.2 8.19411 15.3941 9 14.4 9C13.4059 9 12.6 8.19411 12.6 7.2C12.6 6.20589 13.4059 5.4 14.4 5.4C15.3941 5.4 16.2 6.20589 16.2 7.2Z",
pfff3f50: "M5.4 7.2C5.4 8.19411 4.59411 9 3.6 9C2.60589 9 1.8 8.19411 1.8 7.2C1.8 6.20589 2.60589 5.4 3.6 5.4C4.59411 5.4 5.4 6.20589 5.4 7.2Z",
} as const;

// Mock data for employers
const employersData = [
  {
    id: 1,
    name: 'Janis Andreev',
    email: 'email@email.com',
    phone: '8 999 999 99 99',
    role: 'Sales',
    status: 'active',
    lastLogin: '18/07/2024',
    registrationDate: '18/07/2024'
  },
  {
    id: 2,
    name: 'Janis Andreev',
    email: 'email@email.com',
    phone: '8 999 999 99 99',
    role: 'Sales',
    status: 'active',
    lastLogin: '18/07/2024',
    registrationDate: '18/07/2024'
  },
  {
    id: 3,
    name: 'Janis Andreev',
    email: 'email@email.com',
    phone: '8 999 999 99 99',
    role: 'Sales',
    status: 'active',
    lastLogin: '18/07/2024',
    registrationDate: '18/07/2024'
  },
  {
    id: 4,
    name: 'Janis Andreev',
    email: 'email@email.com',
    phone: '8 999 999 99 99',
    role: 'Sales',
    status: 'active',
    lastLogin: '18/07/2024',
    registrationDate: '18/07/2024'
  },
  {
    id: 5,
    name: 'Janis Andreev',
    email: 'email@email.com',
    phone: '8 999 999 99 99',
    role: 'Sales',
    status: 'active',
    lastLogin: '18/07/2024',
    registrationDate: '18/07/2024'
  },
  {
    id: 6,
    name: 'Janis Andreev',
    email: 'email@email.com',
    phone: '8 999 999 99 99',
    role: 'Sales',
    status: 'active',
    lastLogin: '18/07/2024',
    registrationDate: '18/07/2024'
  },
  {
    id: 7,
    name: 'Janis Andreev',
    email: 'email@email.com',
    phone: '8 999 999 99 99',
    role: 'Sales',
    status: 'active',
    lastLogin: '18/07/2024',
    registrationDate: '18/07/2024'
  },
  {
    id: 8,
    name: 'Janis Andreev',
    email: 'email@email.com',
    phone: '8 999 999 99 99',
    role: 'Sales',
    status: 'active',
    lastLogin: '18/07/2024',
    registrationDate: '18/07/2024'
  },
  {
    id: 9,
    name: 'Janis Andreev',
    email: 'email@email.com',
    phone: '8 999 999 99 99',
    role: 'Sales',
    status: 'active',
    lastLogin: '18/07/2024',
    registrationDate: '18/07/2024'
  },
  {
    id: 10,
    name: 'Janis Andreev',
    email: 'email@email.com',
    phone: '8 999 999 99 99',
    role: 'Sales',
    status: 'active',
    lastLogin: '18/07/2024',
    registrationDate: '18/07/2024'
  }
];

export default function EmployersPage() {
  const [activeStatus, setActiveStatus] = useState(true);
  const [perPage, setPerPage] = useState(10);
  const navigate = useNavigate();

  return (
    <div className="bg-[#fafafa] min-h-screen w-full">
      {/* Main Container */}
      <div className="content-stretch flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[110px] w-full">
        {/* Page Header */}
        <div className="content-stretch flex flex-col gap-[14px] items-start pt-6 md:pt-[32px] w-full max-w-[1220px]">
          <div className="content-stretch flex flex-col sm:flex-row gap-4 sm:gap-0 items-start sm:items-center justify-between w-full">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] text-[#171717] text-[24px] md:text-[30px] whitespace-nowrap">
              <p className="leading-[28px] md:leading-[32px]">Employers</p>
            </div>
            <div className="flex flex-wrap gap-[16px] items-center">
              <button className="bg-[#dbeafe] flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0">
                {/* Document Text Icon */}
                <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                  <path clipRule="evenodd" d={svgPaths.p2504cd00} fill="#05376D" fillRule="evenodd" />
                </svg>
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[14px] text-[#1e3a8a]">
                  Export
                </span>
              </button>
              <button
                type="button"
                onClick={() => navigate('/roles')}
                className="bg-[#d97706] flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0"
              >
                {/* User Group Icon */}
                <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                  <path d={svgPaths.pb0c0f80} fill="white" />
                  <path d={svgPaths.pfff3f50} fill="white" />
                  <path d={svgPaths.p11da3d80} fill="white" />
                  <path d={svgPaths.p2cc98380} fill="white" />
                  <path d={svgPaths.pc028600} fill="white" />
                  <path d={svgPaths.p12c80b80} fill="white" />
                </svg>
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[14px] text-white">
                  Roles
                </span>
              </button>
              <button
                type="button"
                onClick={() => navigate('/rights-matrix')}
                className="bg-[#d97706] flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0"
              >
                {/* Shield Icon */}
                <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                  <path clipRule="evenodd" d={svgPaths.p1f0c0b00} fill="white" fillRule="evenodd" />
                </svg>
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[14px] text-white">
                  Rights Matrix
                </span>
              </button>
              <button
                type="button"
                onClick={() => navigate('/employers/new')}
                className="bg-[#05376d] flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0"
              >
                {/* Plus Icon */}
                <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                  <path clipRule="evenodd" d={svgPaths.p3ebf6d00} fill="white" fillRule="evenodd" />
                </svg>
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[14px] text-white">
                  New employer
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Table Container with Filters */}
        <div className="bg-white w-full max-w-[1220px] rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] mt-6 md:mt-[32px]">
          {/* Filters Section */}
          <div className="bg-white w-full border-b border-[#e5e5e5]">
            <div className="flex flex-col size-full">
              <div className="content-stretch flex flex-col gap-[14px] items-end pb-[11px] pt-[10px] px-4 md:px-[24px] w-full">
                {/* Filters Header */}
                <div className="w-full">
                  <div className="flex flex-col md:flex-row gap-4 items-start md:items-start justify-between w-full">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#0a0a0a] text-[14px]">
                      Filters
                    </p>
                    <div className="flex gap-[12px] items-center justify-end w-full md:w-auto">
                      {/* Search */}
                      <div className="flex-1 md:flex-initial w-full md:w-[210px]">
                        <div className="bg-white rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[7px] w-full">
                              <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                                <path clipRule="evenodd" d={svgPaths.p865e080} fill="#A3A3A3" fillRule="evenodd" />
                              </svg>
                              <input
                                type="text"
                                placeholder="Search"
                                className="flex-1 font-['Inter:Regular',sans-serif] leading-[24px] text-[#a3a3a3] text-[14px] bg-transparent border-none outline-none placeholder:text-[#a3a3a3]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="bg-white rounded-[100px] size-[24px] flex-shrink-0 flex items-center justify-center">
                        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                          <path d={svgPaths.p3d7a2b00} fill="#A3A3A3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Filter Inputs - Desktop: Flex Wrap */}
                <div className="w-full">
                  <div className="hidden lg:flex flex-wrap gap-[14px] items-center w-full">
                    {/* Name */}
                    <div className="w-[128px] shrink-0">
                      <input
                        type="text"
                        placeholder="Name"
                        className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] placeholder:text-[#a3a3a3] w-full"
                      />
                    </div>

                    {/* Surname */}
                    <div className="w-[128px] shrink-0">
                      <input
                        type="text"
                        placeholder="Surname"
                        className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] placeholder:text-[#a3a3a3] w-full"
                      />
                    </div>

                    {/* E-mail */}
                    <div className="w-[128px] shrink-0">
                      <input
                        type="text"
                        placeholder="E-mail"
                        className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] placeholder:text-[#a3a3a3] w-full"
                      />
                    </div>

                    {/* Role */}
                    <div className="shrink-0">
                      <div className="relative">
                        <select className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] appearance-none">
                          <option>Role</option>
                        </select>
                        <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                            <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Phone number */}
                    <div className="w-[140px] shrink-0">
                      <input
                        type="text"
                        placeholder="Phone number"
                        className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] placeholder:text-[#a3a3a3] w-full"
                      />
                    </div>

                    {/* Last login */}
                    <div className="shrink-0">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Last login"
                          className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] placeholder:text-[#a3a3a3] w-full"
                        />
                        <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                            <path clipRule="evenodd" d={svgPaths.p24ad8380} fill="#262626" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Registration date */}
                    <div className="shrink-0">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Registration date"
                          className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] placeholder:text-[#a3a3a3] w-full whitespace-nowrap"
                        />
                        <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                            <path clipRule="evenodd" d={svgPaths.p24ad8380} fill="#262626" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Active Toggle */}
                    <div className="flex gap-[12px] items-center shrink-0">
                      <button
                        onClick={() => setActiveStatus(!activeStatus)}
                        className={`h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px] ${
                          activeStatus ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                        }`}
                      >
                        <div
                          className={`absolute bg-white left-[2px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                            activeStatus ? 'translate-x-[21px]' : 'translate-x-0'
                          }`}
                        />
                      </button>
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
                        Active
                      </p>
                    </div>

                    {/* Clear Button */}
                    <button className="bg-[#dbeafe] flex items-center justify-center opacity-50 px-[16px] py-[8px] rounded-[8px] shrink-0">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#1e3a8a] text-[14px] text-center">
                        Clear
                      </p>
                    </button>
                  </div>

                  {/* Mobile/Tablet: Grid Layout */}
                  <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Name"
                      className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] placeholder:text-[#a3a3a3] w-full"
                    />
                    <input
                      type="text"
                      placeholder="Surname"
                      className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] placeholder:text-[#a3a3a3] w-full"
                    />
                    <input
                      type="text"
                      placeholder="E-mail"
                      className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] placeholder:text-[#a3a3a3] w-full"
                    />
                    <div className="relative">
                      <select className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] w-full appearance-none">
                        <option>Role</option>
                      </select>
                      <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="Phone number"
                      className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] placeholder:text-[#a3a3a3] w-full"
                    />
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Last login"
                        className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] placeholder:text-[#a3a3a3] w-full"
                      />
                      <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                          <path clipRule="evenodd" d={svgPaths.p24ad8380} fill="#262626" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="relative col-span-1 sm:col-span-2">
                      <input
                        type="text"
                        placeholder="Registration date"
                        className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] placeholder:text-[#a3a3a3] w-full"
                      />
                      <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                          <path clipRule="evenodd" d={svgPaths.p24ad8380} fill="#262626" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex gap-[12px] items-center col-span-1 sm:col-span-2">
                      <button
                        onClick={() => setActiveStatus(!activeStatus)}
                        className={`h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px] ${
                          activeStatus ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                        }`}
                      >
                        <div
                          className={`absolute bg-white left-[2px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                            activeStatus ? 'translate-x-[21px]' : 'translate-x-0'
                          }`}
                        />
                      </button>
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                        Active
                      </p>
                    </div>
                    <button className="bg-[#dbeafe] opacity-50 px-[16px] py-[8px] rounded-[8px] h-[38px] w-full col-span-1 sm:col-span-2">
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#1e3a8a] text-[14px]">
                        Clear
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table Section - Desktop only */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#fafafa]">
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center pl-[24px] pr-[16px] h-[48px] size-full">
                        <div className="bg-white rounded-[4px] size-[16px] border border-[#d4d4d4] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)]" />
                      </div>
                    </div>
                  </th>
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] h-[48px] size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#0a0a0a] text-[14px]">
                          Name
                        </p>
                        <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] h-[48px] size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#0a0a0a] text-[14px]">
                          E-mail
                        </p>
                        <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] h-[48px] size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#0a0a0a] text-[14px]">
                          Phone
                        </p>
                        <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] h-[48px] size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#0a0a0a] text-[14px]">
                          Role
                        </p>
                        <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] h-[48px] size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#0a0a0a] text-[14px]">
                          Status
                        </p>
                        <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] h-[48px] size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#0a0a0a] text-[14px]">
                          Last login
                        </p>
                        <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] h-[48px] size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#0a0a0a] text-[14px]">
                          Registration date
                        </p>
                        <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center px-[16px] h-[48px] size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#0a0a0a] text-[14px]">
                          Actions
                        </p>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {employersData.map((employer) => (
                  <tr key={employer.id} className="bg-white hover:bg-[#fafafa]">
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px pl-[24px] pr-[16px] h-[56px] size-full">
                          <div className="bg-white rounded-[4px] size-[16px] border border-[#d4d4d4] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)]" />
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {employer.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {employer.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {employer.phone}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {employer.role}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="9" stroke="#16a34a" strokeWidth="1.5" fill="none" />
                            <path d="M7 10l2 2 4-4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {employer.lastLogin}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {employer.registrationDate}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center gap-[12px] pb-px px-[16px] h-[56px] size-full">
                          <button className="flex items-center gap-[4px] text-[#737373] hover:text-[#525252]">
                            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                              <path d="M2 8c0-1.5 1.5-4 6-4s6 2.5 6 4-1.5 4-6 4-6-2.5-6-4z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                              <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            </svg>
                            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px]">
                              View
                            </span>
                          </button>
                          <button className="flex items-center gap-[4px] text-[#2563eb] hover:text-[#1e40af]">
                            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                              <path d="M11.3 3.3l1.4 1.4M2 14h1.4l8.2-8.2-1.4-1.4L2 12.6V14z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px]">
                              Edit
                            </span>
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards View - Mobile & Tablet */}
          <div className="lg:hidden px-4 md:px-6 pb-4 pt-4">
            <div className="space-y-3">
              {employersData.map((employer) => (
                <div key={employer.id} className="border-b border-[#e5e5e5] pb-3 last:border-b-0">
                  <div className="flex items-start gap-3">
                    <div className="bg-white rounded-[4px] size-[16px] border border-[#d4d4d4] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0 mt-1" />
                    <div className="flex-1 space-y-2">
                      {/* Name */}
                      <div>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#171717]">
                          {employer.name}
                        </p>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            E-mail
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            {employer.email}
                          </p>
                        </div>
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            Phone
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            {employer.phone}
                          </p>
                        </div>
                      </div>

                      {/* Role & Status */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            Role
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            {employer.role}
                          </p>
                        </div>
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-1">
                            Status
                          </p>
                          <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="9" stroke="#16a34a" strokeWidth="1.5" fill="none" />
                            <path d="M7 10l2 2 4-4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>

                      {/* Dates */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            Last login
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            {employer.lastLogin}
                          </p>
                        </div>
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            Registration
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            {employer.registrationDate}
                          </p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 pt-1">
                        <button className="flex items-center gap-[4px] text-[#737373]">
                          <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                            <path d="M2 8c0-1.5 1.5-4 6-4s6 2.5 6 4-1.5 4-6 4-6-2.5-6-4z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                          </svg>
                          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px]">
                            View
                          </span>
                        </button>
                        <button className="flex items-center gap-[4px] text-[#2563eb]">
                          <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                            <path d="M11.3 3.3l1.4 1.4M2 14h1.4l8.2-8.2-1.4-1.4L2 12.6V14z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px]">
                            Edit
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between px-4 md:px-[24px] py-[16px] border-t border-[#e5e5e5]">
            <div className="flex items-center gap-[8px]">
              <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#737373]">Per page</span>
              <div className="relative">
                <select 
                  value={perPage}
                  onChange={(e) => setPerPage(Number(e.target.value))}
                  className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] appearance-none"
                >
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <button className="bg-white border border-[#e5e5e5] rounded-[8px] px-[16px] py-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06)]">
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#171717]">
                Next
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
