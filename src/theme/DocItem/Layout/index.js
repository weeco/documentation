import React from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import styles from './styles.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Icon from "@material-ui/core/Icon";
import ContributionIcon from "../../../../static/img/contribution.svg";

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return {
    hidden,
    mobile,
    desktop,
  };
}
export default function DocItemLayout({children}) {
  const docTOC = useDocTOC();
  const { metadata } = useDoc();
  const { editUrl } = metadata;
  return (
    <div className="row">
      <div className={clsx("col", !docTOC.hidden && styles.docItemCol)}>
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          {/* BEGIN COMPONENT SWIZZLING. Add link to repository.
           */}
          <section className={styles.issueLinkSeparator}>
            <BrowserOnly>
              {() => (
                <div className="row">
                  <div className="col">
                    <a
                      href={
                        "mailto:rp-docs-feedback@redpanda.com?subject=Documentation Feedback&body=Doc url: " +
                        window.location.href
                      }
                    >
                      <Icon className={styles.mailIcon}>email</Icon>
                      <span> Share your feedback</span>
                    </a>
                  </div>
                  <div className={clsx("col", styles.reportIssueText)}>
                    <a
                      href={editUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={styles.contributionIcon}
                    >
                      <ContributionIcon />
                      <span> Make a contribution</span>
                    </a>
                  </div>
                </div>
              )}
            </BrowserOnly>
          </section>
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}
