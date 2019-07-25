import React from "react";
import { Layout } from "../components";
import ReactMarkdown from "react-markdown";
import { renderer } from "../presentation/markdownRenderer";
// @ts-ignore
import frontPageMarkdown from "!raw-loader!../texts/FrontPage.md";
// @ts-ignore
import HeroMarkdown from "!raw-loader!../texts/frontpage/Hero.md";
import "@fremtind/jkl-core/core.min.css";
import bg from "../assets/fremtind_hovedfoto.jpg";
import "./style.scss";

const IndexPage = () => (
    <Layout>
        <img className="portal-main__background" src={bg} alt="" />
        <div className="portal-main__hero">
            <ReactMarkdown renderers={renderer} source={HeroMarkdown} />{" "}
        </div>
        <div className="portal-main__content">
            <ReactMarkdown renderers={renderer} source={frontPageMarkdown} />
        </div>
    </Layout>
);

export default IndexPage;
