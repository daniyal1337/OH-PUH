import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Kokil from "@/components/containers/project/Kokil";
import UxProcess from "@/components/containers/service-details/UxProcess";

function kokila() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="Kokila Herbals"
            navigation="Kokila Herbals"
            parent="Projects"
            parentLink="our-projects"
          />
          <Kokil/>
          <UxProcess />
        </Layout>
      );
    };

export default kokila
