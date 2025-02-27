import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Inno from "@/components/containers/project/Inno";
import UxProcess from "@/components/containers/service-details/UxProcess";

function inno() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="Inno Health"
            navigation="Inno Health"
            parent="Projects"
            parentLink="our-projects"
          />
          <Inno/>
          <UxProcess />
        </Layout>
      );
    };


export default inno
