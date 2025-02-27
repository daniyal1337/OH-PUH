import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Qoqotech from "@/components/containers/project/Qoqotech";
import UxProcess from "@/components/containers/service-details/UxProcess";

function qoqo() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="QOQO Tech"
            navigation="QOQO Tech"
            parent="Projects"
            parentLink="our-projects"
          />
          <Qoqotech/>
          <UxProcess />
        </Layout>
      );
    };

export default qoqo
