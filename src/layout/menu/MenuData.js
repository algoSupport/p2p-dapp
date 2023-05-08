const menu = [
  { heading: "Account", requireConnect: true },
  {
    icon: "layout-alt-fill",
    text: "Dashboard",
    link: "/dashboard",
    requireConnect: true,
  },

  {
    icon: "wallet-fill",
    text: "Wallets",
    link: "/wallets",
    requireConnect: true,
  },
  {
    icon: "user-fill",
    text: "Profile",
    active: false,
    requireConnect: true,
    subMenu: [
      {
        text: "Details",
        link: "/profile/details",
      },
      {
        text: "Notifications",
        link: "/profile/notifications",
      },

      {
        text: "Banking Details",
        link: "/profile/banking",
      },
    ],
  },

  {
    heading: "Trade",
  },

  {
    icon: "users-fill",
    text: "Marketplace",
    active: false,
    subMenu: [
      {
        text: "Buy",
        link: "/marketplace/buy",
      },
      {
        text: "Sell",
        link: "/marketplace/sell",
      },
      {
        text: "Create",
        link: "/marketplace/create-offer",
      },
      // {
      // text: "My Offers",
      // link: "/marketplace/user-profile-regular",
      // requireConnect: true,
      // },
    ],
  },
  {
    icon: "repeat-fill",
    text: "Express",
    link: "/swap",
    requireConnect: true,
  },
  {
    icon: "list-fill",
    text: "History",
    link: "/history-payment",
    requireConnect: true,
  },
  {
    heading: "Earn",
  },
  {
    icon: "pie-fill",
    text: "Staking",
    active: "false",
    link: "/staking",
  },
  {
    icon: "user-list-fill",
    text: "Affiliates",
    link: "/governance",
  },

  {
    heading: "Support",
  },
  {
    icon: "help-fill",
    text: "FAQ",
    link: "/faq",
  },
];
export default menu;
