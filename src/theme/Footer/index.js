/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 import React from 'react';
 import clsx from 'clsx';
 import Link from '@docusaurus/Link';
 import {useThemeConfig} from '@docusaurus/theme-common';
 import useBaseUrl from '@docusaurus/useBaseUrl';
 import isInternalUrl from '@docusaurus/isInternalUrl';
 import styles from './styles.module.css';
 import ThemedImage from '@theme/ThemedImage';
 import IconExternalLink from '@theme/IconExternalLink';
 
 function FooterLink({to, href, label, prependBaseUrlToHref, ...props}) {
   const toUrl = useBaseUrl(to);
   const normalizedHref = useBaseUrl(href, {
     forcePrependBaseUrl: true,
   });
   return (
     <Link
       className="footer__link-item"
       {...(href
         ? {
             href: prependBaseUrlToHref ? normalizedHref : href,
           }
         : {
             to: toUrl,
           })}
       {...props}>
       {href && !isInternalUrl(href) ? (
         <span>
           {label}
           <IconExternalLink />
         </span>
       ) : (
         label
       )}
     </Link>
   );
 }
 
 function FooterLogo({sources, alt, width, height}) {
   return (
     <ThemedImage
       className="footer__logo"
       alt={alt}
       sources={sources}
       width={width}
       height={height}
     />
   );
 }
 
 function MultiColumnLinks({links}) {
   return (
     <>
       {links.map((linkItem, i) => (
         <div key={i} className="col footer__col">
           <div className="footer__title">{linkItem.title}</div>
           <ul className="footer__items">
             {linkItem.items.map((item, key) =>
               item.html ? (
                 <li
                   key={key}
                   className="footer__item" // Developer provided the HTML, so assume it's safe.
                   // eslint-disable-next-line react/no-danger
                   dangerouslySetInnerHTML={{
                     __html: item.html,
                   }}
                 />
               ) : (
                 <li key={item.href || item.to} className="footer__item">
                   <FooterLink {...item} />
                 </li>
               ),
             )}
           </ul>
         </div>
       ))}
     </>
   );
 }
 
 function SimpleLinks({links}) {
   return (
     <div className="footer__links">
       {links.map((item, key) => (
         <>
           {item.html ? (
             <span
               key={key}
               className="footer__link-item" // Developer provided the HTML, so assume it's safe.
               // eslint-disable-next-line react/no-danger
               dangerouslySetInnerHTML={{
                 __html: item.html,
               }}
             />
           ) : (
             <FooterLink {...item} />
           )}
           {links.length !== key + 1 && (
             <span className="footer__link-separator">·</span>
           )}
         </>
       ))}
     </div>
   );
 }
 
 function isMultiColumnFooterLinks(links) {
   return 'title' in links[0];
 }
 
 function Footer() {
   const {footer} = useThemeConfig();
   const {copyright, links = [], logo = {}} = footer || {};
   const sources = {
     light: useBaseUrl(logo.src),
     dark: useBaseUrl(logo.srcDark || logo.src),
   };
 
   if (!footer) {
     return null;
   }
 
   return (
     <footer
       className={clsx('footer', {
         'footer--dark': footer.style === 'dark',
       })}>
       <div className="container container-fluid">
         {links &&
           links.length > 0 &&
           (isMultiColumnFooterLinks(links) ? (
               <div className="row footer__links">
                 <div className="col footer__col logo__col">
                 {logo && (logo.src || logo.srcDark) && (
                 <div className="margin-bottom--sm">
                   {logo.href ? (
                     <Link href={logo.href} target="_self">
                       <FooterLogo
                         alt={logo.alt}
                         sources={sources}
                         width={logo.width}
                         height={logo.height} />
                     </Link>
                     ) : (
                       <FooterLogo alt={logo.alt} sources={sources} />
                     )}
                 </div>
                 )}
                 {copyright ? (
                   <div className="footer__copyright" // Developer provided the HTML, so assume it's safe.
                       // eslint-disable-next-line react/no-danger
                     dangerouslySetInnerHTML={{
                       __html: copyright,
                     }}
                   />
                 ) : null}
               </div>
               <MultiColumnLinks links={links} />
               <div className="col footer__col">
                 <div className="footer__title">Connect</div>
                 <ul className="footer__items">
                   <li class="footer__item">
                     <a href="https://redpanda.com/contact" 
                       target="_self" 
                       rel="noopener noreferrer" 
                       class="footer__link-item">
                         Contact
                       </a>
                   </li>
                   <li class="footer__item">
                     <a href="https://redpanda.com/feedback" 
                       target="_self" 
                       rel="noopener noreferrer" 
                       class="footer__link-item">
                         Feedback
                     </a>
                   </li>
                   <li class="footer__item">
                     <a href="https://redpanda.com/scholarship" 
                       target="_self" 
                       rel="noopener noreferrer" 
                       class="footer__link-item">
                         h4ck::73h::pl4n37 scholarship
                       </a>
                     </li>
                 </ul>
                 <div class="social-links">
                   <a href="https://twitter.com/redpandadata" 
                     rel="noopener noreferrer" target="_blank">
                     <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI1LjA4MTEgNS41NUMyNC4yNTYxIDUuOTI1IDIzLjQzMTEgNi4xNSAyMi41MzExIDYuM0MyMi45MDYxIDYuMjI1IDIzLjUwNjEgNS40NzUgMjMuODA2MSA1LjE3NUMyNC4xODExIDQuNzI1IDI0LjQ4MTEgNC4yIDI0LjYzMTEgMy42NzVDMjQuNjMxMSAzLjYgMjQuNzA2MSAzLjYgMjQuNjMxMSAzLjUyNUMyNC41NTYxIDMuNTI1IDI0LjU1NjEgMy41MjUgMjQuNDgxMSAzLjUyNUMyMy41MDYxIDQuMDUgMjIuNTMxMSA0LjQyNSAyMS40ODExIDQuNjVDMjEuNDA2MSA0LjY1IDIxLjMzMTEgNC42NSAyMS4yNTYxIDQuNTc1QzIxLjE4MTEgNC41IDIxLjEwNjEgNC4zNSAyMC45NTYxIDQuMjc1QzIwLjUwNjEgMy45IDIwLjA1NjEgMy42IDE5LjUzMTEgMy4zNzVDMTguODU2MSAzLjA3NSAxOC4wMzExIDMgMTcuMjgxMSAzQzE2LjUzMTEgMy4wNzUgMTUuNzgxMSAzLjIyNSAxNS4xODExIDMuNkMxNC41MDYxIDMuOTc1IDEzLjkwNjEgNC40MjUgMTMuNDU2MSA1LjAyNUMxMy4wMDYxIDUuNjI1IDEyLjYzMTEgNi4zIDEyLjQwNjEgNy4wNUMxMi4yNTYxIDcuOCAxMi4yNTYxIDguNDc1IDEyLjMzMTEgOS4yMjVDMTIuMzMxMSA5LjM3NSAxMi4zMzExIDkuMzc1IDEyLjI1NjEgOS4zNzVDOC4xMzEwNyA4Ljc3NSA0LjY4MTA3IDcuMjc1IDEuOTA2MDcgNC4xMjVDMS43NTYwNyAzLjk3NSAxLjc1NjA3IDMuOTc1IDEuNjA2MDcgNC4xMjVDMC40ODEwNjYgNiAxLjA4MTA3IDguOTI1IDIuNTgxMDcgMTAuMzVDMi44MDYwNyAxMC41NzUgMi45NTYwNyAxMC43MjUgMy4xODEwNyAxMC44NzVDMy4xMDYwNyAxMC44NzUgMi4wNTYwNyAxMC44IDEuMTU2MDcgMTAuMzVDMS4wMDYwNyAxMC4yNzUgMS4wMDYwNyAxMC4zNSAwLjkzMTA2NiAxMC40MjVDMC45MzEwNjYgMTAuNjUgMC45MzEwNjYgMTAuOCAwLjkzMTA2NiAxMS4wMjVDMS4xNTYwNyAxMi45IDIuNDMxMDcgMTQuNTUgNC4yMzEwNyAxNS4yMjVDNC40NTYwNyAxNS4zIDQuNjgxMDcgMTUuMzc1IDQuOTA2MDcgMTUuNDVDNC41MzEwNyAxNS41MjUgNC4wODEwNyAxNS42IDIuOTU2MDcgMTUuNTI1QzIuODA2MDcgMTUuNTI1IDIuNzMxMDcgMTUuNiAyLjgwNjA3IDE1LjY3NUMzLjYzMTA3IDE4IDUuNTA2MDcgMTguNzUgNi45MzEwNyAxOS4xMjVDNy4wODEwNyAxOS4xMjUgNy4zMDYwNyAxOS4xMjUgNy40NTYwNyAxOS4yQzcuMDA2MDcgMTkuODc1IDUuNDMxMDcgMjAuNCA0LjY4MTA3IDIwLjdDMy4zMzEwNyAyMS4xNSAxLjgzMTA3IDIxLjM3NSAwLjQwNjA2NiAyMS4yMjVDMC4xODEwNjYgMjEuMjI1IDAuMTA2MDY2IDIxLjIyNSAwLjAzMTA2NiAyMS4yMjVDLTAuMDQzOTM0IDIxLjMgMC4wMzEwNjYgMjEuMyAwLjEwNjA2NiAyMS4zNzVDMC40MDYwNjYgMjEuNiAwLjcwNjA2NiAyMS43NSAxLjAwNjA3IDIxLjlDMS45MDYwNyAyMi4zNSAyLjg4MTA3IDIyLjggMy44NTYwNyAyMy4wMjVDOC45NTYwNyAyNC40NSAxNC43MzExIDIzLjQgMTguNTU2MSAxOS41NzVDMjEuNTU2MSAxNi41NzUgMjIuNjA2MSAxMi40NSAyMi42MDYxIDguMzI1QzIyLjYwNjEgOC4xNzUgMjIuODMxMSA4LjEgMjIuOTA2MSA4LjAyNUMyMy42NTYxIDcuNDI1IDI0LjMzMTEgNi43NSAyNC45MzExIDUuOTI1QzI1LjA4MTEgNS43NzUgMjUuMDgxMSA1LjYyNSAyNS4wODExIDUuNTVDMjUuMTU2MSA1LjQ3NSAyNS4xNTYxIDUuNDc1IDI1LjA4MTEgNS41NVoiIGZpbGw9IiM4MjgyODIiLz4KPC9zdmc+Cg==" alt="twitter" />
                   </a>
                   <a href="https://join.slack.com/t/redpandacommunity/shared_invite/zt-ng2ze1uv-l5VMWSGQHB9gp47~kNnYGA" 
                     rel="noopener noreferrer" target="_blank">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjU5NzQgMTMuODcyNkM5LjQwMSAxMy44NzI2IDguNDMwMTggMTQuODQzNCA4LjQzMDE4IDE2LjAzOThWMjEuNDU3OUM4LjQzMDE4IDIyLjY1NDMgOS40MDEgMjMuNjI1MSAxMC41OTc0IDIzLjYyNTFDMTEuNzkzOCAyMy42MjUxIDEyLjc2NDcgMjIuNjU0MyAxMi43NjQ3IDIxLjQ1NzlWMTYuMDM5OEMxMi43NjQ3IDE0Ljg0MzQgMTEuNzkzOCAxMy44NzI2IDEwLjU5NzQgMTMuODcyNloiIGZpbGw9IiM4MjgyODIiLz4KPHBhdGggZD0iTTMuMDE2MTEgMTYuMDM5OEMzLjAxNjExIDE3LjIzNjIgMy45ODY5NCAxOC4yMDcgNS4xODMzNSAxOC4yMDdDNi4zNzk3NyAxOC4yMDcgNy4zNTA1OSAxNy4yMzYyIDcuMzUwNTkgMTYuMDM5OFYxMy44NzI2SDUuMTgzMzVDMy45ODY5NCAxMy44NzI2IDMuMDE2MTEgMTQuODQzNCAzLjAxNjExIDE2LjAzOThaIiBmaWxsPSIjODI4MjgyIi8+CjxwYXRoIGQ9Ik0xMC42MDE0IDNDMTAuNjAxNCAzIDEwLjU5NzQgMyAxMC42MDE0IDNDOS40MDEgMyA4LjQzMDE4IDMuOTcwODMgOC40MzAxOCA1LjE2NzI0QzguNDMwMTggNi4zNjM2NSA5LjQwMSA3LjMzNDQ4IDEwLjU5NzQgNy4zMzQ0OEgxMi43NjQ3QzEyLjc2NDcgNi4xMDU4NCAxMi43NjQ3IDYuNDAzOTQgMTIuNzY0NyA1LjE2MzIxQzEyLjc2NDcgMy45NjY4IDExLjc5MzggMyAxMC42MDE0IDNaIiBmaWxsPSIjODI4MjgyIi8+CjxwYXRoIGQ9Ik01LjE2NzI0IDEyLjc3MjdIMTAuNTk3NEMxMS43OTM4IDEyLjc3MjcgMTIuNzY0NyAxMS44MDE5IDEyLjc2NDcgMTAuNjA1NUMxMi43NjQ3IDkuNDA5MDcgMTEuNzkzOCA4LjQzODI0IDEwLjU5NzQgOC40MzgyNEg1LjE2NzI0QzMuOTcwODMgOC40MzQyMiAzIDkuNDA1MDQgMyAxMC42MDU1QzMgMTEuODA1OSAzLjk3MDgzIDEyLjc3MjcgNS4xNjcyNCAxMi43NzI3WiIgZmlsbD0iIzgyODI4MiIvPgo8cGF0aCBkPSJNMjEuNDM3NiA4LjQzNDMzQzIwLjI0MTIgOC40MzQzMyAxOS4yNzQ0IDkuNDAxMTMgMTkuMjc0NCAxMC41OTc1VjEwLjYwMTZWMTIuNzY4OEgyMS40NDE3QzIyLjYzODEgMTIuNzY4OCAyMy42MDg5IDExLjc5OCAyMy42MDg5IDEwLjYwMTZDMjMuNjA4OSA5LjQwNTE1IDIyLjYzODEgOC40MzQzMyAyMS40Mzc2IDguNDM0MzNaIiBmaWxsPSIjODI4MjgyIi8+CjxwYXRoIGQ9Ik0xMy44NjA0IDUuMTY3MjRWMTAuNjAxNUMxMy44NjA0IDExLjc5NzkgMTQuODMxMiAxMi43Njg3IDE2LjAyNzYgMTIuNzY4N0MxNy4yMjQgMTIuNzY4NyAxOC4xOTQ4IDExLjc5NzkgMTguMTk0OCAxMC42MDE1VjUuMTY3MjRDMTguMTk0OCAzLjk3MDgzIDE3LjIyNCAzIDE2LjAyNzYgM0MxNC44MzEyIDMgMTMuODYwNCAzLjk3MDgzIDEzLjg2MDQgNS4xNjcyNFoiIGZpbGw9IiM4MjgyODIiLz4KPHBhdGggZD0iTTE4LjE5NDggMjEuNDU3OEMxOC4xOTQ4IDIwLjI2MTQgMTcuMjI0IDE5LjI5MDUgMTYuMDI3NiAxOS4yOTA1SDEzLjg2MDRWMjEuNDU3OEMxMy44NjA0IDIyLjY1NDIgMTQuODMxMiAyMy42MjEgMTYuMDI3NiAyMy42MjFDMTcuMjI0IDIzLjYyNSAxOC4xOTQ4IDIyLjY1NDIgMTguMTk0OCAyMS40NTc4WiIgZmlsbD0iIzgyODI4MiIvPgo8cGF0aCBkPSJNMjEuNDU3OCAxMy44NzI2SDE2LjAyNzZDMTQuODMxMiAxMy44NzI2IDEzLjg2MDQgMTQuODQzNCAxMy44NjA0IDE2LjAzOThDMTMuODYwNCAxNy4yMzYyIDE0LjgzMTIgMTguMjA3IDE2LjAyNzYgMTguMjA3SDIxLjQ1NzhDMjIuNjU0MiAxOC4yMDcgMjMuNjI1IDE3LjIzNjIgMjMuNjI1IDE2LjAzOThDMjMuNjI1IDE0Ljg0MzQgMjIuNjU0MiAxMy44NzI2IDIxLjQ1NzggMTMuODcyNloiIGZpbGw9IiM4MjgyODIiLz4KPC9zdmc+Cg==" alt="slack" />
                   </a>
                   <a href="https://github.com/redpanda-data/redpanda" 
                     rel="noopener noreferrer" target="_blank">
                       <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzIDJDNi45MjI1IDIgMiA2Ljg0IDIgMTIuODA5M0MyIDE3LjU4NjEgNS4xNTE1IDIxLjYzNjggOS41MjEyNSAyMy4wNjVDMTAuMDcxMiAyMy4xNjY3IDEwLjI3MjkgMjIuODMyMiAxMC4yNzI5IDIyLjU0NTJDMTAuMjcyOSAyMi4yODg2IDEwLjI2MzggMjEuNjA4NCAxMC4yNTkyIDIwLjcwNzNDNy4xOTkzMyAyMS4zNTkxIDYuNTU0IDE5LjI1NzIgNi41NTQgMTkuMjU3MkM2LjA1MzUgMTguMDA5NiA1LjMzMDI1IDE3LjY3NTkgNS4zMzAyNSAxNy42NzU5QzQuMzMzODMgMTcuMDA1OCA1LjQwNzI1IDE3LjAxOTYgNS40MDcyNSAxNy4wMTk2QzYuNTExODMgMTcuMDk0NyA3LjA5MjA4IDE4LjEzMzMgNy4wOTIwOCAxOC4xMzMzQzguMDcyOTIgMTkuNzg2MSA5LjY2NyAxOS4zMDg1IDEwLjI5NTggMTkuMDMyNkMxMC4zOTQ4IDE4LjMzMzIgMTAuNjc4MSAxNy44NTc0IDEwLjk5MjUgMTcuNTg3QzguNTQ5NTggMTcuMzE2NiA1Ljk4MiAxNi4zODcxIDUuOTgyIDEyLjI0NTZDNS45ODIgMTEuMDY1OCA2LjQwODI1IDEwLjEwMTUgNy4xMTQwOCA5LjM0NTI1QzYuOTkwMzMgOS4wNzIwOCA2LjYxOTA4IDcuOTczIDcuMjEwMzMgNi40ODQzM0M3LjIxMDMzIDYuNDg0MzMgOC4xMzE1OCA2LjE5NDY3IDEwLjIzNTMgNy41OTI1OEMxMS4xMTUzIDcuMzUyNDIgMTIuMDUwMyA3LjIzMzI1IDEyLjk4NTMgNy4yMjc3NUMxMy45MjAzIDcuMjMzMjUgMTQuODU1MyA3LjM1MjQyIDE1LjczNTMgNy41OTI1OEMxNy44MjUzIDYuMTk0NjcgMTguNzQ2NiA2LjQ4NDMzIDE4Ljc0NjYgNi40ODQzM0MxOS4zMzc4IDcuOTczIDE4Ljk2NjYgOS4wNzIwOCAxOC44NTY2IDkuMzQ1MjVDMTkuNTU3OCAxMC4xMDE1IDE5Ljk4NDEgMTEuMDY1OCAxOS45ODQxIDEyLjI0NTZDMTkuOTg0MSAxNi4zOTgxIDE3LjQxMjggMTcuMzEyIDE0Ljk2NTMgMTcuNTc3OEMxNS4zNTAzIDE3LjkwMjMgMTUuNzA3OCAxOC41NjUxIDE1LjcwNzggMTkuNTc4QzE1LjcwNzggMjEuMDI0NSAxNS42OTQxIDIyLjE4NjggMTUuNjk0MSAyMi41Mzc5QzE1LjY5NDEgMjIuODIxMiAxNS44ODY2IDIzLjE1OTQgMTYuNDUwMyAyMy4wNTEyQzIwLjg1MTIgMjEuNjMyMiAyNCAxNy41Nzg3IDI0IDEyLjgwOTNDMjQgNi44NCAxOS4wNzQ4IDIgMTMgMloiIGZpbGw9IiM4MjgyODIiLz4KPC9zdmc+Cg==" alt="github" />
                   </a>
                   <a href="https://www.linkedin.com/company/redpanda-data" 
                     rel="noopener noreferrer" target="_blank">
                       <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIzLjU1MjUgMTUuNjMyVjIzLjI2ODJDMjMuNTUyNSAyMy40ODIzIDIzLjQwOTcgMjMuNjI1MSAyMy4xOTU2IDIzLjYyNTFIMTkuMjcwNUMxOS4wNTY0IDIzLjYyNTEgMTguOTEzNiAyMy40ODIzIDE4LjkxMzYgMjMuMjY4MlYxNi4yMDI5QzE4LjkxMzYgMTQuMzQ3NCAxOC4yNzEzIDEzLjA2MjggMTYuNTU4NSAxMy4wNjI4QzE1LjI3MzkgMTMuMDYyOCAxNC41NjAyIDEzLjkxOTIgMTQuMjAzNCAxNC43NzU2QzE0LjA2MDcgMTUuMDYxIDE0LjA2MDcgMTUuNDg5MiAxNC4wNjA3IDE1LjkxNzRWMjMuMzM5NkMxNC4wNjA3IDIzLjU1MzcgMTMuOTE3OSAyMy42OTY0IDEzLjcwMzggMjMuNjk2NEg5Ljc3ODY3QzkuNTY0NTcgMjMuNjk2NCA5LjQyMTgzIDIzLjU1MzcgOS40MjE4MyAyMy4zMzk2QzkuNDIxODMgMjEuNDg0MSA5LjQ5MzIgMTIuMjc3NyA5LjQyMTgzIDEwLjEzNjdDOS40MjE4MyA5LjkyMjY0IDkuNTY0NTcgOS43Nzk5IDkuNzc4NjcgOS43Nzk5SDEzLjcwMzhDMTMuOTE3OSA5Ljc3OTkgMTQuMDYwNyA5LjkyMjY0IDE0LjA2MDcgMTAuMTM2N1YxMS43NzgyQzE0LjA2MDcgMTEuNzc4MiAxNC4wNjA3IDExLjc3ODIgMTQuMDYwNyAxMS44NDk1VjExLjc3ODJDMTQuNzAzIDEwLjg1MDQgMTUuNzczNSA5LjQ5NDQ0IDE4LjE5OTkgOS40OTQ0NEMyMS4yNjg3IDkuMzUxNyAyMy41NTI1IDExLjM1IDIzLjU1MjUgMTUuNjMyWk0yLjY0MTk5IDIzLjYyNTFINi41NjcxNkM2Ljc4MTI2IDIzLjYyNTEgNi45MjQgMjMuNDgyMyA2LjkyNCAyMy4yNjgyVjEwLjA2NTRDNi45MjQgOS44NTEyNyA2Ljc4MTI2IDkuNzA4NTQgNi41NjcxNiA5LjcwODU0SDIuNjQxOTlDMi40Mjc4OSA5LjcwODU0IDIuMjg1MTYgOS44NTEyNyAyLjI4NTE2IDEwLjA2NTRWMjMuMjY4MkMyLjI4NTE2IDIzLjQxMSAyLjQyNzg5IDIzLjYyNTEgMi42NDE5OSAyMy42MjUxWiIgZmlsbD0iIzgyODI4MiIvPgo8cGF0aCBkPSJNNi45MjQzMSA1LjQ5Nzg0QzYuOTI0MzEgNi44NTM4MSA1Ljc4MjQ0IDcuOTk1NjggNC40MjY0NyA3Ljk5NTY4QzMuMDcwNSA3Ljk5NTY4IDIgNi44NTM4MSAyIDUuNDk3ODRDMiA0LjE0MTg3IDMuMTQxODcgMyA0LjQ5Nzg0IDNDNS44NTM4MSAzIDYuOTI0MzEgNC4xNDE4NyA2LjkyNDMxIDUuNDk3ODRaIiBmaWxsPSIjODI4MjgyIi8+Cjwvc3ZnPgo=" alt="linkedin" />
                   </a>
                 </div>
               </div>
             </div>
           ) : (
             <div className="footer__links text--center">
               <SimpleLinks links={links} />
             </div>
           ))}
       </div>
     </footer>
   );
 }
 
 export default React.memo(Footer);
 