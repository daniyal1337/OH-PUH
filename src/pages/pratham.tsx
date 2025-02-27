import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Prtham from "@/components/containers/project/Prtham";
import UxProcess from "@/components/containers/service-details/UxProcess";
function pratham() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="Pratham Test Prep"
            navigation="Prtaham Test Prep"
            parent="Projects"
            parentLink="our-projects"
          />
          <Prtham/>
          <UxProcess />
        </Layout>
      );
    };

export default pratham
