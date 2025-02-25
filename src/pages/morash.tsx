import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Moras from "@/components/containers/project/Moras";
import UxProcess from "@/components/containers/service-details/UxProcess";

function morash() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="Morash"
            navigation="Morash"
            parent="Projects"
            parentLink="our-projects"
          />
          <Moras/>
          <UxProcess />
        </Layout>
      );
    };

export default morash
