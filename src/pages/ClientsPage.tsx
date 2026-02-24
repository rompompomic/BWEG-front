import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const svgPaths = {
p113e6700: "M0.5312 8.472C0.413684 8.16665 0.413684 7.82855 0.5312 7.5232C1.11298 6.01479 2.13796 4.71795 3.47117 3.80345C4.80437 2.88894 6.38329 2.39965 8 2.4C11.4056 2.4 14.3144 4.528 15.4688 7.528C15.5864 7.8328 15.5856 8.1712 15.4688 8.4768C14.887 9.98521 13.862 11.282 12.5288 12.1966C11.1956 13.1111 9.61671 13.6004 8 13.6C4.5944 13.6 1.6856 11.472 0.5312 8.472ZM11.2 8C11.2 8.84869 10.8629 9.66263 10.2627 10.2627C9.66263 10.8629 8.84869 11.2 8 11.2C7.15131 11.2 6.33737 10.8629 5.73726 10.2627C5.13714 9.66263 4.8 8.84869 4.8 8C4.8 7.15131 5.13714 6.33737 5.73726 5.73726C6.33737 5.13714 7.15131 4.8 8 4.8C8.84869 4.8 9.66263 5.13714 10.2627 5.73726C10.8629 6.33737 11.2 7.15131 11.2 8Z",
p17841600: "M9.401 3.003C10.556 1.003 13.444 1.003 14.598 3.003L21.953 15.751C23.107 17.751 21.663 20.251 19.354 20.251H4.645C2.336 20.251 0.893 17.751 2.047 15.751L9.4 3.003H9.401ZM12 8.25C12.1989 8.25 12.3897 8.32902 12.5303 8.46967C12.671 8.61032 12.75 8.80109 12.75 9V12.75C12.75 12.9489 12.671 13.1397 12.5303 13.2803C12.3897 13.421 12.1989 13.5 12 13.5C11.8011 13.5 11.6103 13.421 11.4697 13.2803C11.329 13.1397 11.25 12.9489 11.25 12.75V9C11.25 8.80109 11.329 8.61032 11.4697 8.46967C11.6103 8.32902 11.8011 8.25 12 8.25ZM12 16.5C12.1989 16.5 12.3897 16.421 12.5303 16.2803C12.671 16.1397 12.75 15.9489 12.75 15.75C12.75 15.5511 12.671 15.3603 12.5303 15.2197C12.3897 15.079 12.1989 15 12 15C11.8011 15 11.6103 15.079 11.4697 15.2197C11.329 15.3603 11.25 15.5511 11.25 15.75C11.25 15.9489 11.329 16.1397 11.4697 16.2803C11.6103 16.421 11.8011 16.5 12 16.5Z",
p1817e800: "M19.6836 15.1824C20.2623 14.8764 20.7466 14.4183 21.0844 13.8576C21.4222 13.2969 21.6006 12.6546 21.6006 12C21.6006 11.3454 21.4222 10.7031 21.0844 10.1424C20.7466 9.58165 20.2623 9.12363 19.6836 8.8176C19.8765 8.19204 19.8951 7.52572 19.7376 6.89034C19.58 6.25496 19.2522 5.67457 18.7893 5.21162C18.3265 4.74866 17.7462 4.42067 17.1109 4.26294C16.4755 4.1052 15.8092 4.12368 15.1836 4.3164C14.8777 3.73741 14.4196 3.25283 13.8588 2.91483C13.2979 2.57683 12.6554 2.39822 12.0006 2.39822C11.3458 2.39822 10.7033 2.57683 10.1424 2.91483C9.58158 3.25283 9.12352 3.73741 8.8176 4.3164C8.19204 4.12351 7.52572 4.10485 6.89034 4.26242C6.25496 4.41999 5.67457 4.74783 5.21162 5.21066C4.74867 5.67348 4.42067 6.25379 4.26294 6.88912C4.1052 7.52446 4.12368 8.19078 4.3164 8.8164C3.73741 9.12232 3.25283 9.58038 2.91483 10.1412C2.57683 10.7021 2.39822 11.3446 2.39822 11.9994C2.39822 12.6542 2.57683 13.2967 2.91483 13.8576C3.25283 14.4184 3.73741 14.8765 4.3164 15.1824C4.12351 15.808 4.10485 16.4743 4.26242 17.1097C4.41999 17.745 4.74783 18.3254 5.21066 18.7884C5.67348 19.2513 6.25379 19.5793 6.88912 19.7371C7.52446 19.8948 8.19078 19.8763 8.8164 19.6836C9.12232 20.2626 9.58038 20.7472 10.1412 21.0852C10.7021 21.4232 11.3446 21.6018 11.9994 21.6018C12.6542 21.6018 13.2967 21.4232 13.8576 21.0852C14.4184 20.7472 14.8765 20.2626 15.1824 19.6836C15.808 19.8765 16.4743 19.8951 17.1097 19.7376C17.745 19.58 18.3254 19.2522 18.7884 18.7893C19.2513 18.3265 19.5793 17.7462 19.7371 17.1109C19.8948 16.4755 19.8763 15.808 19.6836 15.1824ZM16.6284 9.8304C16.698 9.73475 16.748 9.62632 16.7757 9.51132C16.8034 9.39633 16.8081 9.277 16.7897 9.16017C16.7712 9.04333 16.73 8.93128 16.6682 8.83039C16.6065 8.72951 16.5255 8.64177 16.4298 8.5722C16.3341 8.50263 16.2257 8.45257 16.1107 8.4249C15.9957 8.39723 15.8764 8.39248 15.7596 8.41092C15.6427 8.42936 15.5307 8.47063 15.4298 8.53238C15.3289 8.59413 15.2412 8.67514 15.1716 8.7708L10.992 14.5188L8.736 12.2628C8.65294 12.1769 8.5536 12.1084 8.44377 12.0612C8.33394 12.0141 8.21583 11.9894 8.09633 11.9884C7.97683 11.9874 7.85833 12.0102 7.74775 12.0555C7.63716 12.1008 7.53671 12.1677 7.45224 12.2523C7.36778 12.3368 7.301 12.4373 7.2558 12.5479C7.2106 12.6586 7.18788 12.7771 7.18898 12.8966C7.19007 13.0161 7.21495 13.1342 7.26217 13.244C7.30939 13.3537 7.378 13.453 7.464 13.536L10.464 16.536C10.556 16.628 10.6668 16.699 10.7888 16.744C10.9108 16.7891 11.0411 16.8072 11.1708 16.797C11.3005 16.7869 11.4264 16.7488 11.54 16.6852C11.6535 16.6217 11.7519 16.5344 11.8284 16.4292L16.6284 9.8292V9.8304Z",
p24ad8380: "M5.0625 1.6875C5.21168 1.6875 5.35476 1.74676 5.46025 1.85225C5.56574 1.95774 5.625 2.10082 5.625 2.25V3.375H12.375V2.25C12.375 2.10082 12.4343 1.95774 12.5398 1.85225C12.6452 1.74676 12.7883 1.6875 12.9375 1.6875C13.0867 1.6875 13.2298 1.74676 13.3352 1.85225C13.4407 1.95774 13.5 2.10082 13.5 2.25V3.375H14.0625C14.6592 3.375 15.2315 3.61205 15.6535 4.03401C16.0754 4.45597 16.3125 5.02826 16.3125 5.625V14.0625C16.3125 14.6592 16.0754 15.2315 15.6535 15.6535C15.2315 16.0754 14.6592 16.3125 14.0625 16.3125H3.9375C3.34076 16.3125 2.76847 16.0754 2.34651 15.6535C1.92455 15.2315 1.6875 14.6592 1.6875 14.0625V5.625C1.6875 5.02826 1.92455 4.45597 2.34651 4.03401C2.76847 3.61205 3.34076 3.375 3.9375 3.375H4.5V2.25C4.5 2.10082 4.55926 1.95774 4.66475 1.85225C4.77024 1.74676 4.91332 1.6875 5.0625 1.6875ZM15.1875 8.4375C15.1875 8.13913 15.069 7.85298 14.858 7.642C14.647 7.43103 14.3609 7.3125 14.0625 7.3125H3.9375C3.63913 7.3125 3.35298 7.43103 3.142 7.642C2.93103 7.85298 2.8125 8.13913 2.8125 8.4375V14.0625C2.8125 14.3609 2.93103 14.647 3.142 14.858C3.35298 15.069 3.63913 15.1875 3.9375 15.1875H14.0625C14.3609 15.1875 14.647 15.069 14.858 14.858C15.069 14.647 15.1875 14.3609 15.1875 14.0625V8.4375Z",
p26e2b7f0: "M5.22 8.22C5.36063 8.07955 5.55125 8.00066 5.75 8.00066C5.94875 8.00066 6.13937 8.07955 6.28 8.22L10 11.94L13.72 8.22C13.7887 8.14631 13.8715 8.08721 13.9635 8.04622C14.0555 8.00523 14.1548 7.98319 14.2555 7.98141C14.3562 7.97963 14.4562 7.99816 14.5496 8.03588C14.643 8.0736 14.7278 8.12974 14.799 8.20096C14.8703 8.27218 14.9264 8.35701 14.9641 8.4504C15.0018 8.54379 15.0204 8.64382 15.0186 8.74452C15.0168 8.84522 14.9948 8.94454 14.9538 9.03654C14.9128 9.12854 14.8537 9.21134 14.78 9.28L10.53 13.53C10.3894 13.6705 10.1988 13.7493 10 13.7493C9.80125 13.7493 9.61063 13.6705 9.47 13.53L5.22 9.28C5.07955 9.13937 5.00066 8.94875 5.00066 8.75C5.00066 8.55125 5.07955 8.36063 5.22 8.22Z",
p28ffe520: "M4.3464 11.1336L5.356 8.6096C5.51692 8.20751 5.75778 7.84227 6.064 7.536L11.6 2.0016C11.9183 1.68334 12.3499 1.50454 12.8 1.50454C13.2501 1.50454 13.6817 1.68334 14 2.0016C14.3183 2.31986 14.4971 2.75151 14.4971 3.2016C14.4971 3.65169 14.3183 4.08334 14 4.4016L8.464 9.936C8.1576 10.2424 7.792 10.484 7.3896 10.6448L4.8664 11.6544C4.79371 11.6835 4.71408 11.6906 4.63738 11.6749C4.56067 11.6592 4.49028 11.6213 4.43491 11.5659C4.37955 11.5105 4.34165 11.4401 4.32591 11.3634C4.31018 11.2867 4.3173 11.2071 4.3464 11.1344V11.1336Z",
p2b4a67f0: "M2.8 4.6C2.8 4.048 3.248 3.6 3.8 3.6H8C8.15913 3.6 8.31174 3.53679 8.42426 3.42426C8.53679 3.31174 8.6 3.15913 8.6 3C8.6 2.84087 8.53679 2.68826 8.42426 2.57574C8.31174 2.46321 8.15913 2.4 8 2.4H3.8C3.21652 2.4 2.65695 2.63179 2.24437 3.04437C1.83179 3.45695 1.6 4.01652 1.6 4.6V12.2C1.6 12.7835 1.83179 13.3431 2.24437 13.7556C2.65695 14.1682 3.21652 14.4 3.8 14.4H11.4C11.9835 14.4 12.5431 14.1682 12.9556 13.7556C13.3682 13.3431 13.6 12.7835 13.6 12.2V8C13.6 7.84087 13.5368 7.68826 13.4243 7.57574C13.3117 7.46321 13.1591 7.4 13 7.4C12.8409 7.4 12.6883 7.46321 12.5757 7.57574C12.4632 7.68826 12.4 7.84087 12.4 8V12.2C12.4 12.752 11.952 13.2 11.4 13.2H3.8C3.248 13.2 2.8 12.752 2.8 12.2V4.6Z",
p2ea5fa80: "M12 1.5C9.10051 1.5 6.75 3.85051 6.75 6.75V9.75C5.09315 9.75 3.75 11.0931 3.75 12.75V19.5C3.75 21.1569 5.09315 22.5 6.75 22.5H17.25C18.9069 22.5 20.25 21.1569 20.25 19.5V12.75C20.25 11.0931 18.9069 9.75 17.25 9.75V6.75C17.25 3.85051 14.8995 1.5 12 1.5ZM15.75 9.75V6.75C15.75 4.67893 14.0711 3 12 3C9.92893 3 8.25 4.67893 8.25 6.75V9.75H15.75Z",
p30009f80: "M2.5 2.5V3.75M2.5 17.5V12.5M2.5 12.5L4.80841 11.9229C6.54529 11.4887 8.3802 11.6901 9.98153 12.4908L10.0713 12.5356C11.6406 13.3203 13.4353 13.5299 15.1432 13.1281L17.7384 12.5174C17.5809 11.075 17.5 9.60942 17.5 8.125C17.5 6.65285 17.5795 5.19928 17.7345 3.76835L15.1432 4.37807C13.4353 4.77993 11.6406 4.5703 10.0713 3.78565L9.98153 3.74076C8.3802 2.9401 6.54529 2.73868 4.80841 3.1729L2.5 3.75M2.5 12.5V3.75",
p32867e00: "M8 10C8.53043 10 9.03914 9.78929 9.41421 9.41421C9.78929 9.03914 10 8.53043 10 8C10 7.46957 9.78929 6.96086 9.41421 6.58579C9.03914 6.21071 8.53043 6 8 6C7.46957 6 6.96086 6.21071 6.58579 6.58579C6.21071 6.96086 6 7.46957 6 8C6 8.53043 6.21071 9.03914 6.58579 9.41421C6.96086 9.78929 7.46957 10 8 10Z",
p32f0f880: "M3.125 17.5H16.875M3.75 2.5H16.25M4.375 2.5V17.5M15.625 2.5V17.5M7.5 5.625H8.75M7.5 8.125H8.75M7.5 10.625H8.75M11.25 5.625H12.5M11.25 8.125H12.5M11.25 10.625H12.5M7.5 17.5V14.6875C7.5 14.1697 7.91973 13.75 8.4375 13.75H11.5625C12.0803 13.75 12.5 14.1697 12.5 14.6875V17.5",
p3d7a2b00: "M12.5 3.125H7.5V16.875H12.5V3.125ZM13.75 16.875H16.5625C17.425 16.875 18.125 16.175 18.125 15.3125V4.6875C18.125 3.82417 17.425 3.125 16.5625 3.125H13.75V16.875ZM3.4375 3.125H6.25V16.875H3.4375C3.0231 16.875 2.62567 16.7104 2.33265 16.4174C2.03962 16.1243 1.875 15.7269 1.875 15.3125V4.6875C1.875 3.82417 2.575 3.125 3.4375 3.125Z",
p3ebf6d00: "M9 2.8125C9.31066 2.8125 9.5625 3.06434 9.5625 3.375V8.4375H14.625C14.9357 8.4375 15.1875 8.68934 15.1875 9C15.1875 9.31066 14.9357 9.5625 14.625 9.5625H9.5625V14.625C9.5625 14.9357 9.31066 15.1875 9 15.1875C8.68934 15.1875 8.4375 14.9357 8.4375 14.625V9.5625H3.375C3.06434 9.5625 2.8125 9.31066 2.8125 9C2.8125 8.68934 3.06434 8.4375 3.375 8.4375H8.4375V3.375C8.4375 3.06434 8.68934 2.8125 9 2.8125Z",
p45fa600: "M14.9846 15.604C13.8434 14.0979 12.0353 13.125 10 13.125C7.96467 13.125 6.15658 14.0979 5.01539 15.604M14.9846 15.604C16.5279 14.2303 17.5 12.2287 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 12.2287 3.47208 14.2303 5.01539 15.604M14.9846 15.604C13.6596 16.7834 11.9135 17.5 10 17.5C8.08653 17.5 6.34042 16.7834 5.01539 15.604M12.5 8.125C12.5 9.50571 11.3807 10.625 10 10.625C8.61929 10.625 7.5 9.50571 7.5 8.125C7.5 6.74429 8.61929 5.625 10 5.625C11.3807 5.625 12.5 6.74429 12.5 8.125Z",
p865e080: "M9 3.5C7.54131 3.5 6.14236 4.07946 5.11091 5.11091C4.07946 6.14236 3.5 7.54131 3.5 9C3.5 10.4587 4.07946 11.8576 5.11091 12.8891C6.14236 13.9205 7.54131 14.5 9 14.5C10.4587 14.5 11.8576 13.9205 12.8891 12.8891C13.9205 11.8576 14.5 10.4587 14.5 9C14.5 7.54131 13.9205 6.14236 12.8891 5.11091C11.8576 4.07946 10.4587 3.5 9 3.5ZM2 9C2.00009 7.88067 2.26861 6.77768 2.78303 5.78356C3.29745 4.78944 4.04276 3.93318 4.95645 3.2866C5.87015 2.64002 6.92557 2.22197 8.0342 2.06754C9.14282 1.9131 10.2723 2.02677 11.3279 2.39902C12.3836 2.77127 13.3345 3.39124 14.101 4.20692C14.8676 5.0226 15.4273 6.0102 15.7333 7.08689C16.0393 8.16358 16.0827 9.29795 15.8597 10.3949C15.6368 11.4918 15.154 12.5192 14.452 13.391L17.78 16.72C17.8537 16.7887 17.9128 16.8715 17.9538 16.9635C17.9948 17.0555 18.0168 17.1548 18.0186 17.2555C18.0204 17.3562 18.0018 17.4562 17.9641 17.5496C17.9264 17.643 17.8703 17.7278 17.799 17.799C17.7278 17.8703 17.643 17.9264 17.5496 17.9641C17.4562 18.0018 17.3562 18.0204 17.2555 18.0186C17.1548 18.0168 17.0555 17.9948 16.9635 17.9538C16.8715 17.9128 16.7887 17.8537 16.72 17.78L13.391 14.452C12.3625 15.2804 11.1207 15.8009 9.80901 15.9536C8.49727 16.1062 7.16912 15.8846 5.97795 15.3145C4.78677 14.7444 3.78117 13.849 3.07727 12.7316C2.37338 11.6143 1.99991 10.3206 2 9Z",
} as const;

// Mock data for clients
const clientsData = [
  {
    id: 1,
    type: 'person',
    name: 'Janis Andreev',
    number: '437857 - 84356',
    segment: 'B2C',
    status: 'Prepayment',
    risk: 'warning',
    promoCategory: 'Standart',
    manager: 'Krists Lācis',
    unpaid: '-',
    latsOrder: '18/07/2024',
    lastInvoice: '18/07/2024'
  },
  {
    id: 2,
    type: 'company',
    name: 'SIA "Former"',
    number: '40002202',
    segment: 'B2B',
    status: 'Blocked',
    risk: 'blocked',
    promoCategory: 'Contract',
    manager: 'Krists Lācis',
    unpaid: '2 (1000 €)',
    latsOrder: '18/07/2024',
    lastInvoice: '18/07/2024'
  },
  {
    id: 3,
    type: 'government',
    name: 'Ministry',
    number: '40002188',
    segment: 'GOV',
    status: 'Active',
    risk: 'ok',
    promoCategory: 'Standart',
    manager: 'Krists Lācis',
    unpaid: '-',
    latsOrder: '18/07/2024',
    lastInvoice: '18/07/2024'
  },
  {
    id: 4,
    type: 'person',
    name: 'Janis Andreev',
    number: '437857 - 84356',
    segment: 'B2C',
    status: 'Prepayment',
    risk: 'warning',
    promoCategory: 'Standart',
    manager: 'Krists Lācis',
    unpaid: '-',
    latsOrder: '18/07/2024',
    lastInvoice: '18/07/2024'
  },
  {
    id: 5,
    type: 'person',
    name: 'Janis Andreev',
    number: '437857 - 84356',
    segment: 'B2C',
    status: 'Prepayment',
    risk: 'warning',
    promoCategory: 'Standart',
    manager: 'Krists Lācis',
    unpaid: '-',
    latsOrder: '18/07/2024',
    lastInvoice: '18/07/2024'
  },
  {
    id: 6,
    type: 'person',
    name: 'Janis Andreev',
    number: '437857 - 84356',
    segment: 'B2C',
    status: 'Prepayment',
    risk: 'warning',
    promoCategory: 'Standart',
    manager: 'Krists Lācis',
    unpaid: '-',
    latsOrder: '18/07/2024',
    lastInvoice: '18/07/2024'
  },
  {
    id: 7,
    type: 'person',
    name: 'Janis Andreev',
    number: '437857 - 84356',
    segment: 'B2C',
    status: 'Prepayment',
    risk: 'warning',
    promoCategory: 'Standart',
    manager: 'Krists Lācis',
    unpaid: '-',
    latsOrder: '18/07/2024',
    lastInvoice: '18/07/2024'
  },
  {
    id: 8,
    type: 'person',
    name: 'Janis Andreev',
    number: '437857 - 84356',
    segment: 'B2C',
    status: 'Prepayment',
    risk: 'warning',
    promoCategory: 'Standart',
    manager: 'Krists Lācis',
    unpaid: '-',
    latsOrder: '18/07/2024',
    lastInvoice: '18/07/2024'
  },
  {
    id: 9,
    type: 'person',
    name: 'Janis Andreev',
    number: '437857 - 84356',
    segment: 'B2C',
    status: 'Prepayment',
    risk: 'warning',
    promoCategory: 'Standart',
    manager: 'Krists Lācis',
    unpaid: '-',
    latsOrder: '18/07/2024',
    lastInvoice: '18/07/2024'
  },
  {
    id: 10,
    type: 'person',
    name: 'Janis Andreev',
    number: '437857 - 84356',
    segment: 'B2C',
    status: 'Prepayment',
    risk: 'warning',
    promoCategory: 'Standart',
    manager: 'Krists Lācis',
    unpaid: '-',
    latsOrder: '18/07/2024',
    lastInvoice: '18/07/2024'
  }
];

export default function ClientsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'personal' | 'legal' | 'governmental'>('all');
  const [unpaidInvoices, setUnpaidInvoices] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-[#fafafa] min-h-screen w-full">
      {/* Main Container */}
      <div className="content-stretch flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[110px] w-full">
        {/* Page Header */}
        <div className="content-stretch flex flex-col gap-[14px] items-start pt-6 md:pt-[32px] w-full max-w-[1220px]">
          <div className="content-stretch flex flex-col sm:flex-row gap-4 sm:gap-0 items-start sm:items-center justify-between w-full">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] text-[#171717] text-[24px] md:text-[30px] whitespace-nowrap">
              <p className="leading-[28px] md:leading-[32px]">Clients</p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/clients/new')}
              className="bg-[#05376d] flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0"
            >
              {/* Plus Icon */}
              <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                <path clipRule="evenodd" d={svgPaths.p3ebf6d00} fill="white" fillRule="evenodd" />
              </svg>
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[14px] text-white">
                New client
              </span>
            </button>
          </div>

          {/* Tabs */}
          <div className="bg-white flex gap-[4px] items-center justify-center overflow-x-auto p-[8px] rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex gap-[10px] h-[36px] items-center justify-center px-[12px] rounded-[8px] shrink-0 whitespace-nowrap ${
                activeTab === 'all' ? 'bg-[#fafafa]' : 'bg-white'
              }`}
            >
              <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[14px] ${
                activeTab === 'all' ? 'text-[#d97706]' : 'text-[#737373]'
              }`}>
                All
              </p>
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`flex gap-[10px] h-[36px] items-center justify-center px-[12px] rounded-[8px] shrink-0 whitespace-nowrap ${
                activeTab === 'personal' ? 'bg-[#fafafa]' : 'bg-white'
              }`}
            >
              <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[14px] ${
                activeTab === 'personal' ? 'text-[#d97706]' : 'text-[#737373]'
              }`}>
                Personal
              </p>
            </button>
            <button
              onClick={() => setActiveTab('legal')}
              className={`flex gap-[10px] h-[36px] items-center justify-center px-[12px] rounded-[8px] shrink-0 whitespace-nowrap ${
                activeTab === 'legal' ? 'bg-[#fafafa]' : 'bg-white'
              }`}
            >
              <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[14px] ${
                activeTab === 'legal' ? 'text-[#d97706]' : 'text-[#737373]'
              }`}>
                Legal
              </p>
            </button>
            <button
              onClick={() => setActiveTab('governmental')}
              className={`flex gap-[10px] h-[36px] items-center justify-center px-[12px] rounded-[8px] shrink-0 whitespace-nowrap ${
                activeTab === 'governmental' ? 'bg-[#fafafa]' : 'bg-white'
              }`}
            >
              <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[14px] ${
                activeTab === 'governmental' ? 'text-[#d97706]' : 'text-[#737373]'
              }`}>
                Governmental
              </p>
            </button>
          </div>
        </div>

        {/* Table Container with Filters */}
        <div className="bg-white w-full max-w-[1220px] rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] mt-6 md:mt-[32px]">
          {/* Filters Section */}
          <div className="bg-white w-full">
            <div className="flex flex-col size-full">
              <div className="content-stretch flex flex-col gap-[8px] items-end pb-[11px] pt-[10px] px-4 md:px-[24px] w-full">
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
                    {/* Number */}
                    <div className="w-[128px] shrink-0">
                      <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] size-full">
                            <input
                              type="text"
                              placeholder="Number"
                              className="font-['Inter:Regular',sans-serif] leading-[24px] overflow-hidden shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis bg-transparent border-none outline-none w-full placeholder:text-[#a3a3a3]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Segment */}
                    <div className="shrink-0">
                      <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] size-full">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] overflow-hidden shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap">
                              Segment
                            </p>
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Risk status */}
                    <div className="shrink-0">
                      <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] size-full">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] overflow-hidden shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap">
                              Risk status
                            </p>
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Status */}
                    <div className="shrink-0">
                      <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] size-full">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] overflow-hidden shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap">
                              Status
                            </p>
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Promo category */}
                    <div className="shrink-0">
                      <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] size-full">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] overflow-hidden shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap">
                              Promo category
                            </p>
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Manager */}
                    <div className="shrink-0">
                      <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] size-full">
                            <input
                              type="text"
                              placeholder="Manager"
                              className="font-['Inter:Regular',sans-serif] leading-[24px] overflow-hidden shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis bg-transparent border-none outline-none w-full placeholder:text-[#a3a3a3]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Lats order */}
                    <div className="shrink-0">
                      <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] size-full">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#a3a3a3] text-[14px] whitespace-nowrap">
                              Lats order
                            </p>
                            <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                              <path clipRule="evenodd" d={svgPaths.p24ad8380} fill="#262626" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Last Invoice */}
                    <div className="shrink-0">
                      <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] size-full">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#a3a3a3] text-[14px] whitespace-nowrap">
                              Last Invoice
                            </p>
                            <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                              <path clipRule="evenodd" d={svgPaths.p24ad8380} fill="#262626" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Unpaid invoices Toggle */}
                    <div className="flex gap-[12px] items-center shrink-0">
                      <button
                        onClick={() => setUnpaidInvoices(!unpaidInvoices)}
                        className={`h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px] ${
                          unpaidInvoices ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                        }`}
                      >
                        <div
                          className={`absolute bg-white left-[2px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                            unpaidInvoices ? 'translate-x-[21px]' : 'translate-x-0'
                          }`}
                        />
                      </button>
                      <p className="font-['Inter:Regular',sans-serif] leading-[20px] shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
                        Unpaid invoices
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
                    {/* Number */}
                    <input
                      type="text"
                      placeholder="Number"
                      className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] placeholder:text-[#a3a3a3] w-full"
                    />

                    {/* Segment */}
                    <div className="relative w-full">
                      <select className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] w-full appearance-none">
                        <option>Segment</option>
                      </select>
                      <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Risk status */}
                    <div className="relative w-full">
                      <select className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] w-full appearance-none">
                        <option>Risk status</option>
                      </select>
                      <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Status */}
                    <div className="relative w-full">
                      <select className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] w-full appearance-none">
                        <option>Status</option>
                      </select>
                      <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Promo category */}
                    <div className="relative w-full">
                      <select className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] w-full appearance-none">
                        <option>Promo category</option>
                      </select>
                      <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Manager */}
                    <input
                      type="text"
                      placeholder="Manager"
                      className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] placeholder:text-[#a3a3a3] w-full"
                    />

                    {/* Lats order */}
                    <div className="relative w-full">
                      <input
                        type="text"
                        placeholder="Lats order"
                        className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] placeholder:text-[#a3a3a3] w-full"
                      />
                      <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                          <path clipRule="evenodd" d={svgPaths.p24ad8380} fill="#262626" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Last Invoice */}
                    <div className="relative w-full">
                      <input
                        type="text"
                        placeholder="Last Invoice"
                        className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] placeholder:text-[#a3a3a3] w-full"
                      />
                      <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                          <path clipRule="evenodd" d={svgPaths.p24ad8380} fill="#262626" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Unpaid invoices Toggle */}
                    <div className="flex gap-[12px] items-center col-span-1 sm:col-span-2">
                      <button
                        onClick={() => setUnpaidInvoices(!unpaidInvoices)}
                        className={`h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px] ${
                          unpaidInvoices ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                        }`}
                      >
                        <div
                          className={`absolute bg-white left-[2px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                            unpaidInvoices ? 'translate-x-[21px]' : 'translate-x-0'
                          }`}
                        />
                      </button>
                      <p className="font-['Inter:Regular',sans-serif] leading-[20px] text-[#0a0a0a] text-[14px] whitespace-nowrap">
                        Unpaid invoices
                      </p>
                    </div>

                    {/* Clear Button */}
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

          {/* Border line after filters */}
          <div className="border-b border-[#e5e5e5]" />

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
                          Client
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
                          Number
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
                          Segment
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
                          Risk
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
                          Promo category
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
                          Manager
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
                          Unpaid
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
                          Lats order
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
                          Last Invoice
                        </p>
                        <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {clientsData.map((client) => (
                  <tr key={client.id} className="bg-white hover:bg-[#fafafa]">
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px pl-[24px] pr-[16px] h-[56px] size-full">
                          <div className="bg-white rounded-[4px] size-[16px] border border-[#d4d4d4] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)]" />
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center gap-[6px] pb-px px-[16px] h-[56px] size-full">
                          {client.type === 'person' ? (
                            <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 16 16">
                              <circle cx="8" cy="8" r="7.5" stroke="#171717" strokeWidth="1" fill="none" />
                              <path d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="#171717" />
                              <path d="M4 12c0-2 1.5-3 4-3s4 1 4 3" stroke="#171717" strokeWidth="1" fill="none" strokeLinecap="round" />
                            </svg>
                          ) : client.type === 'company' ? (
                            <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 16 16">
                              <rect x="2" y="2" width="12" height="12" rx="1" stroke="#171717" strokeWidth="1" fill="none" />
                              <rect x="5" y="5" width="2" height="2" fill="#171717" />
                              <rect x="9" y="5" width="2" height="2" fill="#171717" />
                              <rect x="5" y="9" width="2" height="2" fill="#171717" />
                              <rect x="9" y="9" width="2" height="2" fill="#171717" />
                            </svg>
                          ) : (
                            <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 16 16">
                              <path d="M2 6h12v8H2z" stroke="#171717" strokeWidth="1" fill="none" />
                              <path d="M4 6V4a4 4 0 0 1 8 0v2" stroke="#171717" strokeWidth="1" fill="none" />
                              <rect x="7" y="9" width="2" height="3" fill="#171717" />
                            </svg>
                          )}
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {client.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {client.number}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {client.segment}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <span
                            className={`px-[8px] py-[2px] rounded-[4px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] ${
                              client.status === 'Prepayment'
                                ? 'bg-[#fef3c7] text-[#d97706]'
                                : client.status === 'Blocked'
                                ? 'bg-[#fee2e2] text-[#dc2626]'
                                : 'bg-[#dcfce7] text-[#16a34a]'
                            }`}
                          >
                            {client.status}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          {client.risk === 'warning' ? (
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <path d="M10 2l8 14H2L10 2z" stroke="#d97706" strokeWidth="1.5" fill="none" />
                              <circle cx="10" cy="13" r="0.5" fill="#d97706" />
                              <path d="M10 7v4" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          ) : client.risk === 'blocked' ? (
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke="#737373" strokeWidth="1.5" fill="none" />
                              <path d="M7 10h6" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          ) : (
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <circle cx="10" cy="10" r="8" stroke="#16a34a" strokeWidth="1.5" fill="none" />
                              <path d="M7 10l2 2 4-4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {client.promoCategory}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {client.manager}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {client.unpaid}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {client.latsOrder}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {client.lastInvoice}
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards View - Mobile & Tablet */}
          <div className="lg:hidden px-4 md:px-6 pb-4">
            <div className="space-y-3">
              {clientsData.map((client) => (
                <div key={client.id} className="border-b border-[#e5e5e5] pb-3 last:border-b-0">
                  <div className="flex items-start gap-3">
                    <div className="bg-white rounded-[4px] size-[16px] border border-[#d4d4d4] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0 mt-1" />
                    <div className="flex-1 space-y-2">
                      {/* Client Name */}
                      <div className="flex items-center gap-[6px]">
                        {client.type === 'person' ? (
                          <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="7.5" stroke="#171717" strokeWidth="1" fill="none" />
                            <path d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="#171717" />
                            <path d="M4 12c0-2 1.5-3 4-3s4 1 4 3" stroke="#171717" strokeWidth="1" fill="none" strokeLinecap="round" />
                          </svg>
                        ) : client.type === 'company' ? (
                          <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 16 16">
                            <rect x="2" y="2" width="12" height="12" rx="1" stroke="#171717" strokeWidth="1" fill="none" />
                            <rect x="5" y="5" width="2" height="2" fill="#171717" />
                            <rect x="9" y="5" width="2" height="2" fill="#171717" />
                            <rect x="5" y="9" width="2" height="2" fill="#171717" />
                            <rect x="9" y="9" width="2" height="2" fill="#171717" />
                          </svg>
                        ) : (
                          <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 16 16">
                            <path d="M2 6h12v8H2z" stroke="#171717" strokeWidth="1" fill="none" />
                            <path d="M4 6V4a4 4 0 0 1 8 0v2" stroke="#171717" strokeWidth="1" fill="none" />
                            <rect x="7" y="9" width="2" height="3" fill="#171717" />
                          </svg>
                        )}
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#171717]">
                          {client.name}
                        </p>
                      </div>

                      {/* Number & Segment */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            Number
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            {client.number}
                          </p>
                        </div>
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            Segment
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            {client.segment}
                          </p>
                        </div>
                      </div>

                      {/* Status & Risk */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-1">
                            Status
                          </p>
                          <span
                            className={`px-[8px] py-[2px] rounded-[4px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] ${
                              client.status === 'Prepayment'
                                ? 'bg-[#fef3c7] text-[#d97706]'
                                : client.status === 'Blocked'
                                ? 'bg-[#fee2e2] text-[#dc2626]'
                                : 'bg-[#dcfce7] text-[#16a34a]'
                            }`}
                          >
                            {client.status}
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-1">
                            Risk
                          </p>
                          {client.risk === 'warning' ? (
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <path d="M10 2l8 14H2L10 2z" stroke="#d97706" strokeWidth="1.5" fill="none" />
                              <circle cx="10" cy="13" r="0.5" fill="#d97706" />
                              <path d="M10 7v4" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          ) : client.risk === 'blocked' ? (
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke="#737373" strokeWidth="1.5" fill="none" />
                              <path d="M7 10h6" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          ) : (
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <circle cx="10" cy="10" r="8" stroke="#16a34a" strokeWidth="1.5" fill="none" />
                              <path d="M7 10l2 2 4-4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      </div>

                      {/* Manager & Dates */}
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            Manager
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            {client.manager}
                          </p>
                        </div>
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            Last order
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            {client.latsOrder}
                          </p>
                        </div>
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
                <select className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] appearance-none">
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
