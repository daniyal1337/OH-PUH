import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Velve from "@/components/containers/project/Velve";
import UxProcess from "@/components/containers/service-details/UxProcess";

function velvet() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="Velvet Imperial"
            navigation="Velvet Imperial"
            parent="Projects"
            parentLink="our-projects"
          />
          <Velve/>
          <UxProcess />
        </Layout>
      );
    };

export default velvet
