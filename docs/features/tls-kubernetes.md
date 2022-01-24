---
title: TLS for Kubernetes
sidebar_position: 8
---





<html lang="en" data-color-mode="auto" data-light-theme="light" data-dark-theme="dark">
  <head>
    <meta charset="utf-8"/>
    <link rel="dns-prefetch" href="https://github.githubassets.com"/>
    <link rel="dns-prefetch" href="https://avatars.githubusercontent.com"/>
    <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com"/>
    <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/"/>
    <link rel="preconnect" href="https://github.githubassets.com" crossorigin />
    <link rel="preconnect" href="https://avatars.githubusercontent.com"/>
    <link crossorigin="anonymous" media="all" integrity="sha512-dkuYFW+ra8yYSt342e5pJEeslPSjMcrMvNxlYZMyM/X+/WJHDPvoCuGq3LFojI7B0dQWwZNRiPMnbi9IfUgTaA==" rel="stylesheet" href="https://github.githubassets.com/assets/light-764b98156fab6bcc984addf8d9ee6924.css" />
    <link crossorigin="anonymous" media="all" integrity="sha512-UrAu23+eyncWvaQFwsLbgSKtmLb2aH1bcT4hJnnRdkaPuY1eu9bumt33FyHHFDX8hskTUNWNkIsMCz7FWQQHwA==" rel="stylesheet" href="https://github.githubassets.com/assets/dark-52b02edb7f9eca7716bda405c2c2db81.css" />
    <link data-color-theme="dark_dimmed" crossorigin="anonymous" media="all" integrity="sha512-kyu73YWtU8Fu2e7p+Hv094CRhaTvr8yy95vc1SQ2+MeWVWakGeIh/lv9yIFaYAb8J3oM6uBLGcn1kS6M1GxBCQ==" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_dimmed-932bbbdd85ad53c16ed9eee9f87bf4f7.css" />
    <link data-color-theme="dark_high_contrast" crossorigin="anonymous" media="all" integrity="sha512-jZSKF7Gx8T/AFthO0CUkWWpG5EBlIZb+tIYu8KgP/kizn7fpXEiXJcB73GTZ69wSVVSZ6Y1Cw286qP7pVZr0gg==" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_high_contrast-8d948a17b1b1f13fc016d84ed0252459.css" />
    <link data-color-theme="dark_colorblind" crossorigin="anonymous" media="all" integrity="sha512-E02WD8opZPpYu6LM9dlUSIHQgXtLmzi1KxMnaN/SA7k6ILsvpNJjpkBPU1sC98MitAOkCNIe6ozqY8+pHnrHZg==" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_colorblind-134d960fca2964fa58bba2ccf5d95448.css" />
    <link data-color-theme="light_colorblind" crossorigin="anonymous" media="all" integrity="sha512-VWdBPHZj3WCDwaO0N2W8yvDZt7TNZohRIYK4sjjSU56485rCWazxnLr4p3DU8eqn2+eSj3CYYpw4+DzmwHOwew==" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_colorblind-5567413c7663dd6083c1a3b43765bcca.css" />
    <link data-color-theme="light_high_contrast" crossorigin="anonymous" media="all" integrity="sha512-dw8LrBQMvo9HDd5lo2UEp/tvMVR6zJjrQkQTBVrhyaHDlL1p7UiQ9/xpqYxOz9s7s1Qh5Bjokuzu7NX0U5BeYA==" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_high_contrast-770f0bac140cbe8f470dde65a36504a7.css" />
    <link crossorigin="anonymous" media="all" integrity="sha512-JI4iu0GRJn8JWWjjFpgxE8twbc12j3AwRdPNfhhY1Uljw0IRWyLLaZ1KzRcbluo1g1lrchCk1/g5iqbnonk6aw==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-248e22bb4191267f095968e316983113.css" />
    <link crossorigin="anonymous" media="all" integrity="sha512-zJJOPtcC7jCDV5NwV7AUIO31GSlCTKWEq6tNauvVT1X9AqToxHTyl7DwXYS2Pj4OErqddMNTj31HjMiMO2OpqQ==" rel="stylesheet" href="https://github.githubassets.com/assets/behaviors-cc924e3ed702ee308357937057b01420.css" />
    <link crossorigin="anonymous" media="all" integrity="sha512-MCJFYfbQoT4EXC6aWx5Wghs8FC/jslHEeN2iWXphliccmede2dQlhIBTAUCBq9Yu5poltu4askungzvyCsycGg==" rel="stylesheet" href="https://github.githubassets.com/assets/tab-size-fix-30224561f6d0a13e045c2e9a5b1e5682.css" />
    <link crossorigin="anonymous" media="all" integrity="sha512-DGSUMb14CT/9zgJ7dsOU0H8WwwxQisPA3JfU28wAV5FJm+wsatvpoWPSB+YHkSyVJ5VzWrhH4cFcZp65quhUwA==" rel="stylesheet" href="https://github.githubassets.com/assets/github-0c649431bd78093ffdce027b76c394d0.css" />
    <script crossorigin="anonymous" defer="defer" integrity="sha512-xL/TCqX++9MMUrMlhro7FpcmPc1hJQ78V390q7dFTW3c/Uagp/4Py0XyOp2B2VNfyXXejIGaaPL69D4XMi6I3Q==" type="application/javascript" src="https://github.githubassets.com/assets/environment-c4bfd30a.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-fShHRup/esyktB8gUfk4UEDvGscgB1owt3auHE/N42BcBezls1MiNWmSv5Jy7mvRNvk3gIy+7mxrTHSfJgC1Pw==" type="application/javascript" src="https://github.githubassets.com/assets/chunk-frameworks-7d284746.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-EJrMWr2CjD94vCgVfSrOYzZ+HxC7+2x71ZjtMspWDIMT3AQqjKor9CRB20G/9FEeYygdlDK2jKflbH3rqK5g/w==" type="application/javascript" src="https://github.githubassets.com/assets/chunk-vendor-109acc5a.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-xa9BWMG08kQ8hAVw5vi7Do2WwBacA5OzG1jv50rc1rvAuklmUtf91Z2ftQ6PEgxjKZExLB6PnhlAKUtNzqjxOA==" type="application/javascript" src="https://github.githubassets.com/assets/behaviors-c5af4158.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-ODZJzCJpaOfusrIka5QVZQcPiO9LBGyrrMYjhhJWSLuCN5WbZ5xiEiiOPOKVu71dqygyRdB2TY7AKPA1J5hqdg==" type="application/javascript" data-module-id="./chunk-unveil.js" data-src="https://github.githubassets.com/assets/chunk-unveil-383649cc.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-emPgUbSwW9ezLCgRnTE7n4fbbfc/MqEEDHmnkmG61dTyjWKHTYKN4wN3OPS7SY0fwmSJ8mB5+gng2nZw4/HsUg==" type="application/javascript" data-module-id="./chunk-animate-on-scroll.js" data-src="https://github.githubassets.com/assets/chunk-animate-on-scroll-7a63e051.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-ocfEAp6AJvGh4otXKow+AVJ14ysircwHagMkRQ3hoQvuy/U9agyT1cYKYiSYph1VLNaI/aAXwVd2go1pb3DD8A==" type="application/javascript" data-module-id="./chunk-input-demux.js" data-src="https://github.githubassets.com/assets/chunk-input-demux-a1c7c402.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-NTOP4z09gIe7czS8+1FJsErk9HK0eHFvRb5rw3s66rpoCkbeWdAZzMYJtSpTianmnc/fM51GrXn4PcS5Eu+sVQ==" type="application/javascript" data-module-id="./chunk-ref-selector.js" data-src="https://github.githubassets.com/assets/chunk-ref-selector-35338fe3.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-cvCTxUSxDHar4H+/68RGbmZHBf6zuy8SBHwgZdR3tB5dxL8LQ/zZ3yl5UWikpK1iT2XX+UEm1NaJausI2bo0SA==" type="application/javascript" data-module-id="./chunk-filter-input.js" data-src="https://github.githubassets.com/assets/chunk-filter-input-72f093c5.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-ynV5nM8UuCr4KZ/msFeRxRL6LnG+XUKzIfh6LNIzQ21ecjLVPvm53ghTE54aIuSUaHJWHnsYg8FRzycZIcRHiA==" type="application/javascript" data-module-id="./chunk-edit.js" data-src="https://github.githubassets.com/assets/chunk-edit-ca75799c.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-WaNkRh/O7vaD+7UwOOU4FOtNV2Npa7wgcJ8c8U/9wVd2XUD1WxdS0soI/m7KeE03aR/PdvGymCR58atKBhxcBg==" type="application/javascript" data-module-id="./chunk-responsive-underlinenav.js" data-src="https://github.githubassets.com/assets/chunk-responsive-underlinenav-59a36446.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-gmw7obKL/JEHWPp6zWFh+ynbXUFOidj1DN2aPiTDwP8Gair0moVuDmA340LD84A29I3ZPak19CEiumG+oIiseg==" type="application/javascript" data-module-id="./chunk-tag-input.js" data-src="https://github.githubassets.com/assets/chunk-tag-input-826c3ba1.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-Ao9llFIlj54ApuKf2QLboXukbu2h7MHfMmtYHrrsVe1lprKNLiA0usVcRpvruKhfT5STDuWm/GGmyx8ox27hWQ==" type="application/javascript" data-module-id="./chunk-notification-list-focus.js" data-src="https://github.githubassets.com/assets/chunk-notification-list-focus-028f6594.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-SPWd3rzrxmU6xW6vy1JPWCd+3uWFWmnd0MVGpmw/TpHWUAdLWDqL8kWyC/sBIZJmda4mTtUO1DHJQzAXRSrC+g==" type="application/javascript" data-module-id="./chunk-cookies.js" data-src="https://github.githubassets.com/assets/chunk-cookies-48f59dde.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-hjey7b0+UFZG85cw5+e+8/fHY3YiTdErWMpFZNpvEATl87TyXDWIAeQpK+KYZgGojs9Df161zUjYHzoDK8qndA==" type="application/javascript" data-module-id="./chunk-async-export.js" data-src="https://github.githubassets.com/assets/chunk-async-export-8637b2ed.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-tw9SApiMkftVBYeb6/VGhEwGNw8tlyBhXc9RVXH4UbCD6u+48uuCMvXf3bxvBdOld0OoYg83SnD2mgJWhdaTiQ==" type="application/javascript" data-module-id="./chunk-premium-runners.js" data-src="https://github.githubassets.com/assets/chunk-premium-runners-b70f5202.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-D576CjzS9sbDqFBJdq0Y6+KVMHXkO6mLFO/GRL1NtoE8jgXjAvmdjoZ4nNMWyDwqbtBHspvupORzE9L+YoBLYQ==" type="application/javascript" data-module-id="./chunk-get-repo-element.js" data-src="https://github.githubassets.com/assets/chunk-get-repo-element-0f9efa0a.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-x8vIlhju5IkvMKun7jYW4CTzHCXPkqSucCHUUMSwOSfS9Hba5w93pDLkP2f6YVjWUBtyMb8+hL2NTlFWuaOJzg==" type="application/javascript" data-module-id="./chunk-prefetched-provider.js" data-src="https://github.githubassets.com/assets/chunk-prefetched-provider-c7cbc896.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-xhSAO0KtnFAlRqAK+mg8BPj/J334ccvnCmmjmBQBCgZcsoO9teHJSS6oAn3XOWYFsWPU2JehwG7S3OVEbLwdUg==" type="application/javascript" data-module-id="./chunk-color-modes.js" data-src="https://github.githubassets.com/assets/chunk-color-modes-c614803b.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-jitxouuFY6SUcDZV5W3jhadVEIfFBfCQZxfPV3kxNnsWEBzbxMJFp0ccLb7+OlBjSs1zU/MNtuOV6T9Ay7lx4w==" type="application/javascript" data-module-id="./chunk-copy.js" data-src="https://github.githubassets.com/assets/chunk-copy-8e2b71a2.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-gwuBCPcczyGD5IyVEn/uqJXvT07GaVMryQC+ZfDhViO9r2JaqeAc4ooM3cVSjqo4m3IK6Y+boPI8MSf4mLlAgQ==" type="application/javascript" data-module-id="./chunk-voting.js" data-src="https://github.githubassets.com/assets/chunk-voting-830b8108.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-HDsLJf6gAN+WDFaJneJwmIY82XkZKWqeX7tStBLRh1XM53K8vMV6JZvjq/UQXszaNVWxWcuYtgYTG6ZWo8+QSw==" type="application/javascript" data-module-id="./chunk-confetti.js" data-src="https://github.githubassets.com/assets/chunk-confetti-1c3b0b25.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-vAs99bZfAF+pQjzGYSEM/dzYwm4SIxUxrcjdLuatAV6WJu/kfw8+s/SO7In/gHFhCR08sl7a38vA+dDmYAYHyQ==" type="application/javascript" data-module-id="./chunk-codemirror.js" data-src="https://github.githubassets.com/assets/chunk-codemirror-bc0b3df5.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-Gr3ZcJt5t73JeBM3NwOEziKyDZ3HpHwzqZL/c1pgTUfo+6QC5f88XXRw/RT6X2diwqvaa3OVFh0oWsZ9ZxhtdQ==" type="application/javascript" data-module-id="./chunk-tip.js" data-src="https://github.githubassets.com/assets/chunk-tip-1abdd970.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-EdQvlnI4Pu5Q6K0HCvp+mi0Vw9ZuwaEuhbnCbmFKX+c0xwiUWY0L3n9P0F6doLhaHhfpvW3718+miL11WG4BeA==" type="application/javascript" data-module-id="./chunk-line.js" data-src="https://github.githubassets.com/assets/chunk-line-11d42f96.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-4zSHP2sQXPKoN9jFy8q2ThHsQNej8s4qhubSR4g0/2dTexAEnoTG+RbaffdIhmjfghGjpS/DlE0cdSTFEOcipQ==" type="application/javascript" data-module-id="./chunk-array.js" data-src="https://github.githubassets.com/assets/chunk-array-e334873f.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-g8fb6U7h9SkWgiK69nfNMn4aN5D2YBYPZUbCIuLpemWoOw8NOaZY8Z0hPq4RUVs4+bYdCFR6K719k8lwFeUijg==" type="application/javascript" data-module-id="./chunk-band.js" data-src="https://github.githubassets.com/assets/chunk-band-83c7dbe9.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-ts+QjRdJ8l4YeV4z8foKCE8+AXJ3uSCGpWPjcVyut5LRzvgdtDXLpy1LYSyBpy7E0PlkRswBVgw1Va/EQ7d5lA==" type="application/javascript" data-module-id="./chunk-branch-from-issue-button.js" data-src="https://github.githubassets.com/assets/chunk-branch-from-issue-button-b6cf908d.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-4GJz2wyWwjq7P4hyx3qSkjvnTO7RG5cWvnePVXPB+Oji6MBVugAdl7kCTKbpX8+Ae2ONvGJwFzSc9A7m1pqzXw==" type="application/javascript" data-module-id="./chunk-toast.js" data-src="https://github.githubassets.com/assets/chunk-toast-e06273db.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-miaiZ1xkDsWBUsURHOmeYtbgVKQGnm1octCo/lDXUmPzDyjtubnHULRVw1AK+sttwdwyB0+LOyhIVAWCNSGx+A==" type="application/javascript" data-module-id="./chunk-delayed-loading-element.js" data-src="https://github.githubassets.com/assets/chunk-delayed-loading-element-9a26a267.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-GD25CNhMGDMzEmeFhUT0FILBupAkx5/CHohnYXOP1togy40O0iu/lASaSp3gV8ue0nwscalJVQqR5gKDRHHDVg==" type="application/javascript" data-module-id="./chunk-three.module.js" data-src="https://github.githubassets.com/assets/chunk-three.module-183db908.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-qwKkUOCe9NRy5gko6rOyhXg/96Ck+WNFqoHulZlxARmPG6viW1JmqVat5FS9QYB9aoCeyYY7vfrllz5+/JSieg==" type="application/javascript" data-module-id="./chunk-invitations.js" data-src="https://github.githubassets.com/assets/chunk-invitations-ab02a450.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-vFR+IqThljOLrAWmjhOL/kiQrjgZZg95uPovX0J7kRH5p7Y049LDRZaXLMDijfeqqk71d3MMn9XP5bUcH+lB9w==" type="application/javascript" data-module-id="./chunk-profile.js" data-src="https://github.githubassets.com/assets/chunk-profile-bc547e22.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-W3TFrSn3Iqu38aVxxYxFiNGzaVmLXtGfwRDVRH1RwRvqPVerX1fjQPEYag+HqAoWaGy5ssVFp42oyOIV93afBw==" type="application/javascript" data-module-id="./chunk-overview.js" data-src="https://github.githubassets.com/assets/chunk-overview-5b74c5ad.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-pTTrav4l7gbsAu4I8D/EeswJmvjNoSDQG+m8IxXwFHEZ1guasobEmCNB3H5gy9brild3bKp5LqpoPzwx631/rA==" type="application/javascript" data-module-id="./chunk-advanced.js" data-src="https://github.githubassets.com/assets/chunk-advanced-a534eb6a.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-vaGnAx5Fp/lV6x+tWNtSKS8H0hTaiXw2b4N16r0CYjAQ6Gcjl1BOWqWgmPPisyYO4drrI8Qz9rWJCWYTuOchjw==" type="application/javascript" data-module-id="./chunk-runner-groups.js" data-src="https://github.githubassets.com/assets/chunk-runner-groups-bda1a703.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-5H5N/3G/20nmVKntphXb9z0H9q3URFDmHSccLhFkMSA8ILAA9mYlRKCWAWoDcl/W437jtGw1tIxjWStfInvidw==" type="application/javascript" data-module-id="./chunk-profile-pins-element.js" data-src="https://github.githubassets.com/assets/chunk-profile-pins-element-e47e4dff.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-6WJL+zyYirKxwD8MNBenuxbMKvCeskXBrXISNlqhV3kltmI8kiSjUX0nDQM3fXeSakcll12sYS8Pli1GFPtG9Q==" type="application/javascript" data-module-id="./chunk-emoji-picker-element.js" data-src="https://github.githubassets.com/assets/chunk-emoji-picker-element-e9624bfb.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-EvJ2Fip59DXgARNuwTWgjdVqoCjhXQL73SP9yexijlWStKq92sfbKeGK5R4wIP0QOr39WsnW/Kaw3Wpl1QPfog==" type="application/javascript" data-module-id="./chunk-edit-hook-secret-element.js" data-src="https://github.githubassets.com/assets/chunk-edit-hook-secret-element-12f27616.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-91JzWtpBUoC7Z4dQpeXRegjwCMooGPFtg/vXxaIGVTxguoOcI/hEdyM7otQGRNQmMencK71thI0oGt11Wgfrww==" type="application/javascript" data-module-id="./chunk-insights-query.js" data-src="https://github.githubassets.com/assets/chunk-insights-query-f752735a.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-A4+sPduE2X0cc/19SihtArg8rOMkWCEKVPijHL3aIEuIRZTPi2ANE9Tem3m7omxDllmvPRqwCxL/snQqYRFslA==" type="application/javascript" data-module-id="./chunk-remote-clipboard-copy.js" data-src="https://github.githubassets.com/assets/chunk-remote-clipboard-copy-038fac3d.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-eO/r0W5ywI2kxVkcH8yquw3n5Gh+cA8lVOgxd+ecgJYU81FB4Q5FqFxgHhx1omigPwexB4ltwXBMDhSeW6qNeQ==" type="application/javascript" data-module-id="./chunk-series-table.js" data-src="https://github.githubassets.com/assets/chunk-series-table-78efebd1.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-eCSMVL1aAfhWSme4/3seObqN3HNdkxWVKaAX5bmZmxIXZdv0ixnuFJeESYdLeMED/wQETtQ971A03mLF3ZX8eQ==" type="application/javascript" data-module-id="./chunk-line-chart.js" data-src="https://github.githubassets.com/assets/chunk-line-chart-78248c54.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-rZhcZvsxbGBxibYeNv4aHYZkgZzW6xnRcAqmuOCbq/ehJgr75pxgiV7HrGrYrX9HNmyH8T+90HC9WSBZNM4L3g==" type="application/javascript" data-module-id="./chunk-bar-chart.js" data-src="https://github.githubassets.com/assets/chunk-bar-chart-ad985c66.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-/QP5yDdYoor56F2+SyPr/8a9FtvCZnnGP0d+lSAHQR5n+xYjaiY6LjJGB/x1cevAH8r4XY/axNN9fRWIfbwAcA==" type="application/javascript" data-module-id="./chunk-stacked-area-chart.js" data-src="https://github.githubassets.com/assets/chunk-stacked-area-chart-fd03f9c8.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-vpoUvguAAa407MM8rCOkmVR8haIGkvj5iav0VFOnIQc0cGwu+pm7QdqhY2HMB5WGdFC0zJgLfVSY+dgr5rKKLg==" type="application/javascript" data-module-id="./chunk-presence-avatars.js" data-src="https://github.githubassets.com/assets/chunk-presence-avatars-be9a14be.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-TpHTIXhA/2bI21CVmFL1oS3dv+8zveJVZLOVVAZwXNAAI94Hy70L9vT3Q1Vvkyu4Z2gi2iFdy1a53pfYlEDgnQ==" type="application/javascript" data-module-id="./chunk-pulse-authors-graph-element.js" data-src="https://github.githubassets.com/assets/chunk-pulse-authors-graph-element-4e91d321.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-aNAcFMlIdG1ocY5LnZylnN/6KXiJxyPvKg7y1Jnai732wdnrjXazcvNiQkRnj5FY8WP6JRa3K4doCReA4nhj7w==" type="application/javascript" data-module-id="./chunk-stacks-input-config-view.js" data-src="https://github.githubassets.com/assets/chunk-stacks-input-config-view-68d01c14.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-bbW4T9/r8Np2kfViflgQnNiRYxuqR7rLgtTFUkdFLvok75aQSUlYsD5wXqKPpttPfvKicBAgztCOTkpNMPSQLA==" type="application/javascript" data-module-id="./chunk-community-contributions.js" data-src="https://github.githubassets.com/assets/chunk-community-contributions-6db5b84f.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-Kpqa6sgByBKUyzDDVVdWoGttf2SAPsHt7fGHAS7gB62Ve7KemFKz3+gvVJsvBsrErVm/eQQYT/U+kDHbnr3tFA==" type="application/javascript" data-module-id="./chunk-discussion-page-views.js" data-src="https://github.githubassets.com/assets/chunk-discussion-page-views-2a9a9aea.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-+EMrCbglrI+ow8JMBlikKWUdEVlJjllBRZFnYWVfaRXbBO1eIGSa6LV6qBRvRPPVvS+sw1SiOhBHQhGy053CJA==" type="application/javascript" data-module-id="./chunk-discussions-daily-contributors.js" data-src="https://github.githubassets.com/assets/chunk-discussions-daily-contributors-f8432b09.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-JFlBSiDVD4MXke66qKnk36YUTW3leIZNOH2wqYmOKuxS7BsWCRmcrYrUU5plAKfsSDym1Lqf2bwpEOuVY0DCbw==" type="application/javascript" data-module-id="./chunk-discussions-new-contributors.js" data-src="https://github.githubassets.com/assets/chunk-discussions-new-contributors-2459414a.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-TLQillrC8dagau7Smjy8GmWx3jhSvBCnkTPMStBL7tvLAaowBuGx38ICPFBdM+3ammiRlfXAaEe5OdpimWnnmQ==" type="application/javascript" data-module-id="./chunk-tweetsodium.js" data-src="https://github.githubassets.com/assets/chunk-tweetsodium-4cb42296.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-n/DsfzdSaU1bKi3ivZXXs7iMfsOrJlAA79kXzcW7GRKzae6PKBcWfvADd06iCozz06qaJWUMlbbEzzOK2jh50g==" type="application/javascript" data-module-id="./chunk-jump-to.js" data-src="https://github.githubassets.com/assets/chunk-jump-to-9ff0ec7f.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-XDr8QWIAI1E/liTdL7vUrMoqB9hL6z1+ab25o0pGeJmUZg6XiRmtxB6odVW9Ak3q/e5BJGiZtmeHKS3Fo/AA6w==" type="application/javascript" data-module-id="./chunk-user-status-submit.js" data-src="https://github.githubassets.com/assets/chunk-user-status-submit-5c3afc41.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-L2jxBDS9QAN9O1qn7LqMcs0YJn/gF6xW73zSbWPRlVCEnG05dexaoJWkAG6RqALTnXLsj2GTUKnba6DATR828g==" type="application/javascript" data-module-id="./chunk-launch-code-element.js" data-src="https://github.githubassets.com/assets/chunk-launch-code-element-2f68f104.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-cvjyIYhR2ZkuFAXHYZSjPTc5wXYOdISgqbXw69CXpDXdxffXmXuzjCcGJNVk3mDNYsVH4Q9sb2UMNPFrNxxRUQ==" type="application/javascript" data-module-id="./chunk-metric-selection-element.js" data-src="https://github.githubassets.com/assets/chunk-metric-selection-element-72f8f221.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-/2Oeznu4Qh8QuYb4OvlxCrx/tIfHWnJrhjNFW7MOl0nRMSVUPowbUJ4F+HpdkepXw/OZkF22CN7CN1dRv8bJmQ==" type="application/javascript" data-module-id="./chunk-severity-calculator-element.js" data-src="https://github.githubassets.com/assets/chunk-severity-calculator-element-ff639ece.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-qyKiiHoQgmZhPRV7QexCydpjeAl9ryNe0g8r+9eaXogC2a6R4iOXRVZvJLv0rDwACJHhba6t/FFm67Q/5vXypA==" type="application/javascript" data-module-id="./chunk-command-palette-page-element.js" data-src="https://github.githubassets.com/assets/chunk-command-palette-page-element-ab22a288.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-7tuVhi/5l3tU55d+BrN6T/sfSnp/K+AOJxNIaiqjsSndTpU/V/z7+nBgEbCtZqiJoTv0DAQvYiVYbT0RsYiYPg==" type="application/javascript" data-module-id="./chunk-command-palette-page-stack-element.js" data-src="https://github.githubassets.com/assets/chunk-command-palette-page-stack-element-eedb9586.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-4Dvmms6NEhoUtRIOVySQyuxo4pc+5+AUsmnzfsDOXFRwjBHepSwTGqsbO+hHpBzrtYIjqIjaXA+6cDjyJy+HqA==" type="application/javascript" data-module-id="./chunk-readme-toc-element.js" data-src="https://github.githubassets.com/assets/chunk-readme-toc-element-e03be69a.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-aGaoVKNIqNkSpelOnfn0UCDbQLW2XBUVVkOOgVZXFNDfgJgFQNMXALc0964DwIi9kYrkYQIShePOSMFo20hHkw==" type="application/javascript" data-module-id="./chunk-feature-callout-element.js" data-src="https://github.githubassets.com/assets/chunk-feature-callout-element-6866a854.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-qNDdxgftImxudCMmfMmcxMBXvelYxSupLrG9ehwER1lFAGR6AND7oYQV5AwDd6+ebC75Pag2r8vRkMpZMuicPA==" type="application/javascript" data-module-id="./chunk-codespaces-policy-form-element.js" data-src="https://github.githubassets.com/assets/chunk-codespaces-policy-form-element-a8d0ddc6.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-+aCVCMGHjL+zXInuzIJ4VEykZcUNHS0rSsd1wj/21i2qS3C3J3ErL/8hYR8E+j9+qIRzpyJyKTYlCgajVbFL3g==" type="application/javascript" data-module-id="./chunk-action-list-element.js" data-src="https://github.githubassets.com/assets/chunk-action-list-element-f9a09508.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-VgXsf/QtnIz5B5ngpQiPBYgV/RiukslwG4v/s5UnI65K7zovAljy0GmrHxC/V4duAZr+gHBZR3m+DVPYWANq9A==" type="application/javascript" data-module-id="./chunk-memex-project-picker-element.js" data-src="https://github.githubassets.com/assets/chunk-memex-project-picker-element-5605ec7f.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-ooYcnNLBDnMePhMvdQEQiItFZowYg4gwklGZGCrAWPW1LCxePPkzB1kr8U3Bay0NPKYEDmICeXBqqDPd8EDmqA==" type="application/javascript" data-module-id="./chunk-project-picker-element.js" data-src="https://github.githubassets.com/assets/chunk-project-picker-element-a2861c9c.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-YYzSijUU1oA10iMuvfzSHMK7vrQzu8aiLpIfD13kpcq2KVMqdOrIASINY5sBUNPNFZbSLKmBfTcEXEKVcQZHfQ==" type="application/javascript" data-module-id="./chunk-sortable-behavior.js" data-src="https://github.githubassets.com/assets/chunk-sortable-behavior-618cd28a.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-6JUQHgkTqBaCCdDugMcO4fQ8YxUHk+m6rwVp2Wxa4FMVz6BbBMPOzGluT4wBq8NTUcFv6DnXSOnt5e85jNgpGg==" type="application/javascript" data-module-id="./chunk-drag-drop.js" data-src="https://github.githubassets.com/assets/chunk-drag-drop-e895101e.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-3W46fSBMvt8hnBUTSCHAAPbt4DHI5VXdI2qT0YMyv8sco5NvjmGHp2M0OlTNxepPEOb8LCplxxzCwrgMubsIug==" type="application/javascript" data-module-id="./chunk-contributions-spider-graph.js" data-src="https://github.githubassets.com/assets/chunk-contributions-spider-graph-dd6e3a7d.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-VQRofBwNZhBa4vBuw0P5bjjlVtO2R+l1M0TOfMZHX1bB7xy//CFwqmyaL24rLfgLx8sahKZ7eEw1o+nkFoUzNA==" type="application/javascript" data-module-id="./chunk-webgl-warp.js" data-src="https://github.githubassets.com/assets/chunk-webgl-warp-5504687c.js"></script>    
    <script crossorigin="anonymous" defer="defer" integrity="sha512-BJqv3ogFAmgB/cS8ozwg7TYR1N8edObpg4+nDyb+tos+hcoeR0Yx9jeG/PzXFy2Nod4Kr9eKqzEe3yiCjGGytg==" type="application/javascript" src="https://github.githubassets.com/assets/repositories-049aafde.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-ZZ/HJQDZ5CXnjvOI1QJ9ZwPEqp5us5aY8iY/NsX/NoWfV41bw4p09gHYClgOn4K/4DQPeFMU4u6peLMWPBs9uQ==" type="application/javascript" src="https://github.githubassets.com/assets/diffs-659fc725.js"></script>
    <meta name="viewport" content="width=device-width"/>
    <title>redpanda/tls-kubernetes.md at dev · vectorizedio/redpanda · GitHub</title>
    <meta name="description" content="Redpanda is the real-time engine for modern apps.  Kafka API Compatible; 10x faster 🚀    See more at vectorized.io/redpanda - redpanda/tls-kubernetes.md at dev · vectorizedio/redpanda"/>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub"/>
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub"/>
    <meta property="fb:app_id" content="1401488693436528"/>
    <meta name="apple-itunes-app" content="app-id=1477376905" />
    <meta name="twitter:image:src" content="https://repository-images.githubusercontent.com/309512982/5f774c00-279b-11eb-815d-c8ee10fbb94f" />
    <meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="redpanda/tls-kubernetes.md at dev · vectorizedio/redpanda" />
    <meta name="twitter:description" content="Redpanda is the real-time engine for modern apps.  Kafka API Compatible; 10x faster 🚀    See more at vectorized.io/redpanda - redpanda/tls-kubernetes.md at dev · vectorizedio/redpanda" />
    <meta property="og:image" content="https://repository-images.githubusercontent.com/309512982/5f774c00-279b-11eb-815d-c8ee10fbb94f" />
    <meta property="og:image:alt" content="Redpanda is the real-time engine for modern apps.  Kafka API Compatible; 10x faster 🚀    See more at vectorized.io/redpanda - redpanda/tls-kubernetes.md at dev · vectorizedio/redpanda" />
    <meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" />
    <meta property="og:title" content="redpanda/tls-kubernetes.md at dev · vectorizedio/redpanda" />
    <meta property="og:url" content="https://github.com/vectorizedio/redpanda" />
    <meta property="og:description" content="Redpanda is the real-time engine for modern apps.  Kafka API Compatible; 10x faster 🚀    See more at vectorized.io/redpanda - redpanda/tls-kubernetes.md at dev · vectorizedio/redpanda" />
    <link rel="assets" href="https://github.githubassets.com/"/>
    <meta name="request-id" content="E373:09C2:A7BA98:D30F66:61E86A14" data-pjax-transient="true"/>
    <meta name="html-safe-nonce" content="ebbdf41dac93c6ba994dec92e486e3d669287dbe1b73a92f40f3de41d81e5be7" data-pjax-transient="true"/>
    <meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS92ZWN0b3JpemVkaW8vcmVkcGFuZGEvdHJlZS9kZXYvZG9jcy93d3ciLCJyZXF1ZXN0X2lkIjoiRTM3MzowOUMyOkE3QkE5ODpEMzBGNjY6NjFFODZBMTQiLCJ2aXNpdG9yX2lkIjoiNzgyMjQ1MDI1MzExMjA0NDA0NSIsInJlZ2lvbl9lZGdlIjoiYnJhemlsc291dGgiLCJyZWdpb25fcmVuZGVyIjoiYnJhemlsc291dGgifQ==" data-pjax-transient="true"/>
    <meta name="visitor-hmac" content="282a202ce97c0b48a87a757038c3701c1e0b1621d975197995f8d93e51e7d45d" data-pjax-transient="true"/>
    <meta name="hovercard-subject-tag" content="repository:309512982" data-pjax-transient/>
    <meta name="github-keyboard-shortcuts" content="repository,source-code" data-pjax-transient="true" />
    <meta name="selected-link" value="repo_source" data-pjax-transient/>
    <meta name="google-site-verification" content="c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY"/>
    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU"/>
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA"/>
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc"/>
    <meta name="octolytics-url" content="https://collector.githubapp.com/github/collect" />
    <meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />
    <meta name="optimizely-datafile" content="{&quot;version&quot;: &quot;4&quot;, &quot;rollouts&quot;: [], &quot;typedAudiences&quot;: [], &quot;anonymizeIP&quot;: true, &quot;projectId&quot;: &quot;16737760170&quot;, &quot;variables&quot;: [], &quot;featureFlags&quot;: [], &quot;experiments&quot;: [{&quot;status&quot;: &quot;Running&quot;, &quot;audienceIds&quot;: [], &quot;variations&quot;: [{&quot;variables&quot;: [], &quot;id&quot;: &quot;20438636352&quot;, &quot;key&quot;: &quot;control&quot;}, {&quot;variables&quot;: [], &quot;id&quot;: &quot;20484957397&quot;, &quot;key&quot;: &quot;treatment&quot;}], &quot;id&quot;: &quot;20479227424&quot;, &quot;key&quot;: &quot;growth_ghec_onboarding_experience&quot;, &quot;layerId&quot;: &quot;20467848595&quot;, &quot;trafficAllocation&quot;: [{&quot;entityId&quot;: &quot;20484957397&quot;, &quot;endOfRange&quot;: 1000}, {&quot;entityId&quot;: &quot;20484957397&quot;, &quot;endOfRange&quot;: 3000}, {&quot;entityId&quot;: &quot;20484957397&quot;, &quot;endOfRange&quot;: 5000}, {&quot;entityId&quot;: &quot;20484957397&quot;, &quot;endOfRange&quot;: 6000}, {&quot;entityId&quot;: &quot;20484957397&quot;, &quot;endOfRange&quot;: 8000}, {&quot;entityId&quot;: &quot;20484957397&quot;, &quot;endOfRange&quot;: 10000}], &quot;forcedVariations&quot;: {&quot;85e2238ce2b9074907d7a3d91d6feeae&quot;: &quot;control&quot;}}, {&quot;status&quot;: &quot;Running&quot;, &quot;audienceIds&quot;: [], &quot;variations&quot;: [{&quot;variables&quot;: [], &quot;id&quot;: &quot;20667381018&quot;, &quot;key&quot;: &quot;control&quot;}, {&quot;variables&quot;: [], &quot;id&quot;: &quot;20680930759&quot;, &quot;key&quot;: &quot;treatment&quot;}], &quot;id&quot;: &quot;20652570897&quot;, &quot;key&quot;: &quot;project_genesis&quot;, &quot;layerId&quot;: &quot;20672300363&quot;, &quot;trafficAllocation&quot;: [{&quot;entityId&quot;: &quot;20667381018&quot;, &quot;endOfRange&quot;: 5000}, {&quot;entityId&quot;: &quot;20680930759&quot;, &quot;endOfRange&quot;: 10000}], &quot;forcedVariations&quot;: {&quot;83356e17066d336d1803024138ecb683&quot;: &quot;treatment&quot;, &quot;18e31c8a9b2271332466133162a4aa0d&quot;: &quot;treatment&quot;, &quot;10f8ab3fbc5ebe989a36a05f79d48f32&quot;: &quot;treatment&quot;, &quot;1686089f6d540cd2deeaec60ee43ecf7&quot;: &quot;treatment&quot;}}, {&quot;status&quot;: &quot;Running&quot;, &quot;audienceIds&quot;: [], &quot;variations&quot;: [{&quot;variables&quot;: [], &quot;id&quot;: &quot;20898546114&quot;, &quot;key&quot;: &quot;control&quot;}, {&quot;variables&quot;: [], &quot;id&quot;: &quot;20923036705&quot;, &quot;key&quot;: &quot;treatment_a&quot;}, {&quot;variables&quot;: [], &quot;id&quot;: &quot;20965581308&quot;, &quot;key&quot;: &quot;treatment_b&quot;}], &quot;id&quot;: &quot;20902325119&quot;, &quot;key&quot;: &quot;contact_sales_page_optimizations&quot;, &quot;layerId&quot;: &quot;20969031091&quot;, &quot;trafficAllocation&quot;: [{&quot;entityId&quot;: &quot;20965581308&quot;, &quot;endOfRange&quot;: 3330}, {&quot;entityId&quot;: &quot;20898546114&quot;, &quot;endOfRange&quot;: 5000}, {&quot;entityId&quot;: &quot;20898546114&quot;, &quot;endOfRange&quot;: 6670}, {&quot;entityId&quot;: &quot;20923036705&quot;, &quot;endOfRange&quot;: 10000}], &quot;forcedVariations&quot;: {}}], &quot;audiences&quot;: [{&quot;conditions&quot;: &quot;[\&quot;or\&quot;, {\&quot;match\&quot;: \&quot;exact\&quot;, \&quot;name\&quot;: \&quot;$opt_dummy_attribute\&quot;, \&quot;type\&quot;: \&quot;custom_attribute\&quot;, \&quot;value\&quot;: \&quot;$opt_dummy_value\&quot;}]&quot;, &quot;id&quot;: &quot;$opt_dummy_audience&quot;, &quot;name&quot;: &quot;Optimizely-Generated Audience for Backwards Compatibility&quot;}], &quot;groups&quot;: [], &quot;sdkKey&quot;: &quot;WTc6awnGuYDdG98CYRban&quot;, &quot;environmentKey&quot;: &quot;production&quot;, &quot;attributes&quot;: [{&quot;id&quot;: &quot;16822470375&quot;, &quot;key&quot;: &quot;user_id&quot;}, {&quot;id&quot;: &quot;17143601254&quot;, &quot;key&quot;: &quot;spammy&quot;}, {&quot;id&quot;: &quot;18175660309&quot;, &quot;key&quot;: &quot;organization_plan&quot;}, {&quot;id&quot;: &quot;18813001570&quot;, &quot;key&quot;: &quot;is_logged_in&quot;}, {&quot;id&quot;: &quot;19073851829&quot;, &quot;key&quot;: &quot;geo&quot;}, {&quot;id&quot;: &quot;20175462351&quot;, &quot;key&quot;: &quot;requestedCurrency&quot;}, {&quot;id&quot;: &quot;20785470195&quot;, &quot;key&quot;: &quot;country_code&quot;}], &quot;botFiltering&quot;: false, &quot;accountId&quot;: &quot;16737760170&quot;, &quot;events&quot;: [{&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;17911811441&quot;, &quot;key&quot;: &quot;hydro_click.dashboard.teacher_toolbox_cta&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18124116703&quot;, &quot;key&quot;: &quot;submit.organizations.complete_sign_up&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18145892387&quot;, &quot;key&quot;: &quot;no_metric.tracked_outside_of_optimizely&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18178755568&quot;, &quot;key&quot;: &quot;click.org_onboarding_checklist.add_repo&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18180553241&quot;, &quot;key&quot;: &quot;submit.repository_imports.create&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18186103728&quot;, &quot;key&quot;: &quot;click.help.learn_more_about_repository_creation&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18188530140&quot;, &quot;key&quot;: &quot;test_event.do_not_use_in_production&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18191963644&quot;, &quot;key&quot;: &quot;click.empty_org_repo_cta.transfer_repository&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18195612788&quot;, &quot;key&quot;: &quot;click.empty_org_repo_cta.import_repository&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18210945499&quot;, &quot;key&quot;: &quot;click.org_onboarding_checklist.invite_members&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18211063248&quot;, &quot;key&quot;: &quot;click.empty_org_repo_cta.create_repository&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18215721889&quot;, &quot;key&quot;: &quot;click.org_onboarding_checklist.update_profile&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18224360785&quot;, &quot;key&quot;: &quot;click.org_onboarding_checklist.dismiss&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18234832286&quot;, &quot;key&quot;: &quot;submit.organization_activation.complete&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18252392383&quot;, &quot;key&quot;: &quot;submit.org_repository.create&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18257551537&quot;, &quot;key&quot;: &quot;submit.org_member_invitation.create&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18259522260&quot;, &quot;key&quot;: &quot;submit.organization_profile.update&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18564603625&quot;, &quot;key&quot;: &quot;view.classroom_select_organization&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18568612016&quot;, &quot;key&quot;: &quot;click.classroom_sign_in_click&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18572592540&quot;, &quot;key&quot;: &quot;view.classroom_name&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18574203855&quot;, &quot;key&quot;: &quot;click.classroom_create_organization&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18582053415&quot;, &quot;key&quot;: &quot;click.classroom_select_organization&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18589463420&quot;, &quot;key&quot;: &quot;click.classroom_create_classroom&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18591323364&quot;, &quot;key&quot;: &quot;click.classroom_create_first_classroom&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18591652321&quot;, &quot;key&quot;: &quot;click.classroom_grant_access&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18607131425&quot;, &quot;key&quot;: &quot;view.classroom_creation&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;18831680583&quot;, &quot;key&quot;: &quot;upgrade_account_plan&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19064064515&quot;, &quot;key&quot;: &quot;click.signup&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19075373687&quot;, &quot;key&quot;: &quot;click.view_account_billing_page&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19077355841&quot;, &quot;key&quot;: &quot;click.dismiss_signup_prompt&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19079713938&quot;, &quot;key&quot;: &quot;click.contact_sales&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19120963070&quot;, &quot;key&quot;: &quot;click.compare_account_plans&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19151690317&quot;, &quot;key&quot;: &quot;click.upgrade_account_cta&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19424193129&quot;, &quot;key&quot;: &quot;click.open_account_switcher&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19520330825&quot;, &quot;key&quot;: &quot;click.visit_account_profile&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19540970635&quot;, &quot;key&quot;: &quot;click.switch_account_context&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19730198868&quot;, &quot;key&quot;: &quot;submit.homepage_signup&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19820830627&quot;, &quot;key&quot;: &quot;click.homepage_signup&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19988571001&quot;, &quot;key&quot;: &quot;click.create_enterprise_trial&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20036538294&quot;, &quot;key&quot;: &quot;click.create_organization_team&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20040653299&quot;, &quot;key&quot;: &quot;click.input_enterprise_trial_form&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20062030003&quot;, &quot;key&quot;: &quot;click.continue_with_team&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20068947153&quot;, &quot;key&quot;: &quot;click.create_organization_free&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20086636658&quot;, &quot;key&quot;: &quot;click.signup_continue.username&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20091648988&quot;, &quot;key&quot;: &quot;click.signup_continue.create_account&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20103637615&quot;, &quot;key&quot;: &quot;click.signup_continue.email&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20111574253&quot;, &quot;key&quot;: &quot;click.signup_continue.password&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20120044111&quot;, &quot;key&quot;: &quot;view.pricing_page&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20152062109&quot;, &quot;key&quot;: &quot;submit.create_account&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20165800992&quot;, &quot;key&quot;: &quot;submit.upgrade_payment_form&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20171520319&quot;, &quot;key&quot;: &quot;submit.create_organization&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20222645674&quot;, &quot;key&quot;: &quot;click.recommended_plan_in_signup.discuss_your_needs&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20227443657&quot;, &quot;key&quot;: &quot;submit.verify_primary_user_email&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20234607160&quot;, &quot;key&quot;: &quot;click.recommended_plan_in_signup.try_enterprise&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20238175784&quot;, &quot;key&quot;: &quot;click.recommended_plan_in_signup.team&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20239847212&quot;, &quot;key&quot;: &quot;click.recommended_plan_in_signup.continue_free&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20251097193&quot;, &quot;key&quot;: &quot;recommended_plan&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20438619534&quot;, &quot;key&quot;: &quot;click.pricing_calculator.1_member&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20456699683&quot;, &quot;key&quot;: &quot;click.pricing_calculator.15_members&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20467868331&quot;, &quot;key&quot;: &quot;click.pricing_calculator.10_members&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20476267432&quot;, &quot;key&quot;: &quot;click.trial_days_remaining&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20476357660&quot;, &quot;key&quot;: &quot;click.discover_feature&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20479287901&quot;, &quot;key&quot;: &quot;click.pricing_calculator.custom_members&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20481107083&quot;, &quot;key&quot;: &quot;click.recommended_plan_in_signup.apply_teacher_benefits&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20483089392&quot;, &quot;key&quot;: &quot;click.pricing_calculator.5_members&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;, &quot;20652570897&quot;], &quot;id&quot;: &quot;20484283944&quot;, &quot;key&quot;: &quot;click.onboarding_task&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20484996281&quot;, &quot;key&quot;: &quot;click.recommended_plan_in_signup.apply_student_benefits&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20486713726&quot;, &quot;key&quot;: &quot;click.onboarding_task_breadcrumb&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20490791319&quot;, &quot;key&quot;: &quot;click.upgrade_to_enterprise&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20491786766&quot;, &quot;key&quot;: &quot;click.talk_to_us&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20494144087&quot;, &quot;key&quot;: &quot;click.dismiss_enterprise_trial&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;, &quot;20652570897&quot;], &quot;id&quot;: &quot;20499722759&quot;, &quot;key&quot;: &quot;completed_all_tasks&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;, &quot;20652570897&quot;], &quot;id&quot;: &quot;20500710104&quot;, &quot;key&quot;: &quot;completed_onboarding_tasks&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20513160672&quot;, &quot;key&quot;: &quot;click.read_doc&quot;}, {&quot;experimentIds&quot;: [&quot;20652570897&quot;], &quot;id&quot;: &quot;20516196762&quot;, &quot;key&quot;: &quot;actions_enabled&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20518980986&quot;, &quot;key&quot;: &quot;click.dismiss_trial_banner&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20535446721&quot;, &quot;key&quot;: &quot;click.issue_actions_prompt.dismiss_prompt&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20557002247&quot;, &quot;key&quot;: &quot;click.issue_actions_prompt.setup_workflow&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20595070227&quot;, &quot;key&quot;: &quot;click.pull_request_setup_workflow&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20626600314&quot;, &quot;key&quot;: &quot;click.seats_input&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20642310305&quot;, &quot;key&quot;: &quot;click.decrease_seats_number&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20662990045&quot;, &quot;key&quot;: &quot;click.increase_seats_number&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20679620969&quot;, &quot;key&quot;: &quot;click.public_product_roadmap&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20761240940&quot;, &quot;key&quot;: &quot;click.dismiss_survey_banner&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20767210721&quot;, &quot;key&quot;: &quot;click.take_survey&quot;}, {&quot;experimentIds&quot;: [&quot;20652570897&quot;], &quot;id&quot;: &quot;20795281201&quot;, &quot;key&quot;: &quot;click.archive_list&quot;}, {&quot;experimentIds&quot;: [&quot;20902325119&quot;], &quot;id&quot;: &quot;20966790249&quot;, &quot;key&quot;: &quot;contact_sales.submit&quot;}, {&quot;experimentIds&quot;: [&quot;20902325119&quot;], &quot;id&quot;: &quot;20996500333&quot;, &quot;key&quot;: &quot;contact_sales.existing_customer&quot;}, {&quot;experimentIds&quot;: [&quot;20902325119&quot;], &quot;id&quot;: &quot;20996890162&quot;, &quot;key&quot;: &quot;contact_sales.blank_message_field&quot;}, {&quot;experimentIds&quot;: [&quot;20902325119&quot;], &quot;id&quot;: &quot;21000470317&quot;, &quot;key&quot;: &quot;contact_sales.personal_email&quot;}, {&quot;experimentIds&quot;: [&quot;20902325119&quot;], &quot;id&quot;: &quot;21002790172&quot;, &quot;key&quot;: &quot;contact_sales.blank_phone_field&quot;}], &quot;revision&quot;: &quot;1039&quot;}" /> 
   <script crossorigin="anonymous" defer="defer" integrity="sha512-ftehb12i+5yPbdWYQA9undOSmChRnlmPOu8Y8aHeQMSru96M+RhhcvdWb79Cc80MBCaPkqhyJ+2Lmnys5X5gKQ==" type="application/javascript" src="https://github.githubassets.com/assets/optimizely-7ed7a16f.js"></script>
   <meta name="hostname" content="github.com"/>
   <meta name="user-login" content=""/>
   <meta name="expected-hostname" content="github.com"/>
   <meta name="enabled-features" content="MARKETPLACE_PENDING_INSTALLATIONS"/>
   <meta http-equiv="x-pjax-version" content="18c4ad7bc83a3115d6d4ee7a7d17f70760e10719dcfad713a8897ae1ab860487"/>
   <meta http-equiv="x-pjax-csp-version" content="9ea82e8060ac9d44365bfa193918b70ed58abd9413362ba412abb161b3a8d1b6"/>
   <meta http-equiv="x-pjax-css-version" content="da2f0ff61d9cdedb02dc41520fbb08442f406244b8cdd886c380bc63cc29c214"/>
   <meta http-equiv="x-pjax-js-version" content="08b05f872939e0caa00aa39b3770bf459a0b6064965c2e2ef0af054affa69b33"/>
   <meta name="go-import" content="github.com/vectorizedio/redpanda git https://github.com/vectorizedio/redpanda.git"/>
   <meta name="octolytics-dimension-user_id" content="49406389" />
   <meta name="octolytics-dimension-user_login" content="vectorizedio" />
   <meta name="octolytics-dimension-repository_id" content="309512982" />
   <meta name="octolytics-dimension-repository_nwo" content="vectorizedio/redpanda" />
   <meta name="octolytics-dimension-repository_public" content="true" />
   <meta name="octolytics-dimension-repository_is_fork" content="false" />
   <meta name="octolytics-dimension-repository_network_root_id" content="309512982" />
   <meta name="octolytics-dimension-repository_network_root_nwo" content="vectorizedio/redpanda" />
   <link rel="canonical" href="https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md" data-pjax-transient/>
   <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats"/>
   <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors"/>
   <meta name="browser-optimizely-client-errors-url" content="https://api.github.com/_private/browser/optimizely_client/errors"/>
   <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000"/>
   <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png"/>
   <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg"/>
   <meta name="theme-color" content="#1e2327" />
   <meta name="color-scheme" content="light dark" />
   <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials"/>
  </head>

  <body class="logged-out env-production page-responsive page-blob" style="word-wrap: break-word;">
    <div class="position-relative js-header-wrapper ">
      <a href="#start-of-content" class="px-2 py-4 color-bg-accent-emphasis color-fg-on-emphasis show-on-focus js-skip-to-content">Skip to content</a>
      <span data-view-component="true" class="progress-pjax-loader js-pjax-loader-bar Progress position-fixed width-full">
        <span style="width: 0%;" data-view-component="true" class="Progress-item progress-pjax-loader-bar left-0 top-0 color-bg-accent-emphasis"></span>
      </span>      
      <header class="Header-old header-logged-out js-details-container Details position-relative f4 py-2" role="banner">
        <div class="container-xl d-lg-flex flex-items-center p-responsive">
          <div class="d-flex flex-justify-between flex-items-center">
            <a class="mr-4 color-fg-inherit" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
              <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github">
                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
            <div class="d-lg-none css-truncate css-truncate-target width-fit p-2"></div>
            <div class="d-flex flex-items-center">
              <a href="/signup?ref_cta=Sign+up&amp;ref_loc=header+logged+out&amp;ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E%2Fblob%2Fshow&amp;source=header-repo"
                class="d-inline-block d-lg-none f5 no-underline border color-border-default rounded-2 px-2 py-1 mr-3 mr-sm-5 color-fg-inherit"
                data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="45e6fe5c20a198881a365d1fac6603ba17f2a5a59ba132aea3ce392fb59c868d">
                Sign&nbsp;up
              </a>
              <button aria-label="Toggle navigation" aria-expanded="false" type="button" data-view-component="true" class="js-details-target btn-link d-lg-none mt-1 color-fg-inherit">  
                <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-three-bars">
                  <path fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path>
                </svg>
              </button>      
            </div>
          </div>
          <div class="HeaderMenu HeaderMenu--logged-out position-fixed top-0 right-0 bottom-0 height-fit position-lg-relative d-lg-flex flex-justify-between flex-items-center flex-auto">
            <div class="d-flex d-lg-none flex-justify-end border-bottom color-bg-subtle p-3">
              <button aria-label="Toggle navigation" aria-expanded="false" type="button" data-view-component="true" class="js-details-target btn-link">  
                <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-x color-fg-muted">
                  <path fill-rule="evenodd" d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"></path>
                </svg>
              </button>      
            </div>
            <nav class="mt-0 px-3 px-lg-0 mb-5 mb-lg-0" aria-label="Global">
              <ul class="d-lg-flex list-style-none">
                <li class="mr-0 mr-lg-3 position-relative flex-wrap flex-justify-between flex-items-center border-bottom border-lg-bottom-0 d-block d-lg-flex flex-lg-nowrap flex-lg-items-center">
                  <details class="HeaderMenu-details details-overlay details-reset width-full">
                    <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                      Why GitHub?
                      <svg x="0" y="0" viewBox="0 0 14 8" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                        <path d="M1,1l6.2,6L13,1"></path>
                      </svg>
                    </summary>
                    <div class="dropdown-menu flex-auto rounded px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                      <ul class="list-style-none f5 pb-1">
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--primary text-bold py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Why GitHub?&quot;,&quot;action&quot;:&quot;click to go to Features&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Features;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="ac6f27ecdd7f7d2bbb4ac39ffe555e8e059c79fa76082900f228a7b2f9b3a43a" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Why GitHub?&quot;,&quot;action&quot;:&quot;click to go to Features&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Features;&quot;}" href="/features">
                            Features
                          </a>
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Why GitHub?&quot;,&quot;action&quot;:&quot;click to go to Mobile&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Mobile;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="884914125380e012a00688023de58fbb08f2faf33b710378512f1d4490aa3df3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Why GitHub?&quot;,&quot;action&quot;:&quot;click to go to Mobile&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Mobile;&quot;}" href="/mobile">
                            Mobile
                          </a>  
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Why GitHub?&quot;,&quot;action&quot;:&quot;click to go to Actions&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Actions;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="87cce98f4d9913e97a8812141ceffd84ffb60b87393548e106cacb5b5c358862" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Why GitHub?&quot;,&quot;action&quot;:&quot;click to go to Actions&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Actions;&quot;}" href="/features/actions">
                            Actions
                          </a>  
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Why GitHub?&quot;,&quot;action&quot;:&quot;click to go to Codespaces&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Codespaces;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="2d135b7f40b87b14129915d057654dc9f5784cf6ade38587ec75b5b716b6dad1" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Why GitHub?&quot;,&quot;action&quot;:&quot;click to go to Codespaces&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Codespaces;&quot;}" href="/features/codespaces">
                            Codespaces
                          </a>  
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Why GitHub?&quot;,&quot;action&quot;:&quot;click to go to Packages&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Packages;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="7b9f3fe72cbf154c781476dec254569fcbb84b853a781b3aa66fdff676eab37d" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Why GitHub?&quot;,&quot;action&quot;:&quot;click to go to Packages&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Packages;&quot;}" href="/features/packages">
                            Packages
                          </a>  
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Why GitHub?&quot;,&quot;action&quot;:&quot;click to go to Security&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Security;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="950b6a351b7037c8ea2f357c080354b8c479af93277b8106f9597bc4fa62c186" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Why GitHub?&quot;,&quot;action&quot;:&quot;click to go to Security&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Security;&quot;}" href="/features/security">
                            Security
                          </a>  
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Why GitHub?&quot;,&quot;action&quot;:&quot;click to go to Code review&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Code review;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="2235ab3b0f74a0310804ecf9ae2a0afc2f789dfe4305558c66fa5d110a3c9a86" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Why GitHub?&quot;,&quot;action&quot;:&quot;click to go to Code review&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Code review;&quot;}" href="/features/code-review">
                            Code review
                          </a>  
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Why GitHub?&quot;,&quot;action&quot;:&quot;click to go to Issues&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Issues;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="63b37251ee6bb478faa4a35faf5298e016bc4cd5dd0611490900df93d6409efa" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Why GitHub?&quot;,&quot;action&quot;:&quot;click to go to Issues&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Issues;&quot;}" href="/features/issues">
                            Issues
                          </a>  
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Why GitHub?&quot;,&quot;action&quot;:&quot;click to go to Integrations&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Integrations;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="c80a832efac377b8c28790b484034cd745735f415e61097b1e7ac116056c853b" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Why GitHub?&quot;,&quot;action&quot;:&quot;click to go to Integrations&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Integrations;&quot;}" href="/features/integrations">
                            Integrations
                          </a>
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--primary text-bold border-top pt-4 pb-2 mt-3" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Why GitHub?&quot;,&quot;action&quot;:&quot;click to go to GitHub Sponsors&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:GitHub Sponsors;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="09e196e1a701aeb2edbfc79441be6f72fe9be11e0176e919cc8bfc8730608415" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Why GitHub?&quot;,&quot;action&quot;:&quot;click to go to GitHub Sponsors&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:GitHub Sponsors;&quot;}" href="/sponsors">
                            GitHub Sponsors
                          </a>  
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--primary text-bold py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Why GitHub?&quot;,&quot;action&quot;:&quot;click to go to Customer stories&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Customer stories;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="3a315a599066b35233edfc0acd24a0f8169254aaac71ab9f56cdc54128b7f529" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Why GitHub?&quot;,&quot;action&quot;:&quot;click to go to Customer stories&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Customer stories;&quot;}" href="/customer-stories">
                            Customer stories
                          </a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li class="mr-0 mr-lg-3 position-relative flex-wrap flex-justify-between flex-items-center border-bottom border-lg-bottom-0 d-block d-lg-flex flex-lg-nowrap flex-lg-items-center">
                  <a class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header menu top item (logged out)&quot;,&quot;action&quot;:&quot;click to go to Team&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Team;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="83db4c2c4aefd0349aed6fe344197b6dfb4001bc1869b5fe2df99638a444600d" data-analytics-event="{&quot;category&quot;:&quot;Header menu top item (logged out)&quot;,&quot;action&quot;:&quot;click to go to Team&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Team;&quot;}" href="/team">
                    Team
                  </a>
                </li>
                <li class="mr-0 mr-lg-3 position-relative flex-wrap flex-justify-between flex-items-center border-bottom border-lg-bottom-0 d-block d-lg-flex flex-lg-nowrap flex-lg-items-center">
                  <a class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header menu top item (logged out)&quot;,&quot;action&quot;:&quot;click to go to Enterprise&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Enterprise;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="235c2766aecec3c04f194681c048ca5418cc26f94de5185c6ba424d2379478bb" data-analytics-event="{&quot;category&quot;:&quot;Header menu top item (logged out)&quot;,&quot;action&quot;:&quot;click to go to Enterprise&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Enterprise;&quot;}" href="/enterprise">
                    Enterprise
                  </a>
                </li>
                <li class="mr-0 mr-lg-3 position-relative flex-wrap flex-justify-between flex-items-center border-bottom border-lg-bottom-0 d-block d-lg-flex flex-lg-nowrap flex-lg-items-center">
                  <details class="HeaderMenu-details details-overlay details-reset width-full">
                    <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                      Explore
                      <svg x="0" y="0" viewBox="0 0 14 8" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                        <path d="M1,1l6.2,6L13,1"></path>
                      </svg>
                    </summary>
                    <div class="dropdown-menu flex-auto rounded px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                      <ul class="list-style-none f5 pb-1">
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--primary text-bold py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Explore&quot;,&quot;action&quot;:&quot;click to go to Explore GitHub&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Explore GitHub;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="26ac2d8696506d4752435727affc2259ac501843435d750383adfcd0e9047143" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Explore&quot;,&quot;action&quot;:&quot;click to go to Explore GitHub&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Explore GitHub;&quot;}" href="/explore">
                            Explore GitHub
                          </a>
                        </li>
                        <li class="color-fg-muted text-normal f6 text-mono mb-1 border-top pt-3 mt-3 mb-1">
                          Learn and contribute
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Explore&quot;,&quot;action&quot;:&quot;click to go to Topics&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Topics;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="9e0edef7ea65a41120a05000e869cddc33d9522a90967287b6e06f383fc476b0" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Explore&quot;,&quot;action&quot;:&quot;click to go to Topics&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Topics;&quot;}" href="/topics">
                            Topics
                          </a>
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Explore&quot;,&quot;action&quot;:&quot;click to go to Collections&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Collections;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="e19def5c09846f34e091e9a05ada3840cf4b01539edbb6874400a01d5bb1715b" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Explore&quot;,&quot;action&quot;:&quot;click to go to Collections&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Collections;&quot;}" href="/collections">
                            Collections
                          </a>
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Explore&quot;,&quot;action&quot;:&quot;click to go to Trending&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Trending;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="122ec21efd411f4c521bd2be68e989e5b08d9e1894f26ef21a5fc666ca60d847" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Explore&quot;,&quot;action&quot;:&quot;click to go to Trending&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Trending;&quot;}" href="/trending">
                            Trending
                          </a>
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Explore&quot;,&quot;action&quot;:&quot;click to go to Learning Lab&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Learning Lab;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="dbb1486993514b64968bdd3f70db955dacfe99aca19abcdfd66c3e896a6a79af" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Explore&quot;,&quot;action&quot;:&quot;click to go to Learning Lab&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Learning Lab;&quot;}" href="https://lab.github.com/">
                            Learning Lab
                          </a>
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Explore&quot;,&quot;action&quot;:&quot;click to go to Open source guides&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Open source guides;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="f0b9d6857051290f6989febe908f840aa47177f49428b5a098e36734b29f2106" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Explore&quot;,&quot;action&quot;:&quot;click to go to Open source guides&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Open source guides;&quot;}" href="https://opensource.guide">
                            Open source guides
                          </a>
                        </li>
                        <li class="color-fg-muted text-normal f6 text-mono mb-1 border-top pt-3 mt-3 mb-1">
                          Connect with others
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Explore&quot;,&quot;action&quot;:&quot;click to go to The ReadME Project&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:The ReadME Project;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="5c398095effec99d600fe3382e9072b702f173f96f6ed5fe5385fa3510d26d38" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Explore&quot;,&quot;action&quot;:&quot;click to go to The ReadME Project&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:The ReadME Project;&quot;}" href="/readme">
                            The ReadME Project
                          </a> 
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Explore&quot;,&quot;action&quot;:&quot;click to go to Events&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Events;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="96f5e3e304fdcd0124ff6f4c8f3782723bd8fad75bdcbab2d7effa260968cbfb" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Explore&quot;,&quot;action&quot;:&quot;click to go to Events&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Events;&quot;}" href="/events">
                            Events
                          </a>
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Explore&quot;,&quot;action&quot;:&quot;click to go to Community forum&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Community forum;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="ec7e2cc0f9ee3f934375bd88ad47404581f0f6de4c55e8b0f0791656b705712e" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Explore&quot;,&quot;action&quot;:&quot;click to go to Community forum&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Community forum;&quot;}" href="https://github.community">
                            Community forum
                          </a>
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Explore&quot;,&quot;action&quot;:&quot;click to go to GitHub Education&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:GitHub Education;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="6a4f9473e10149a74e4cc33b9610717ff636efb3a37d084f9155ccb568d536f7" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Explore&quot;,&quot;action&quot;:&quot;click to go to GitHub Education&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:GitHub Education;&quot;}" href="https://education.github.com">
                            GitHub Education
                          </a>
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Explore&quot;,&quot;action&quot;:&quot;click to go to GitHub Stars program&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:GitHub Stars program;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="e74cdd55cf0854492cb9e4a2ce819b4a0ab33151ab5e8c84c1545cd7ce1a05b4" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Explore&quot;,&quot;action&quot;:&quot;click to go to GitHub Stars program&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:GitHub Stars program;&quot;}" href="https://stars.github.com">
                            GitHub Stars program
                          </a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li class="mr-0 mr-lg-3 position-relative flex-wrap flex-justify-between flex-items-center border-bottom border-lg-bottom-0 d-block d-lg-flex flex-lg-nowrap flex-lg-items-center">
                  <a class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header menu top item (logged out)&quot;,&quot;action&quot;:&quot;click to go to Marketplace&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Marketplace;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="c2e7e0fdad1a9ad17e068e577b379f9abd6c34f6c6848e41f58cdf7c61585508" data-analytics-event="{&quot;category&quot;:&quot;Header menu top item (logged out)&quot;,&quot;action&quot;:&quot;click to go to Marketplace&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Marketplace;&quot;}" href="/marketplace">
                    Marketplace
                  </a>
                </li>
                <li class="mr-0 mr-lg-3 position-relative flex-wrap flex-justify-between flex-items-center border-bottom border-lg-bottom-0 d-block d-lg-flex flex-lg-nowrap flex-lg-items-center">
                  <details class="HeaderMenu-details details-overlay details-reset width-full">
                    <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                      Pricing
                      <svg x="0" y="0" viewBox="0 0 14 8" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                        <path d="M1,1l6.2,6L13,1"></path>
                      </svg>
                    </summary>
                    <div class="dropdown-menu flex-auto rounded px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                      <ul class="list-style-none f5 pb-1">
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--primary text-bold py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Pricing&quot;,&quot;action&quot;:&quot;click to go to Plans&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Plans;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="97fd9cc9782df43194556aa3a85b9f1bfbc1b8604e6842e420264b9df9d9ce03" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Pricing&quot;,&quot;action&quot;:&quot;click to go to Plans&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Plans;&quot;}" href="/pricing">
                            Plans
                          </a>
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Pricing&quot;,&quot;action&quot;:&quot;click to go to Compare plans&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Compare plans;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="7c74fae23cfcfbe6e803ff302b85318d03de31e92afa25286cc1b7b047b81603" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Pricing&quot;,&quot;action&quot;:&quot;click to go to Compare plans&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Compare plans;&quot;}" href="/pricing#compare-features">
                            Compare plans
                          </a>
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Pricing&quot;,&quot;action&quot;:&quot;click to go to Contact Sales&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Contact Sales;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="5e5d488bbe94ca2645ec7e2305717dfd3fd13c0b38766b1babd7d6b4e2f93e98" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Pricing&quot;,&quot;action&quot;:&quot;click to go to Contact Sales&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Contact Sales;&quot;}" href="https://github.com/enterprise/contact">
                            Contact Sales
                          </a>
                        </li>
                        <li>
                          <a class="lh-condensed-ultra d-block no-underline position-relative Link--primary text-bold border-top pt-4 pb-2 mt-3" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header dropdown (logged out), Pricing&quot;,&quot;action&quot;:&quot;click to go to Education&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Education;&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="788f96367f6e368b9e368ed486626f88f778df7b90dccf66d457b64da2402e5a" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Pricing&quot;,&quot;action&quot;:&quot;click to go to Education&quot;,&quot;label&quot;:&quot;ref_page:/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md;ref_cta:Education;&quot;}" href="https://education.github.com">
                            Education
                          </a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
              </ul>
            </nav>
            <div class="d-lg-flex flex-items-center px-3 px-lg-0 text-center text-lg-left">
              <div class="d-lg-flex min-width-0 mb-3 mb-lg-0">
                <div class="header-search flex-auto js-site-search position-relative flex-self-stretch flex-md-self-auto mb-3 mb-md-0 mr-0 mr-md-3 scoped-search site-scoped-search js-jump-to">
                  <div class="position-relative">
                    <form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="309512982" data-scoped-search-url="/vectorizedio/redpanda/search" data-owner-scoped-search-url="/orgs/vectorizedio/search" data-unscoped-search-url="/search" action="/vectorizedio/redpanda/search" accept-charset="UTF-8" method="get">
                      <label class="form-control input-sm header-search-wrapper p-0 js-chromeless-input-container header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center">
                        <input type="text" class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
                          data-hotkey="s,/"
                          name="q"
                          data-test-selector="nav-search-input"
                          placeholder="Search"
                          data-unscoped-placeholder="Search GitHub"
                          data-scoped-placeholder="Search"
                          autocapitalize="off"
                          role="combobox"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          aria-autocomplete="list"
                          aria-controls="jump-to-results"
                          aria-label="Search"
                          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations"
                          spellcheck="false"
                          autocomplete="off" />                        
                        <input type="hidden" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" value="iHE0LRDKq5JgKIhyCda8DqVr4uhdpoShBK8n9iPU+M6gY+J/YKUDI1YwNlYXSPzqzhX5Bp7KmTe/IADLoWiG7A==" />
                        <input type="hidden" class="js-site-search-type-field" name="type" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" aria-hidden="true" class="mr-1 header-search-key-slash">
                          <path fill="none" stroke="#979A9C" opacity=".4" d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"></path>
                          <path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
                        </svg>
                        <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
                          <ul class="d-none js-jump-to-suggestions-template-container">
                            <li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
                              <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="" data-item-type="suggestion">
                                <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
                                  <svg title="Repository" aria-label="Repository" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo js-jump-to-octicon-repo d-none flex-shrink-0">
                                    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                                  </svg>
                                  <svg title="Project" aria-label="Project" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-project js-jump-to-octicon-project d-none flex-shrink-0">
                                    <path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path>
                                  </svg>
                                  <svg title="Search" aria-label="Search" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search js-jump-to-octicon-search d-none flex-shrink-0">
                                    <path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path>
                                  </svg>
                                </div>
                                <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28"/>
                                <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target"></div>
                                <div class="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none js-jump-to-badge-search">
                                  <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
                                    In this repository
                                  </span>
                                  <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
                                    All GitHub
                                  </span>
                                  <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">
                                    ↵
                                  </span>
                                </div>
                                <div aria-hidden="true" class="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
                                  Jump to
                                  <span class="d-inline-block ml-1 v-align-middle">↵</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                          <ul class="d-none js-jump-to-no-results-template-container">
                            <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
                              <span class="color-fg-muted">No suggested jump to results</span>
                            </li>
                          </ul>
                          <ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
                            <li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
                              <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="" data-item-type="scoped_search">
                                <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
                                  <svg title="Repository" aria-label="Repository" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo js-jump-to-octicon-repo d-none flex-shrink-0">
                                    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                                  </svg>
                                  <svg title="Project" aria-label="Project" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-project js-jump-to-octicon-project d-none flex-shrink-0">
                                    <path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path>
                                  </svg>
                                  <svg title="Search" aria-label="Search" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search js-jump-to-octicon-search d-none flex-shrink-0">
                                    <path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path>
                                  </svg>
                                </div>
                                <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28"/>
                                <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
                                </div>
                                <div class="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none js-jump-to-badge-search">
                                  <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
                                    In this repository
                                  </span>
                                  <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
                                    All GitHub
                                  </span>
                                  <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
                                </div>
                                <div aria-hidden="true" class="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
                                  Jump to
                                  <span class="d-inline-block ml-1 v-align-middle">↵</span>
                                </div>
                              </a>
                            </li>
                            <li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-owner-scoped-search d-none" role="option">
                              <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="" data-item-type="owner_scoped_search">
                                <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
                                  <svg title="Repository" aria-label="Repository" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo js-jump-to-octicon-repo d-none flex-shrink-0">
                                    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                                  </svg>
                                  <svg title="Project" aria-label="Project" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-project js-jump-to-octicon-project d-none flex-shrink-0">
                                    <path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path>
                                  </svg>
                                  <svg title="Search" aria-label="Search" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search js-jump-to-octicon-search d-none flex-shrink-0">
                                    <path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path>
                                  </svg>
                                </div>
                                <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28"/>
                                <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
                                </div>
                                <div class="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none js-jump-to-badge-search">
                                  <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this organization">
                                    In this organization
                                  </span>
                                  <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
                                    All GitHub
                                  </span>
                                  <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
                                </div>
                                <div aria-hidden="true" class="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
                                  Jump to
                                  <span class="d-inline-block ml-1 v-align-middle">↵</span>
                                </div>
                              </a>
                            </li>
                            <li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
                              <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="" data-item-type="global_search">
                                <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
                                  <svg title="Repository" aria-label="Repository" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo js-jump-to-octicon-repo d-none flex-shrink-0">
                                    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                                  </svg>
                                  <svg title="Project" aria-label="Project" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-project js-jump-to-octicon-project d-none flex-shrink-0">
                                    <path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path>
                                  </svg>
                                  <svg title="Search" aria-label="Search" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search js-jump-to-octicon-search d-none flex-shrink-0">
                                    <path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path>
                                  </svg>
                                </div>
                                <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28"/>
                                <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
                                </div>
                                <div class="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none js-jump-to-badge-search">
                                  <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
                                    In this repository
                                  </span>
                                  <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
                                    All GitHub
                                  </span>
                                  <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
                                </div>
                                <div aria-hidden="true" class="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
                                  Jump to
                                  <span class="d-inline-block ml-1 v-align-middle">↵</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </label>
                    </form>  
                  </div>
                </div>
              </div>
              <div class="position-relative mr-3 mb-4 mb-lg-0 d-inline-block">
                <a href="/login?return_to=https%3A%2F%2Fgithub.com%2Fvectorizedio%2Fredpanda%2Fblob%2Fdev%2Fdocs%2Fwww%2Ftls-kubernetes.md" class="HeaderMenu-link flex-shrink-0 no-underline" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="def673cc1ab6a38c6262222384098046efcf525a118847d243dbe3579d922989" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">
                  Sign in
                </a>
              </div>
                <a href="/signup?ref_cta=Sign+up&amp;ref_loc=header+logged+out&amp;ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E%2Fblob%2Fshow&amp;source=header-repo&amp;source_repo=vectorizedio%2Fredpanda" class="HeaderMenu-link flex-shrink-0 d-inline-block no-underline border color-border-default rounded px-2 py-1" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="def673cc1ab6a38c6262222384098046efcf525a118847d243dbe3579d922989" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Sign up&quot;,&quot;action&quot;:&quot;click to sign up for account&quot;,&quot;label&quot;:&quot;ref_page:/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show;ref_cta:Sign up;ref_loc:header logged out&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="7a87f7567157efcb885e7fc59f99c17a209d23ad0fa88df833474d8cbb31e602" data-analytics-event="{&quot;category&quot;:&quot;Sign up&quot;,&quot;action&quot;:&quot;click to sign up for account&quot;,&quot;label&quot;:&quot;ref_page:/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show;ref_cta:Sign up;ref_loc:header logged out&quot;}">
                  Sign up
                </a>
              </div>
            </div>
          </div>
      </header>
    </div>
    <div id="start-of-content" class="show-on-focus"></div>
    <div data-pjax-replace id="js-flash-container">
      <template class="js-flash-template">
        <div class="flash flash-full  {{ className }}">
          <div class=" px-2" >
            <button class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
                <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
              </svg>
            </button>
            
          </div>
        </div>
      </template>
    </div>
    <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>
    <div class="application-main " data-commit-hovercards-enabled data-discussion-hovercards-enabled data-issue-and-pr-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
          <main id="js-repo-pjax-container" data-pjax-container >
            <div id="repository-container-header" class="pt-3 hide-full-screen mb-5" style="background-color: var(--color-page-header-bg);" data-pjax-replace>
              <div class="d-flex mb-3 px-3 px-md-4 px-lg-5">
                <div class="flex-auto min-width-0 width-fit mr-3">
                  <h1 class=" d-flex flex-wrap flex-items-center wb-break-word f3 text-normal">
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo color-fg-muted mr-2">
                      <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                    </svg>
                    <span class="author flex-self-stretch" itemprop="author">
                      <a class="url fn" rel="author" data-hovercard-type="organization" data-hovercard-url="/orgs/vectorizedio/hovercard" href="/vectorizedio">vectorizedio</a>
                    </span>
                    <span class="mx-1 flex-self-stretch color-fg-muted">/</span>
                    <strong itemprop="name" class="mr-2 flex-self-stretch">
                      <a data-pjax="#repo-content-pjax-container" href="/vectorizedio/redpanda">redpanda</a>
                    </strong>
                    <span></span>
                    <span class="Label Label--secondary v-align-middle mr-1">Public</span>
                  </h1>
                </div>
                <ul class="pagehead-actions flex-shrink-0 d-none d-md-inline" style="padding: 2px 0;">
                  <li>
                    <a href="/login?return_to=%2Fvectorizedio%2Fredpanda" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;notification subscription menu watch&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="8029444ac8c8738768a02a0b218cb7b74b86208b4219c51cefc2f789b928224a" aria-label="You must be signed in to change notification settings" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn">
                      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-bell mr-2">
                        <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path><path fill-rule="evenodd" d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"></path>
                      </svg>Notifications
                    </a>
                  </li>
                  <li>
                    <a href="/login?return_to=%2Fvectorizedio%2Fredpanda" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;repo details fork button&quot;,&quot;repository_id&quot;:309512982,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="86351896587ec40569d2d4a2d35f5e5496c4d54e51992e1fcce1d954a823c063" aria-label="You must be signed in to fork a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn">
                      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked mr-2">
                        <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                      </svg>
                      Fork
                      <span id="repo-network-counter" data-pjax-replace="true" title="198" data-view-component="true" class="Counter">198</span>
                    </a>
                  </li>
                  <li>
                    <div data-view-component="true" class="BtnGroup d-flex">
                      <a href="/login?return_to=%2Fvectorizedio%2Fredpanda" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:309512982,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="768a82ae3a23845509c1d4493638175a88f31756c84fbd1cd38ed6872762d6e5" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-inline-block mr-2">
                          <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                        </svg>
                        <span data-view-component="true" class="d-inline">Star</span>
                        <span id="repo-stars-counter-star" aria-label="3244 users starred this repository" data-singular-suffix="user starred this repository" data-plural-suffix="users starred this repository" data-pjax-replace="true" title="3,244" data-view-component="true" class="Counter js-social-count">3.2k</span>
                      </a>
                      <button disabled="disabled" aria-label="You must be signed in to add this repository to a list" type="button" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
                          <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
                        </svg>
                      </button>
                    </div>
                  </li>
                  <li>
                  </li>
                </ul>
              </div>
              <div id="responsive-meta-container" data-pjax-replace>1</div>
              <nav data-pjax="#js-repo-pjax-container" aria-label="Repository" data-view-component="true" class="js-repo-nav js-sidenav-container-pjax js-responsive-underlinenav overflow-hidden UnderlineNav px-3 px-md-4 px-lg-5">
                <ul data-view-component="true" class="UnderlineNav-body list-style-none">
                  <li data-view-component="true" class="d-inline-flex">
                    <a id="code-tab" href="/vectorizedio/redpanda" data-tab-item="i0code-tab" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments /vectorizedio/redpanda" data-pjax="#repo-content-pjax-container" data-hotkey="g c" data-ga-click="Repository, Navigation click, Code tab" aria-current="page" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item selected">
                      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline">
                        <path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path>
                      </svg>
                      <span data-content="Code">Code</span>
                      <span id="code-repo-tab-count" data-pjax-replace="" title="Not available" data-view-component="true" class="Counter"></span>
                    </a>
                  </li>
                  <li data-view-component="true" class="d-inline-flex">
                    <a id="issues-tab" href="/vectorizedio/redpanda/issues" data-tab-item="i1issues-tab" data-selected-links="repo_issues repo_labels repo_milestones /vectorizedio/redpanda/issues" data-pjax="#repo-content-pjax-container" data-hotkey="g i" data-ga-click="Repository, Navigation click, Issues tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
                      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline">
                        <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        <path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
                      </svg>
                      <span data-content="Issues">Issues</span>
                      <span id="issues-repo-tab-count" data-pjax-replace="" title="568" data-view-component="true" class="Counter">568</span>
                    </a>
                  </li>
                  <li data-view-component="true" class="d-inline-flex">
                    <a id="pull-requests-tab" href="/vectorizedio/redpanda/pulls" data-tab-item="i2pull-requests-tab" data-selected-links="repo_pulls checks /vectorizedio/redpanda/pulls" data-pjax="#repo-content-pjax-container" data-hotkey="g p" data-ga-click="Repository, Navigation click, Pull requests tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
                      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline">
                        <path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path>
                      </svg>
                      <span data-content="Pull requests">Pull requests</span>
                      <span id="pull-requests-repo-tab-count" data-pjax-replace="" title="83" data-view-component="true" class="Counter">83</span>
                    </a>
                  </li>
                  <li data-view-component="true" class="d-inline-flex">
                    <a id="discussions-tab" href="/vectorizedio/redpanda/discussions" data-tab-item="i3discussions-tab" data-selected-links="repo_discussions /vectorizedio/redpanda/discussions" data-pjax="#repo-content-pjax-container" data-hotkey="g g" data-ga-click="Repository, Navigation click, Discussions tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
                      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment-discussion UnderlineNav-octicon d-none d-sm-inline">
                        <path fill-rule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path>
                      </svg>
                      <span data-content="Discussions">Discussions</span>
                      <span id="discussions-repo-tab-count" data-pjax-replace="" title="Not available" data-view-component="true" class="Counter"></span>
                    </a>
                  </li>
                  <li data-view-component="true" class="d-inline-flex">
                    <a id="actions-tab" href="/vectorizedio/redpanda/actions" data-tab-item="i4actions-tab" data-selected-links="repo_actions /vectorizedio/redpanda/actions" data-pjax="#repo-content-pjax-container" data-hotkey="g a" data-ga-click="Repository, Navigation click, Actions tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
                      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline">
                        <path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path>
                      </svg>
                      <span data-content="Actions">Actions</span>
                      <span id="actions-repo-tab-count" data-pjax-replace="" title="Not available" data-view-component="true" class="Counter"></span>
                    </a>
                  </li>
                  <li data-view-component="true" class="d-inline-flex">
                    <a id="projects-tab" href="/vectorizedio/redpanda/projects?type=beta" data-tab-item="i5projects-tab" data-selected-links="repo_projects new_repo_project repo_project /vectorizedio/redpanda/projects?type=beta" data-pjax="#repo-content-pjax-container" data-hotkey="g b" data-ga-click="Repository, Navigation click, Projects tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
                      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table UnderlineNav-octicon d-none d-sm-inline">
                        <path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v3.585a.746.746 0 010 .83v8.085A1.75 1.75 0 0114.25 16H6.309a.748.748 0 01-1.118 0H1.75A1.75 1.75 0 010 14.25V6.165a.746.746 0 010-.83V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"></path>
                      </svg>
                      <span data-content="Projects">Projects</span>
                      <span id="projects-repo-tab-count" data-pjax-replace="" title="1" data-view-component="true" class="Counter">1</span>
                    </a>
                  </li>
                  <li data-view-component="true" class="d-inline-flex">
                    <a id="security-tab" href="/vectorizedio/redpanda/security" data-tab-item="i6security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /vectorizedio/redpanda/security" data-pjax="#repo-content-pjax-container" data-hotkey="g s" data-ga-click="Repository, Navigation click, Security tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
                      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline">
                        <path fill-rule="evenodd" d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"></path>
                      </svg>
                      <span data-content="Security">Security</span>
                      <include-fragment src="/vectorizedio/redpanda/security/overall-count" accept="text/fragment+html"></include-fragment>
                    </a>
                  </li>
                  <li data-view-component="true" class="d-inline-flex">
                    <a id="insights-tab" href="/vectorizedio/redpanda/pulse" data-tab-item="i7insights-tab" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /vectorizedio/redpanda/pulse" data-pjax="#repo-content-pjax-container" data-ga-click="Repository, Navigation click, Insights tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
                      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline">
                        <path fill-rule="evenodd" d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"></path>
                      </svg>
                      <span data-content="Insights">Insights</span>
                      <span id="insights-repo-tab-count" data-pjax-replace="" title="Not available" data-view-component="true" class="Counter"></span>
                    </a>
                  </li>
                </ul>
                <div style="visibility:hidden;" data-view-component="true" class="UnderlineNav-actions js-responsive-underlinenav-overflow position-absolute pr-3 pr-md-4 pr-lg-5 right-0">
                  <details data-view-component="true" class="details-overlay details-reset position-relative">
                    <summary role="button" data-view-component="true">
                      <div class="UnderlineNav-item mr-0 border-0">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal">
                          <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        </svg>
                        <span class="sr-only">More</span>
                      </div>
                    </summary>
                    <div data-view-component="true">
                      <details-menu role="menu" data-view-component="true" class="dropdown-menu dropdown-menu-sw">
                        <ul>
                          <li data-menu-item="i0code-tab" hidden>
                            <a role="menuitem" class="js-selected-navigation-item selected dropdown-item" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments /vectorizedio/redpanda" href="/vectorizedio/redpanda">Code</a>
                          </li>
                          <li data-menu-item="i1issues-tab" hidden>
                            <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_issues repo_labels repo_milestones /vectorizedio/redpanda/issues" href="/vectorizedio/redpanda/issues">Issues</a>
                          </li>
                          <li data-menu-item="i2pull-requests-tab" hidden>
                            <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_pulls checks /vectorizedio/redpanda/pulls" href="/vectorizedio/redpanda/pulls">Pull requests</a>
                          </li>
                          <li data-menu-item="i3discussions-tab" hidden>
                            <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_discussions /vectorizedio/redpanda/discussions" href="/vectorizedio/redpanda/discussions">Discussions</a>
                          </li>
                          <li data-menu-item="i4actions-tab" hidden>
                            <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_actions /vectorizedio/redpanda/actions" href="/vectorizedio/redpanda/actions">Actions</a>
                          </li>
                          <li data-menu-item="i5projects-tab" hidden>
                            <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_projects new_repo_project repo_project /vectorizedio/redpanda/projects?type=beta" href="/vectorizedio/redpanda/projects?type=beta">Projects</a>
                          </li>
                          <li data-menu-item="i6security-tab" hidden>
                              <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="security overview alerts policy token_scanning code_scanning /vectorizedio/redpanda/security" href="/vectorizedio/redpanda/security">Security</a>
                          </li>
                          <li data-menu-item="i7insights-tab" hidden>
                            <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /vectorizedio/redpanda/pulse" href="/vectorizedio/redpanda/pulse">Insights</a>
                          </li>
                        </ul>
                      </details-menu>
                    </div>
                  </details>
                </div>
              </nav>
            </div>
            <div class="clearfix new-discussion-timeline container-xl px-3 px-md-4 px-lg-5">
              <div id="repo-content-pjax-container" class="repository-content " >
                <div>
                  <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/vectorizedio/redpanda/blob/4a10444d19528aeed75b92d71141d0e4287048f2/docs/www/tls-kubernetes.md">Permalink</a>
                  <div class="d-flex flex-items-start flex-shrink-0 pb-3 flex-wrap flex-md-nowrap flex-justify-between flex-md-justify-start">
                    <div class="position-relative">
                      <details class="details-reset details-overlay mr-0 mb-0 " id="branch-select-menu">
                        <summary class="btn css-truncate" data-hotkey="w" title="Switch branches or tags">                        
                          <svg text="gray" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-branch">
                            <path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path>
                          </svg>
                          <span class="css-truncate-target" data-menu-button>dev</span>
                          <span class="dropdown-caret"></span>
                        </summary>
                        <div class="SelectMenu">
                          <div class="SelectMenu-modal">
                            <header class="SelectMenu-header">
                              <span class="SelectMenu-title">Switch branches/tags</span>
                              <button class="SelectMenu-closeButton" type="button" data-toggle-for="branch-select-menu">
                                <svg aria-label="Close menu" aria-hidden="false" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
                                  <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
                                </svg>
                              </button>
                            </header>
                            <input-demux data-action="tab-container-change:input-demux#storeInput tab-container-changed:input-demux#updateInput">
                              <tab-container class="d-flex flex-column js-branches-tags-tabs" style="min-height: 0;">
                                <div class="SelectMenu-filter">
                                  <input data-target="input-demux.source"
                                    id="context-commitish-filter-field"
                                    class="SelectMenu-input form-control"
                                    aria-owns="ref-list-branches"
                                    data-controls-ref-menu-id="ref-list-branches"
                                    autofocus
                                    autocomplete="off"
                                    aria-label="Filter branches/tags"
                                    placeholder="Filter branches/tags"
                                    type="text">
                                  </input>
                                </div>
                                <div class="SelectMenu-tabs" role="tablist" data-target="input-demux.control" >
                                  <button class="SelectMenu-tab" type="button" role="tab" aria-selected="true">Branches</button>
                                  <button class="SelectMenu-tab" type="button" role="tab">Tags</button>
                                </div>
                                <div role="tabpanel" id="ref-list-branches" data-filter-placeholder="Filter branches/tags" tabindex="" class="d-flex flex-column flex-auto overflow-auto">
                                  <ref-selector type="branch" data-targets="input-demux.sinks" 
                                  data-action="
                                    input-entered:ref-selector#inputEntered
                                    tab-selected:ref-selector#tabSelected
                                    focus-list:ref-selector#focusFirstListMember
                                  "
                                  query-endpoint="/vectorizedio/redpanda/refs"
                                  cache-key="v0:1642619333.4369369"
                                  current-committish="ZGV2"
                                  default-branch="ZGV2"
                                  name-with-owner="dmVjdG9yaXplZGlvL3JlZHBhbmRh"
                                  prefetch-on-mouseover>
                                    <template data-target="ref-selector.fetchFailedTemplate">
                                      
                                    </template>
                                    <template data-target="ref-selector.noMatchTemplate">
                                      <div class="SelectMenu-message">Nothing to show</div>
                                    </template>
                                    <div data-target="ref-selector.listContainer" role="menu" class="SelectMenu-list " style="max-height: 330px" data-pjax="#repo-content-pjax-container">
                                      <div class="SelectMenu-loading pt-3 pb-0 overflow-hidden" aria-label="Menu is loading">
                                        <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
                                          <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" />
                                          <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
                                        </svg>
                                      </div>
                                    </div>
                                    <template data-target="ref-selector.itemTemplate">
                                      <a href="https://github.com/vectorizedio/redpanda/blob/{{ urlEncodedRefName }}/docs/www/tls-kubernetes.md" class="SelectMenu-item" role="menuitemradio" rel="nofollow" aria-checked="{{ isCurrent }}" data-index="{{ index }}">
                                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
                                          <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                                        </svg>
                                        
                                        
                                      </a>
                                    </template>
                                    <footer class="SelectMenu-footer"><a href="/vectorizedio/redpanda/branches">View all branches</a></footer>
                                  </ref-selector>
                                </div>
                                <div role="tabpanel" id="tags-menu" data-filter-placeholder="Find a tag" tabindex="" hidden class="d-flex flex-column flex-auto overflow-auto">
                                  <ref-selector
                                    type="tag"
                                    data-action="
                                      input-entered:ref-selector#inputEntered
                                      tab-selected:ref-selector#tabSelected
                                      focus-list:ref-selector#focusFirstListMember
                                    "
                                    data-targets="input-demux.sinks"
                                    query-endpoint="/vectorizedio/redpanda/refs"
                                    cache-key="v0:1642619333.4369369"
                                    current-committish="ZGV2"
                                    default-branch="ZGV2"
                                    name-with-owner="dmVjdG9yaXplZGlvL3JlZHBhbmRh">
                                      <template data-target="ref-selector.fetchFailedTemplate">
                                        <div class="SelectMenu-message" data-index="{{ index }}">Could not load tags</div>
                                      </template>
                                      <template data-target="ref-selector.noMatchTemplate">
                                        <div class="SelectMenu-message" data-index="{{ index }}">Nothing to show</div>
                                      </template>
                                      <template data-target="ref-selector.itemTemplate">
                                        <a href="https://github.com/vectorizedio/redpanda/blob/{{ urlEncodedRefName }}/docs/www/tls-kubernetes.md" class="SelectMenu-item" role="menuitemradio" rel="nofollow" aria-checked="{{ isCurrent }}" data-index="{{ index }}">
                                          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
                                            <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                                          </svg>
                                          <span class="flex-1 css-truncate css-truncate-overflow {{ isFilteringClass }}">{{ refName }}</span>
                                          <span hidden="{{ isNotDefault }}" class="Label Label--secondary flex-self-start">default</span>
                                        </a>
                                      </template>
                                      <div data-target="ref-selector.listContainer" role="menu" class="SelectMenu-list" style="max-height: 330px" data-pjax="#repo-content-pjax-container">
                                        <div class="SelectMenu-loading pt-3 pb-0 overflow-hidden" aria-label="Menu is loading">
                                          <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
                                            <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" />
                                            <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
                                          </svg>
                                        </div>
                                      </div>
                                      <footer class="SelectMenu-footer"><a href="/vectorizedio/redpanda/tags">View all tags</a></footer>
                                    </ref-selector>
                                </div>
                              </tab-container>
                            </input-demux>
                          </div>
                        </div>
                      </details>
                    </div>
                    <h2 id="blob-path" class="breadcrumb flex-auto flex-self-center min-width-0 text-normal mx-2 width-full width-md-auto flex-order-1 flex-md-order-none mt-3 mt-md-0">
                      <span class="js-repo-root text-bold">
                        <span class="js-path-segment d-inline-block wb-break-all">
                          <a data-pjax="#repo-content-pjax-container" href="/vectorizedio/redpanda">
                            <span>redpanda</span>
                          </a>
                        </span>
                      </span>
                      <span class="separator">/</span>
                      <span class="js-path-segment d-inline-block wb-break-all">
                        <a data-pjax="#repo-content-pjax-container" href="/vectorizedio/redpanda/tree/dev/docs">
                          <span>docs</span>
                        </a>
                      </span>
                      <span class="separator">/</span>
                      <span class="js-path-segment d-inline-block wb-break-all">
                        <a data-pjax="#repo-content-pjax-container" href="/vectorizedio/redpanda/tree/dev/docs/www">
                          <span>www</span>
                        </a>
                      </span>
                      <span class="separator">/</span>
                      <strong class="final-path">tls-kubernetes.md</strong>
                    </h2>
                    <a href="/vectorizedio/redpanda/find/dev" class="js-pjax-capture-input btn mr-2 d-none d-md-block" data-pjax data-hotkey="t">Go to file</a>
                    <details id="blob-more-options-details" data-view-component="true" class="details-overlay details-reset position-relative">
                      <summary role="button" data-view-component="true" class="btn">
                        <svg aria-label="More options" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal">
                          <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        </svg>
                      </summary>
                      <div data-view-component="true">
                        <ul class="dropdown-menu dropdown-menu-sw">
                          <li class="d-block d-md-none">
                            <a class="dropdown-item d-flex flex-items-baseline" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FIND_FILE_BUTTON&quot;,&quot;repository_id&quot;:309512982,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="9788c9cad5416e617ffb5eda11d202a6a737c4c161b32e10f09d165d3f443013" data-ga-click="Repository, find file, location:repo overview" data-hotkey="t" data-pjax="true" href="/vectorizedio/redpanda/find/dev">
                              <span class="flex-auto">Go to file</span>
                              <span class="text-small color-fg-muted" aria-hidden="true">T</span>
                            </a>
                          </li>
                          <li data-toggle-for="blob-more-options-details">
                            <button data-toggle-for="jumpto-line-details-dialog" type="button" data-view-component="true" class="dropdown-item btn-link">
                              <span class="d-flex flex-items-baseline">
                                <span class="flex-auto">Go to line</span>
                                <span class="text-small color-fg-muted" aria-hidden="true">L</span>
                              </span>
                            </button>
                          </li>
                          <li class="dropdown-divider" role="none"></li>
                          <li>
                            <clipboard-copy data-toggle-for="blob-more-options-details" aria-label="Copy path" value="docs/www/tls-kubernetes.md" data-view-component="true" class="dropdown-item cursor-pointer">Copy path</clipboard-copy>
                          </li>
                          <li>
                            <clipboard-copy data-toggle-for="blob-more-options-details" aria-label="Copy permalink" value="https://github.com/vectorizedio/redpanda/blob/4a10444d19528aeed75b92d71141d0e4287048f2/docs/www/tls-kubernetes.md" data-view-component="true" class="dropdown-item cursor-pointer">
                              <span class="d-flex flex-items-baseline">
                                <span class="flex-auto">Copy permalink</span>
                              </span>
                            </clipboard-copy>
                          </li>
                        </ul>
                      </div>
                    </details>
                  </div>
                  <div class="Box d-flex flex-column flex-shrink-0 mb-3">
                    <include-fragment src="/vectorizedio/redpanda/contributors/dev/docs/www/tls-kubernetes.md" class="commit-loader">
                      <div class="Box-header d-flex flex-items-center">
                        <div class="Skeleton avatar avatar-user flex-shrink-0 ml-n1 mr-n1 mt-n1 mb-n1" style="width:24px;height:24px;"></div>
                        <div class="Skeleton Skeleton--text col-5 ml-2">&nbsp;</div>
                      </div>
                      <div class="Box-body d-flex flex-items-center" >
                        <div class="Skeleton Skeleton--text col-1">&nbsp;</div>
                        <span class="color-fg-danger h6 loader-error">Cannot retrieve contributors at this time</span>
                      </div>
                    </include-fragment>
                  </div>
                  <readme-toc>
                  <div data-target="readme-toc.content" class="Box mt-3 position-relative">
                    <div class="Box-header js-blob-header blob-header js-sticky js-position-sticky top-0 p-2 d-flex flex-shrink-0 flex-md-row flex-items-center" style="position: sticky; z-index: 1;">
                      <details data-target="readme-toc.trigger"
                        data-menu-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;trigger&quot;,&quot;repository_id&quot;:309512982,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}"
                        data-menu-hydro-click-hmac="a92f98f012e82cc7acc0cb5eb3ab2ec1702d47daba648501a86225ce446d61d3"
                        class="dropdown details-reset details-overlay">
                        <summary
                          class="btn btn-octicon m-0 mr-2 p-2"
                          aria-haspopup="true"
                          aria-label="Table of Contents">
                          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-list-unordered">
                            <path fill-rule="evenodd" d="M2 4a1 1 0 100-2 1 1 0 000 2zm3.75-1.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM3 8a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2z"></path>
                          </svg>
                        </summary>
                        <details-menu class="SelectMenu" role="menu">
                          <div class="SelectMenu-modal rounded-3 mt-1" style="max-height:340px;">
                            <div class="SelectMenu-filter">
                              <input
                                class="SelectMenu-input form-control js-filterable-field"
                                id="toc-filter-field"
                                type="text"
                                autocomplete="off"
                                spellcheck="false"
                                autofocus
                                placeholder="Filter headings"
                                aria-label="Filter headings">
                              </input>
                            </div>
                            <div class="SelectMenu-list SelectMenu-list--borderless p-2" style="overscroll-behavior: contain;" data-filterable-for="toc-filter-field" data-filterable-type="substring">
                              <a role="menuitem" class="filter-item SelectMenu-item ws-normal wb-break-word line-clamp-2 py-1 text-emphasized" style="-webkit-box-orient: vertical; padding-left: 12px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:309512982,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="6089021ee824b23348847831f29055e5164ac61f4d24dafa9f4f1d133f4cd4eb" href="#tls-for-kubernetes">TLS for Kubernetes</a>
                              <a role="menuitem" class="filter-item SelectMenu-item ws-normal wb-break-word line-clamp-2 py-1 " style="-webkit-box-orient: vertical; padding-left: 24px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:309512982,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="6089021ee824b23348847831f29055e5164ac61f4d24dafa9f4f1d133f4cd4eb" href="#getting-started">Getting started</a>
                              <a role="menuitem" class="filter-item SelectMenu-item ws-normal wb-break-word line-clamp-2 py-1 " style="-webkit-box-orient: vertical; padding-left: 36px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:309512982,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="6089021ee824b23348847831f29055e5164ac61f4d24dafa9f4f1d133f4cd4eb" href="#client-authorization-mtls">Client Authorization (mTLS)</a>
                              <a role="menuitem" class="filter-item SelectMenu-item ws-normal wb-break-word line-clamp-2 py-1 " style="-webkit-box-orient: vertical; padding-left: 24px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:309512982,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="6089021ee824b23348847831f29055e5164ac61f4d24dafa9f4f1d133f4cd4eb" href="#managing-certificates">Managing Certificates</a>
                              <a role="menuitem" class="filter-item SelectMenu-item ws-normal wb-break-word line-clamp-2 py-1 " style="-webkit-box-orient: vertical; padding-left: 36px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:309512982,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="6089021ee824b23348847831f29055e5164ac61f4d24dafa9f4f1d133f4cd4eb" href="#certificates-creation">Certificates Creation</a>
                              <a role="menuitem" class="filter-item SelectMenu-item ws-normal wb-break-word line-clamp-2 py-1 " style="-webkit-box-orient: vertical; padding-left: 36px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:309512982,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="6089021ee824b23348847831f29055e5164ac61f4d24dafa9f4f1d133f4cd4eb" href="#readinginspecting-the-certificates">Reading/Inspecting the certificates</a>
                              <a role="menuitem" class="filter-item SelectMenu-item ws-normal wb-break-word line-clamp-2 py-1 " style="-webkit-box-orient: vertical; padding-left: 36px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:309512982,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="6089021ee824b23348847831f29055e5164ac61f4d24dafa9f4f1d133f4cd4eb" href="#updating-renewing-existing-certificates">Updating/ Renewing existing certificates</a>
                              <a role="menuitem" class="filter-item SelectMenu-item ws-normal wb-break-word line-clamp-2 py-1 " style="-webkit-box-orient: vertical; padding-left: 24px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:309512982,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="6089021ee824b23348847831f29055e5164ac61f4d24dafa9f4f1d133f4cd4eb" href="#using-the-certificates">Using the certificates</a>
                            </div>
                          </div>
                        </details-menu>
                      </details>
                    <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1">
                      <include-fragment src="/vectorizedio/redpanda/codeowners/dev/docs/www/tls-kubernetes.md"></include-fragment>
                      370 lines (257 sloc)
                      <span class="file-info-divider"></span>
                      12.9 KB
                    </div>
                    <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between hide-sm hide-md">
                      <div class="BtnGroup">
                        <a href="/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md?plain=1" data-permalink-href="/vectorizedio/redpanda/blob/4a10444d19528aeed75b92d71141d0e4287048f2/docs/www/tls-kubernetes.md?plain=1" aria-label="Display the source blob" data-view-component="true" class="source tooltipped tooltipped tooltipped-n  js-permalink-replaceable-link btn-sm btn BtnGroup-item">
                          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code">
                            <path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path>
                          </svg>
                        </a>
                        <a href="/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md" data-permalink-href="/vectorizedio/redpanda/blob/4a10444d19528aeed75b92d71141d0e4287048f2/docs/www/tls-kubernetes.md" aria-label="Display the rendered blob" data-view-component="true" class="rendered tooltipped tooltipped tooltipped-n selected js-permalink-replaceable-link btn-sm btn BtnGroup-item">
                          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-file">
                            <path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                          </svg>
                        </a>
                      </div>
                      <div class="BtnGroup">
                        <a href="/vectorizedio/redpanda/raw/dev/docs/www/tls-kubernetes.md" id="raw-url" data-view-component="true" class="btn-sm btn BtnGroup-item">Raw</a>
                        <a href="/vectorizedio/redpanda/blame/dev/docs/www/tls-kubernetes.md" data-hotkey="b" data-view-component="true" class="js-update-url-with-hash btn-sm btn BtnGroup-item">Blame</a>
                      </div>
                      <div>
                        <a class="btn-octicon tooltipped tooltipped-nw js-remove-unless-platform"
                          data-platforms="windows,mac"
                          href="https://desktop.github.com"
                          aria-label="Open this file in GitHub Desktop"
                          data-ga-click="Repository, open with desktop">
                          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-device-desktop">
                            <path fill-rule="evenodd" d="M1.75 2.5h12.5a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25zM14.25 1H1.75A1.75 1.75 0 000 2.75v7.5C0 11.216.784 12 1.75 12h3.727c-.1 1.041-.52 1.872-1.292 2.757A.75.75 0 004.75 16h6.5a.75.75 0 00.565-1.243c-.772-.885-1.193-1.716-1.292-2.757h3.727A1.75 1.75 0 0016 10.25v-7.5A1.75 1.75 0 0014.25 1zM9.018 12H6.982a5.72 5.72 0 01-.765 2.5h3.566a5.72 5.72 0 01-.765-2.5z"></path>
                          </svg>
                        </a>
                        <remote-clipboard-copy class="d-inline-block btn-octicon" style="height: 26px" data-src="/vectorizedio/redpanda/raw/dev/docs/www/tls-kubernetes.md" data-action="click:remote-clipboard-copy#remoteCopy">
                          <span data-target="remote-clipboard-copy.idle">
                            <span class="tooltipped tooltipped-nw cursor-pointer" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;COPY_RAW_CONTENTS_BUTTON&quot;,&quot;repository_id&quot;:309512982,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="471dec1ecac693417c31d5b95477427044c0f1d9191d6caef1dda93dae63ed53" aria-label="Copy raw contents">
                              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy">
                                <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
                              </svg>
                            </span>
                          </span>
                          <span data-target="remote-clipboard-copy.fetching" hidden="hidden">
                            <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
                              <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" />
                              <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
                            </svg>
                          </span>
                          <span data-target="remote-clipboard-copy.success" hidden="hidden">
                            <span class="tooltipped tooltipped-nw" aria-label="Copied!">
                              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check color-fg-success">
                                <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                              </svg>
                            </span>
                          </span>
                          <span data-target="remote-clipboard-copy.error" hidden="hidden">
                            <span class="tooltipped tooltipped-nw" aria-label="Something went wrong. Try again.">
                              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert color-fg-attention">
                                <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
                              </svg>
                            </span>
                          </span>
                        </remote-clipboard-copy>
                        <a href="/login?return_to=https%3A%2F%2Fgithub.com%2Fvectorizedio%2Fredpanda%2Fblob%2Fdev%2Fdocs%2Fwww%2Ftls-kubernetes.md" class="btn-octicon disabled tooltipped tooltipped-nw" aria-label="You must be signed in to make or propose changes">
                          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-pencil">
                            <path fill-rule="evenodd" d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"></path>
                          </svg>
                        </a>
                        <a href="/login?return_to=https%3A%2F%2Fgithub.com%2Fvectorizedio%2Fredpanda%2Fblob%2Fdev%2Fdocs%2Fwww%2Ftls-kubernetes.md" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw" aria-label="You must be signed in to make or propose changes">
                          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-trash">
                            <path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div class="d-flex hide-lg hide-xl flex-order-2 flex-grow-0">
                      <details class="dropdown details-reset details-overlay d-inline-block">
                        <summary class="btn-octicon p-2" aria-haspopup="true" aria-label="possible actions">
                          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal">
                            <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                          </svg>
                        </summary>
                        <ul class="dropdown-menu dropdown-menu-sw" style="width: 175px">
                          <li>
                            <a class="dropdown-item tooltipped tooltipped-nw js-remove-unless-platform"
                              data-platforms="windows,mac"
                              href="https://desktop.github.com"
                              data-ga-click="Repository, open with desktop">
                              Open with Desktop
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/vectorizedio/redpanda/raw/dev/docs/www/tls-kubernetes.md">View raw</a>
                          </li>
                          <li>
                            <remote-clipboard-copy class="dropdown-item" data-src="/vectorizedio/redpanda/raw/dev/docs/www/tls-kubernetes.md" data-action="click:remote-clipboard-copy#remoteCopy">
                              <span data-target="remote-clipboard-copy.idle">
                                <span class="cursor-pointer" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;COPY_RAW_CONTENTS_BUTTON&quot;,&quot;repository_id&quot;:309512982,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="471dec1ecac693417c31d5b95477427044c0f1d9191d6caef1dda93dae63ed53">
                                  Copy raw contents
                                </span>
                              </span>
                              <span data-target="remote-clipboard-copy.fetching" hidden="hidden">
                                Copy raw contents
                                <span class="d-inline-block position-relative" style="top: 3px">
                                  <svg aria-label="fetching contents…" style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
                                    <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" />
                                    <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
                                  </svg>
                                </span>
                              </span>
                              <span data-target="remote-clipboard-copy.success" hidden="hidden">
                                Copy raw contents
                                <svg aria-label="Copied!" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check color-fg-success">
                                  <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                                </svg>
                              </span>
                              <span data-target="remote-clipboard-copy.error" hidden="hidden">
                                Copy raw contents
                                <svg aria-label="Something went wrong. Try again." role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert color-fg-attention">
                                  <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
                                </svg>
                              </span>
                            </remote-clipboard-copy>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/vectorizedio/redpanda/blame/dev/docs/www/tls-kubernetes.md">View blame</a>
                          </li>
                        </ul>
                      </details>
                    </div>
                  </div>
                  <div id="readme" class="Box-body readme blob js-code-block-container p-5 p-xl-6 gist-border-0">
                    <article class="markdown-body entry-content container-lg" itemprop="text">
                      <table>
                        <thead>
                          <tr>
                            <th>title</th>
                            <th>order</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><div dir="auto">TLS for Kubernetes</div></td>
                            <td><div dir="auto">0</div></td>
                          </tr>
                        </tbody>
                      </table>
                      <h1 dir="auto">
                        <a id="user-content-tls-for-kubernetes" class="anchor" aria-hidden="true" href="#tls-for-kubernetes">
                          <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                            </path>
                          </svg>
                        </a>
                        TLS for Kubernetes
                      </h1>
                      <p dir="auto">Talking over the internet with no encryption is something unthinkable these days. With Redpanda you can help secure your data by enabling <a href="https://en.wikipedia.org/wiki/Transport_Layer_Security" rel="nofollow">Transport Layer Security (TLS)</a> across your clusters, with just a few configurations.</p>
                      <p dir="auto">If you haven’t, check our guide about <a href="https://vectorized.io/docs/acls/" rel="nofollow">Encryption, authorization &amp; authentication</a>.</p>
                      <p dir="auto">Here we will dive deeper into how we can configure TLS inside a Kubernetes cluster.</p>
                      <p dir="auto">The Custom Resource Definition (CRD) of a Redpanda cluster includes three APIs: Kafka, Admin, and Pandaproxy. Each API can support TLS for server authentication and mutual TLS (mTLS) for client authentication.</p>
                      <p dir="auto">TLS allows us to establish a secure connection between a client and a broker in which communication is encrypted.</p>
                      <p dir="auto">mTLS, or 2-way TLS, is an authentication method in which the client and the server must both present certificates. This way both can decide whether the other party can be trusted by ensuring they are who they claim to be.</p>
                      <h2 dir="auto">
                        <a id="user-content-getting-started" class="anchor" aria-hidden="true" href="#getting-started">
                          <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                          </svg>
                        </a>
                        Getting started
                      </h2>
                      <p dir="auto">To demonstrate how to get up and running with TLS in Kubernetes, we’ll create a sample configuration file for a one-node cluster. We'll call it <code>tls_example.yaml</code> but feel free to name it however you like. You can save it wherever <code>kubectl</code> can read it from.</p>
                      <p dir="auto">To enable TLS, we need to add a listener entry under the API fields in our <code>yaml</code> configuration file, and then specify the subfield <code>tls</code> as <code>true</code> so we can enable it.</p>
                      <p dir="auto">For example, check that <code>kafkaApi</code> now has a new flag that says <code>tls: enabled: true</code>.</p>
                      <p dir="auto">Save this file as <code>tls_example.yaml</code>:</p>
                      <div class="highlight highlight-source-yaml position-relative overflow-auto" data-snippet-clipboard-copy-content="apiVersion: redpanda.vectorized.io/v1alpha1
                        kind: Cluster
                        metadata:
                        name: cluster-sample-tls
                        spec:
                        image: &quot;vectorized/redpanda&quot;
                        version: &quot;latest&quot;
                        replicas: 1
                        resources:
                          requests:
                            cpu: 1
                            memory: 1.2G
                          limits:
                            cpu: 1
                            memory: 1.2G
                        configuration:
                          rpcServer:
                            port: 33145
                          kafkaApi:
                            - port: 9092
                              tls:
                                enabled: true
                          pandaproxyApi:
                            - port: 8082
                              tls:
                                enabled: true
                          adminApi:
                          - port: 9644
                          developerMode: true">
                        <pre>
                          <span class="pl-ent">apiVersion</span>: 
                          <span class="pl-s">redpanda.vectorized.io/v1alpha1</span>
                          <span class="pl-ent">kind</span>: 
                          <span class="pl-s">Cluster</span>
                          <span class="pl-ent">metadata</span>:
                          <span class="pl-ent">name</span>: 
                          <span class="pl-s">cluster-sample-tls</span>
                          <span class="pl-ent">spec</span>:
                          <span class="pl-ent">image</span>: 
                          <span class="pl-s">
                            <span class="pl-pds">"</span>
                            vectorized/redpanda
                            <span class="pl-pds">"</span>
                          </span>
                          <span class="pl-ent">version</span>: 
                          <span class="pl-s">
                            <span class="pl-pds">"</span>
                            latest
                            <span class="pl-pds">"</span>
                          </span>
                          <span class="pl-ent">replicas</span>: <span class="pl-c1">1</span>
                          <span class="pl-ent">resources</span>:
                          <span class="pl-ent">requests</span>:
                          <span class="pl-ent">cpu</span>: 
                          <span class="pl-c1">1</span>
                          <span class="pl-ent">memory</span>: 
                          <span class="pl-s">1.2G</span>
                          <span class="pl-ent">limits</span>:
                          <span class="pl-ent">cpu</span>: 
                          <span class="pl-c1">1</span>
                          <span class="pl-ent">memory</span>: 
                          <span class="pl-s">1.2G</span>
                          <span class="pl-ent">configuration</span>:
                          <span class="pl-ent">rpcServer</span>:
                          <span class="pl-ent">port</span>: <span class="pl-c1">33145</span>
                          <span class="pl-ent">kafkaApi</span>: 
                          - <span class="pl-ent">port</span>: <span class="pl-c1">9092</span>
                          <span class="pl-ent">tls</span>:
                          <span class="pl-ent">enabled</span>: <span class="pl-c1">true</span>
                          <span class="pl-ent">pandaproxyApi</span>:
                          - <span class="pl-ent">port</span>: <span class="pl-c1">8082</span>
                          <span class="pl-ent">tls</span>:
                          <span class="pl-ent">enabled</span>: <span class="pl-c1">true</span>
                          <span class="pl-ent">adminApi</span>:
                          - <span class="pl-ent">port</span>: <span class="pl-c1">9644</span>
                          <span class="pl-ent">developerMode</span>: <span class="pl-c1">true</span>
                        </pre>
                      </div>
                      <p dir="auto">We’ll use the Kafka API to go through the TLS configuration, but you can use similar settings to set up TLS for the other APIs. For this guide, we assume external connectivity is disabled unless otherwise stated. If you want to enable external connectivity, check <a href="https://vectorized.io/docs/kubernetes-external-connect/" rel="nofollow">this guide</a> that we wrote about it.</p>
                      <p dir="auto">The operator supports a single listener with TLS per API. Additionally, if you have two listeners for the same API and one of them has external connectivity enabled, the operator assumes that the other listener also has TLS enabled.</p>
                      <p dir="auto">Providing an issuer or certificate to the operator is only available for the Kafka API.</p>
                      <h3 dir="auto"><a id="user-content-client-authorization-mtls" class="anchor" aria-hidden="true" href="#client-authorization-mtls">
                        <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                          <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                        </svg>
                        </a>Client Authorization (mTLS)
                      </h3>
                      <p dir="auto">When you enable TLS, the client has the option of verifying the identity of the server, but to do this the client must have the CA’s certificate available in a trusted store.</p>
                      <p dir="auto">We can then enable mTLS on the same listener by setting <code>requireClientAuth</code> to <code>true</code>.</p>
                      <p dir="auto">So for example, we can edit our previous <code>yaml</code> file to add this new setting:</p>
                      <div class="highlight highlight-source-yaml position-relative overflow-auto" data-snippet-clipboard-copy-content="kafkaApi:
                        - port: 9092
                        tls:
                            enabled: true
                            requireClientAuth: true">
                        <pre>
                          <span class="pl-ent">kafkaApi</span>:
                          - <span class="pl-ent">port</span>: <span class="pl-c1">9092</span>
                          <span class="pl-ent">tls</span>: <span class="pl-ent">enabled</span>: <span class="pl-c1">true</span>
                          <span class="pl-ent">requireClientAuth</span>: <span class="pl-c1">true</span>
                        </pre>
                      </div>
                      <p dir="auto">When you enable mTLS, you must specify a key-pair (certificate and key). As we will later see, the operator can also generate the key-pair.</p>
                      <p dir="auto">When you finish setting up your configuration, apply it by running:</p>
                      <div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="kubectl apply \
                        -f &lt;your-file-path/tls_example.yaml&gt;">
                        <pre>kubectl apply \ 
                          -f <span class="pl-k">&lt;</span>your-file-path/tls_example.yaml<span class="pl-k">&gt;</span>
                        </pre>
                      </div>
                      <p dir="auto">Remember to change to the actual file path that you used.</p>
                      <h2 dir="auto"><a id="user-content-managing-certificates" class="anchor" aria-hidden="true" href="#managing-certificates">
                        <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                          <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                        </svg>
                        </a>Managing Certificates
                      </h2>
                      <p dir="auto">In this section, we discuss how the certificates are generated, what the renewal process looks like, and how you can view your certificates.</p>
                      <h3 dir="auto"><a id="user-content-certificates-creation" class="anchor" aria-hidden="true" href="#certificates-creation">
                        <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                          <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                        </svg>
                        </a>Certificates Creation
                      </h3>
                      <p dir="auto">The Redpanda operator uses <a href="https://cert-manager.io" rel="nofollow">cert-manager</a> to generate certificates.</p>
                      <p dir="auto">By default, when you enable TLS, the Redpanda operator generates a root certificate for each API and uses that to generate leaf certificates for the nodes and client. The section below shows you how to check which certificates were generated.</p>
                      <p dir="auto">For the Kafka API, the operator also offers two options:</p>
                      <ul dir="auto">
                        <li>
                          <p dir="auto">Provide an existing certificate issuer.</p>
                        </li>
                        <li>
                          <p dir="auto">Provide a node certificate.</p>
                        </li>
                      </ul>
                      <p dir="auto">This functionality is only available for the Kafka API.</p>
                      <p dir="auto">To provide an existing certificate issuer, we need to add the <code>issuerRef</code> parameter to our configuration file:</p>
                      <div class="highlight highlight-source-yaml position-relative overflow-auto" data-snippet-clipboard-copy-content="    kafkaApi:
                        - port: 9092
                          tls:
                            enabled: true
                            issuerRef:
                              name: &lt;issuer-name&gt;
                              kind: ClusterIssuer">
                        <pre>
                          <span class="pl-ent">kafkaApi</span>:
                          - <span class="pl-ent">port</span>: <span class="pl-c1">9092</span>
                          <span class="pl-ent">tls</span>:
                          <span class="pl-ent">enabled</span>: <span class="pl-c1">true</span>
                          <span class="pl-ent">issuerRef</span>:
                          <span class="pl-ent">name</span>: <span class="pl-s">&lt;issuer-name&gt;</span>
                          <span class="pl-ent">kind</span>: <span class="pl-s">ClusterIssuer</span>
                        </pre>
                      </div>
                      <p dir="auto">Our other option is to provide a particular certificate (as a secret) as the node certificate. To do this, we need to add the <code>nodeSecretRef</code> field:</p>
                      <div class="highlight highlight-source-yaml position-relative overflow-auto" data-snippet-clipboard-copy-content="    kafkaApi:
                        - port: 9092
                          tls:
                            enabled: true
                            nodeSecretRef:
                              name: &lt;cluster-tls-node-certificate&gt;
                              namespace: given-cert">
                        <pre>
                          <span class="pl-ent">kafkaApi</span>:
                          - <span class="pl-ent">port</span>: <span class="pl-c1">9092</span>
                          <span class="pl-ent">tls</span>:
                          <span class="pl-ent">enabled</span>: <span class="pl-c1">true</span>
                          <span class="pl-ent">nodeSecretRef</span>:
                          <span class="pl-ent">name</span>: <span class="pl-s">&lt;cluster-tls-node-certificate&gt;</span>
                          <span class="pl-ent">namespace</span>: <span class="pl-s">given-cert</span></pre></div>
                          <p dir="auto">If the secret is in a different namespace than the Redpanda cluster, the operator copies it over.</p>
                          <h3 dir="auto"><a id="user-content-readinginspecting-the-certificates" class="anchor" aria-hidden="true" href="#readinginspecting-the-certificates">
                            <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                              <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                            </svg>
                            </a>Reading/Inspecting the certificates
                          </h3>
                          <p dir="auto">When you enable TLS, the Redpanda operator generates a root certificate for the Kafka API that is consecutively used to generate a certificate for the Kafka API listener.</p>
                          <p dir="auto">If client authentication (mTLS) is enabled, an additional certificate is generated. Each certificate is stored in a Kubernetes secret resource under the same namespace as the Redpanda cluster. The certificate name is the same as that of the corresponding secret.</p>
                          <p dir="auto">The Kafka API uses the following certificates:</p>
                          <p dir="auto">Root certificate</p>
                          <ul dir="auto">
                            <li>Used to generate the node and client certificates</li>
                            <li>Secret: <code>|cluster|-kafka-root-certificate</code></li>
                          </ul>
                          <p dir="auto">Node certificate</p>
                          <ul dir="auto">
                            <li>The node certificate is automatically provided to Redpanda by the operator. The certificate secret is mounted as a volume that is consumed by Redpanda.</li>
                            <li>Secret: <code>|cluster|-redpanda</code></li>
                          </ul>
                          <p dir="auto">Client certificate (applicable only when mTLS is enabled)</p>
                          <ul dir="auto">
                            <li>The client certificate is available for consumption. Depending on where the client is located, the client certificate secret can be mounted to local pods or be exported out of the Kubernetes cluster, as long as the Admin API is exposed externally.</li>
                            <li>Secret: <code>|cluster|-user-client</code></li>
                            <li>Available for client use</li>
                          </ul>
                          <p dir="auto">The table below lists the certificates for each API. The client certificates are only generated and used for mTLS.</p>
                          <table>
                            <tbody>
                              <tr>
                                <td><strong>Used by</strong></td>
                                <td><strong>Admin API</strong></td>
                                <td><strong>Kafka API</strong></td>
                                <td><strong>Pandaproxy API</strong></td>
                              </tr>
                              <tr>
                                <td>Node</td>
                                <td><p dir="auto">|cluster|-admin-api-node</p></td>
                                <td><p dir="auto">|cluster|-redpanda</p></td>
                                <td><p dir="auto">|cluster|-proxy-api-node</p></td>
                              </tr>
                              <tr>
                                <td>Client</td>
                                <td><p dir="auto">|cluster|-admin-api-client</p></td>
                                <td><p dir="auto">|cluster|-user-client</p></td>
                                <td><p dir="auto">|cluster|-proxy-api-client</p></td>
                              </tr>
                            </tbody>
                          </table>
                          <p dir="auto">Each certificate resource results in the creation of a secret resource of type <code>kubernetes.io/tls</code> that contains three components: <code>tls.crt</code>, <code>tls.key</code>, and <code>ca.crt</code>.</p>
                          <p dir="auto">You can check them by running:</p>
                          <div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="kubectl describe secret |cluster|-admin-user-client">
                            <pre>
                              kubectl describe secret 
                              <span class="pl-k">|</span>cluster
                              <span class="pl-k">|</span>-admin-user-client
                            </pre>
                          </div>
                          <p dir="auto">Which will return this:</p>
                          <div class="snippet-clipboard-content position-relative overflow-auto" data-snippet-clipboard-copy-content="Name:  |cluster|-admin-user-client
                            ..
                            Type:  kubernetes.io/tls
                            Data
                            ====
                            tls.key:  .. bytes
                            tls.crt:  .. bytes
                            ca.crt:   .. bytes">
                            <pre>
                              <code>Name:  |cluster|-admin-user-client
                                ..
                                Type:  kubernetes.io/tls
                                Data
                                ====
                                tls.key:  .. bytes
                                tls.crt:  .. bytes
                                ca.crt:   .. bytes
                              </code>
                            </pre>
                          </div>
                          <p dir="auto">If you want to check their content you can run:</p>
                          <div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="kubectl get secret |cluster|-admin-user-client -o yaml">
                            <pre>
                              kubectl get secret 
                              <span class="pl-k">|</span>cluster
                              <span class="pl-k">|</span>-admin-user-client -o yaml
                            </pre>
                          </div>
                          <p dir="auto">
                            <code>ca.crt</code> is provided when using a self-signed Certificate Authority (CA), which is the default case but may not be provided as part of the above secret if using a well-known authority.
                          </p>
                          <h3 dir="auto"><a id="user-content-updating-renewing-existing-certificates" class="anchor" aria-hidden="true" href="#updating-renewing-existing-certificates">
                            <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                              <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.   06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                            </svg>
                            </a>Updating/ Renewing existing certificates
                          </h3>
                          <p dir="auto">The renewing process is done automatically by cert-manager. You can check <a href="https://cert-manager.io/docs/usage/certificate/#renewal" rel="nofollow">how they do it on their website</a>.</p>
                          <p dir="auto">The certificate duration is set by the operator to 5 years.</p>
                          <p dir="auto">When this process happens, Redpanda reads the new certificates without needing to restart.</p>
                          <h2 dir="auto">
                            <a id="user-content-using-the-certificates" class="anchor" aria-hidden="true" href="#using-the-certificates">
                              <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                                <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                              </svg>
                            </a>Using the certificates
                          </h2>
                          <p dir="auto">Now that your server is secured, let's see how things work in from the perspective of the client.</p>
                          <p dir="auto">Each certificate has a Subject Alternative Name (SAN) that is set to the Fully Qualified Domain Name (FQDN) of the pods, with and without a wildcard prefix:</p>
                          <div class="snippet-clipboard-content position-relative overflow-auto" data-snippet-clipboard-copy-content="X509v3 Subject Alternative Name: 
                            DNS:   |cluster|.default.svc.cluster.local,
                            DNS: *.|cluster|.default.svc.cluster.local">
                            <pre>
                              <code>X509v3 Subject Alternative Name: 
                                DNS:   |cluster|.default.svc.cluster.local,
                                DNS: *.|cluster|.default.svc.cluster.local
                              </code>
                            </pre>
                          </div>
                          <p dir="auto">The non-wildcard DNS is typically used for bootstrapping. The wildcarded name lets you access instances directly.</p>
                          <p dir="auto">This assumes that the external connectivity is disabled. When external connectivity is enabled and a subdomain is provided, the certificates are produced for external use. For example, the SAN entries would become <code>*.&lt;subdomain&gt;</code> and <code>&lt;subdomain&gt;</code>. See the <a href="https://vectorized.io/docs/kubernetes-connectivity/#Using-names-instead-of-external-IPs" rel="nofollow">Using names instead of external IPs</a> documentation for more information.</p>
                          <p dir="auto">Depending on where the client is located in relation to the Kubernetes cluster running Redpanda, the client certificate secrets may be mounted to local pods or be exported and used directly (as files) inside or outside of the Kubernetes cluster, as long as the Kafka API is exposed to the external network.</p>
                          <p dir="auto">There are multiple scenarios for consuming the certificates from a client application. For example, a client can be in the same Kubernetes cluster, can be in the same namespace, and can have a requirement for mTLS.</p>
                          <p dir="auto">In this example, let's communicate with our cluster using <code>rpk</code>.</p><p dir="auto">Depending on the the connectivity, first we need to get a list of brokers.</p>
                          <p dir="auto">For convenience, let's save the result into a variable called <code>$BROKERS</code>:</p>
                          <p dir="auto">For internal connectivity you can run:</p>
                          <div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="export BROKERS=kubectl get clusters cluster -o=jsonpath='{.status.nodes.internal}' | jq -r 'join(&quot;,&quot;)'">
                            <pre>
                              <span class="pl-k">export</span> BROKERS=kubectl get clusters cluster -o=jsonpath=
                              <span class="pl-s">
                                <span class="pl-pds">'</span>.status.nodes.internal&#125;<span class="pl-pds">'</span>
                              </span> 
                              <span class="pl-k">|</span> jq -r 
                              <span class="pl-s">
                                <span class="pl-pds">'</span>join(",")
                                <span class="pl-pds">'</span>
                              </span>
                            </pre>
                          </div>
                          <p dir="auto">For external connectivity you can run:</p>
                          <div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="export BROKERS=kubectl get clusters cluster -o=jsonpath='{.status.nodes.external}' | jq -r 'join(&quot;,&quot;)'">
                            <pre>
                              <span class="pl-k">export</span> BROKERS=kubectl get clusters cluster -o=jsonpath=
                              <span class="pl-s">
                                <span class="pl-pds">'</span>&#123;.status.nodes.external&#125;<span class="pl-pds">'</span>
                              </span>
                              <span class="pl-k">|</span> jq -r 
                              <span class="pl-s">
                                <span class="pl-pds">'</span>join(",")
                                <span class="pl-pds">'</span>
                              </span>
                            </pre>
                          </div>
                          <p dir="auto">After that we can run our <code>rpk</code> commands.</p>
                          <p dir="auto">If we only have TLS enabled, we just need to provide the CA:</p>
                          <div class="snippet-clipboard-content position-relative overflow-auto" data-snippet-clipboard-copy-content="kubectl exec cluster-sample-tls-0 -- \
                            rpk cluster info  --brokers $BROKERS --tls-truststore=/etc/tls/certs/ca.crt ">
                            <pre>
                              <code>kubectl exec cluster-sample-tls-0 -- \
                                rpk cluster info  --brokers $BROKERS --tls-truststore=/etc/tls/certs/ca.crt
                              </code>
                            </pre>
                          </div>
                          <p dir="auto">For mTLS, we need to provide both the CA and the key-pair:</p>
                          <div class="snippet-clipboard-content position-relative overflow-auto" data-snippet-clipboard-copy-content="kubectl exec cluster-sample-tls-0 -- \
                            rpk cluster info  --brokers $BROKERS --tls-truststore=/etc/tls/certs/ca.crt --tls-key=/etc/tls/certs/tls.key --tls-cert=/etc/tls/certs/tls.crt">
                            <pre>
                              <code>kubectl exec cluster-sample-tls-0 -- \
                                rpk cluster info  --brokers $BROKERS --tls-truststore=/etc/tls/certs/ca.crt --tls-key=/etc/tls/certs/tls.key --tls-cert=/etc/tls/certs/tls.crt
                              </code>
                            </pre>
                          </div>
                          <p dir="auto">Typically, a client runs in a separate pod. If that pod is within the same Kubernetes cluster and namespace, the client pod can directly mount the certificate secrets:</p>
                          <div class="snippet-clipboard-content position-relative overflow-auto" data-snippet-clipboard-copy-content="spec:
                              template:
                                spec:
                                  volumes:
                                    - name: _tlscert_
                                      secret:
                                        secretName: |cluster|-redpanda
                            ...
                            containers:
                                    - name: client
                                      volumeMounts:
                                        - mountPath: /etc/tls/certs
                                          name: _tlscert_">
                            <pre>
                              <code>spec:
                                  template:
                                    spec:
                                      volumes:
                                        - name: _tlscert_
                                          secret:
                                               secretName: |cluster|-redpanda
                                ...
                                containers:
                                        - name: client
                                          volumeMounts:
                                            - mountPath: /etc/tls/certs
                                              name: _tlscert_
                              </code>
                            </pre>
                          </div>
                          <p dir="auto">You can find a working example with mTLS here: <a href="https://github.com/vectorizedio/redpanda/tree/dev/src/go/k8s/tests/e2e/create-topic-with-client-auth">https://github.com/vectorizedio/redpanda/tree/dev/src/go/k8s/tests/e2e/create-topic-with-client-auth</a></p>
                          <p dir="auto">If the client pod runs in a separate namespace within the same Kubernetes cluster, the secret needs to be copied over.</p>
                          <p dir="auto">Similarly, if the client is on a separate network, but accessible through an external IP address or name (see <a href="https://vectorized.io/docs/kubernetes-connectivity" rel="nofollow">https://vectorized.io/docs/kubernetes-connectivity</a>) the secrets need to become available by copying over the resource or exporting the CA <code>ca.crt</code> and key-pair <code>tls.crt</code> and <code>tls.key</code> as files. For example, to retrieve tls.crt:</p>
                          <div class="snippet-clipboard-content position-relative overflow-auto" data-snippet-clipboard-copy-content="kubectl get secret |cluster|-user-client -o go-template='{{index .data &quot;ca.crt&quot;}}' | base64 -d - &gt; tls.crt">
                            <pre>
                              <code>kubectl get secret |cluster|-user-client -o go-template='&#123;&#123;index .data "ca.crt"&#125;&#125;' | base64 -d - &gt; tls.crt</code>
                            </pre>
                          </div>
                          <p dir="auto">Alternatively, you can retrieve the whole resource:</p>
                          <div class="snippet-clipboard-content position-relative overflow-auto" data-snippet-clipboard-copy-content="kubectl get secret |cluster|-_user-client_ --namespace=default -o yaml">
                            <pre>
                              <code>kubectl get secret |cluster|-_user-client_ --namespace=default -o yaml</code>
                            </pre>
                          </div>
                          <p dir="auto">Once the secrets are available as files, it is possible to use <code>rpk</code> to connect with the brokers. Here we consider external brokers, but they could be replaced with internal addresses if accessible.</p>
                          <p dir="auto">For convenience, let's create a file and store our values there. We can pass this whole file as an argument for <code>rpk</code> instead of having to retype it all over again as flags. Let's name it <code>rpk-config.yaml</code>:</p>
                          <div class="snippet-clipboard-content position-relative overflow-auto" data-snippet-clipboard-copy-content="rpk:
                            kafka_api:
                              brokers:
                                - 0.external-domain.:&lt;nodeport&gt;
                                - 1.external-domain.:&lt;nodeport&gt;
                                - 2.external-domain.:&lt;nodeport&gt;
                              tls:
                                key_file: tls.key
                                cert_file: tls.crt
                                truststore_file: ca.crt">
                              <pre>
                                <code>rpk:
                                  kafka_api:
                                    brokers:
                                      - 0.external-domain.:&lt;nodeport&gt;
                                      - 1.external-domain.:&lt;nodeport&gt;
                                      - 2.external-domain.:&lt;nodeport&gt;
                                    tls:
                                      key_file: tls.key
                                      cert_file: tls.crt
                                      truststore_file: ca.crt
                                </code>
                              </pre>
                          </div>
                          <p dir="auto">Pass your saved <code>rpk-config.yaml</code> as a flag to <code>rpk</code> in order to talk to Redpanda:</p>
                          <div class="snippet-clipboard-content position-relative overflow-auto" data-snippet-clipboard-copy-content="rpk cluster info --config rpk-config.yaml">
                            <pre>
                              <code>rpk cluster info --config rpk-config.yaml</code>
                            </pre>
                          </div>
                          <p dir="auto">You can find more examples in our GitHub folder:</p>
                          <ul dir="auto">
                            <li><a href="https://github.com/vectorizedio/redpanda/tree/dev/src/go/k8s/tests/e2e/create-topic-given-cert-secret">https://github.com/vectorizedio/redpanda/tree/dev/src/go/k8s/tests/e2e/create-topic-given-cert-secret</a></li>
                            <li><a href="https://github.com/vectorizedio/redpanda/tree/dev/src/go/k8s/tests/e2e/create-topic-given-issuer-with-client-auth">https://github.com/vectorizedio/redpanda/tree/dev/src/go/k8s/tests/e2e/create-topic-given-issuer-with-client-auth</a></li>
                          </ul>
                    </article>
                  </div>
                </div>
                </readme-toc>
                <details class="details-reset details-overlay details-overlay-dark" id="jumpto-line-details-dialog">
                  <summary data-hotkey="l" aria-label="Jump to line"></summary>
                  <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
                    <option>
                    </option>
                    <form>
                    </form>
                    <form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get">
                      <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus/>
                      <button data-close-dialog="" type="submit" data-view-component="true" class="btn">  Go</button>
                    </form>    
                  </details-dialog>
                </details>
                <div class="Popover anim-scale-in js-tagsearch-popover"
                  hidden
                  data-tagsearch-url="/vectorizedio/redpanda/find-definition"
                  data-tagsearch-ref="dev">
                  <div class="Popover-message Popover-message--large Popover-message--top-left TagsearchPopover mt-1 mb-4 mx-auto Box color-shadow-large">
                    <div class="TagsearchPopover-content js-tagsearch-popover-content overflow-auto" style="will-change:transform;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <footer class="footer width-full container-xl p-responsive" role="contentinfo">
      <div class="position-relative d-flex flex-items-center pb-2 f6 color-fg-muted border-top color-border-muted flex-column-reverse flex-lg-row flex-wrap flex-lg-nowrap mt-6 pt-6">
        <ul class="list-style-none d-flex flex-wrap col-0 col-lg-2 flex-justify-start flex-lg-justify-between mb-2 mb-lg-0">
          <li class="mt-2 mt-lg-0 d-flex flex-items-center">
            <a aria-label="Homepage" title="GitHub" class="footer-octicon mr-2" href="https://github.com">
              <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
            <span>&copy; 2022 GitHub, Inc.</span>
          </li>
        </ul>
        <ul class="list-style-none d-flex flex-wrap col-12 col-lg-8 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
          <li class="mr-3 mr-lg-0"><a href="https://docs.github.com/en/github/site-policy/github-terms-of-service" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to terms&quot;,&quot;label&quot;:&quot;text:terms&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="8dcb5f5b3d687831abef853dc585d47d274f33362cc7bd5bd824816de306c281" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to terms&quot;,&quot;label&quot;:&quot;text:terms&quot;}">Terms</a></li>
          <li class="mr-3 mr-lg-0"><a href="https://docs.github.com/en/github/site-policy/github-privacy-statement" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="b9a0ccea2f29b82d504898fe06453fa051883a23dddc03d4fd288cf71239c2c8" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;}">Privacy</a></li>
          <li class="mr-3 mr-lg-0"><a data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="629854281794a5f53202b9c66226e9f5d840532466e6572226327126f99f7775" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;}" href="https://github.com/security">Security</a></li>
          <li class="mr-3 mr-lg-0"><a href="https://www.githubstatus.com/" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to status&quot;,&quot;label&quot;:&quot;text:status&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="12a48c7e589fdc9db9cc3d67c4d1820d5dc51cbfb89cdf67a529c77000e7f952" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to status&quot;,&quot;label&quot;:&quot;text:status&quot;}">Status</a></li>
          <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to help, text:Docs" href="https://docs.github.com">Docs</a></li>
          <li class="mr-3 mr-lg-0"><a href="https://support.github.com?tags=dotcom-footer" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to contact&quot;,&quot;label&quot;:&quot;text:contact&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="f794a8fac7db7ca0f4657abdfb4559f5581e1cc915e6e2c3573a63706a84d7d3" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to contact&quot;,&quot;label&quot;:&quot;text:contact&quot;}">Contact GitHub</a></li>
          <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to Pricing&quot;,&quot;label&quot;:&quot;text:Pricing&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="04bf90611be9d41b8d3e5a9b54b2ea33e9dcec8c74c6937c2982fc44cee04cff" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to Pricing&quot;,&quot;label&quot;:&quot;text:Pricing&quot;}">Pricing</a></li>
          <li class="mr-3 mr-lg-0"><a href="https://docs.github.com" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to api&quot;,&quot;label&quot;:&quot;text:api&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="8d5bc534ffa66055b4c13bdebba17fde2c8d945741cc18f8e3895f2b22252d08" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to api&quot;,&quot;label&quot;:&quot;text:api&quot;}">API</a></li>
          <li class="mr-3 mr-lg-0"><a href="https://services.github.com" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to training&quot;,&quot;label&quot;:&quot;text:training&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="57a4fdb42b965070eca3dbad2bc51d80bc80e6f2f37e5a77607081f9a8259c93" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to training&quot;,&quot;label&quot;:&quot;text:training&quot;}">Training</a></li>
          <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to blog&quot;,&quot;label&quot;:&quot;text:blog&quot;,&quot;originating_url&quot;:&quot;https://github.com/vectorizedio/redpanda/blob/dev/docs/www/tls-kubernetes.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="2ad2da9b9d8a5e0770832eed05017608874c03e0ecfd2dbae7ebd011773f2a7f" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to blog&quot;,&quot;label&quot;:&quot;text:blog&quot;}">Blog</a></li>
          <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>
        </ul>
      </div>
      <div class="d-flex flex-justify-center pb-6">
        <span class="f6 color-fg-muted"></span>
      </div>
    </footer>
    <div id="ajax-error-message" class="ajax-error-message flash flash-error" hidden>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
        <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
      </svg>
      <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
          <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
        </svg>
      </button>
      You can’t perform that action at this time.
    </div>
    <div class="js-stale-session-flash flash flash-warn flash-banner" hidden>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
        <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
      </svg>
      <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <template id="site-details-dialog">
      <details class="details-reset details-overlay details-overlay-dark lh-default color-fg-default hx_rsm" open>
        <summary role="button" aria-label="Close dialog"></summary>
        <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal" aria-labelledby="box-title">
          <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
              <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
            </svg>
          </button>
          <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
        </details-dialog>
      </details>
    </template>
    <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
      <div class="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large" style="width:360px;">
      </div>
    </div>
    <template id="snippet-clipboard-copy-button">
      <div class="zeroclipboard-container position-absolute right-0 top-0">
        <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
          <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
        </svg>
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
          <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
          </svg>
        </clipboard-copy>
      </div>
    </template>
  </body>
</html>

