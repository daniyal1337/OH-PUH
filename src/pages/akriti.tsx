import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Akrit from "@/components/containers/project/Akrit";
import UxProcess from "@/components/containers/service-details/UxProcess";

function akriti() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="Akriti Gulati"
            navigation="Akriti Gulati"
            parent="Projects"
            parentLink="our-projects"
          />
          <Akrit/>
          <UxProcess />
        </Layout>
      );
    };

export default akriti
