import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Skyn from "@/components/containers/project/Skyn";
import UxProcess from "@/components/containers/service-details/UxProcess";

function sky() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="Skyn & Shower "
            navigation="Skyn & Shower"
            parent="Projects"
            parentLink="our-projects"
          />
          <Skyn/>
          <UxProcess />
        </Layout>
      );
    };
export default sky
