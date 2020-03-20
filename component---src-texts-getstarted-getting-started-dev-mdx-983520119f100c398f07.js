(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{HcH2:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return c}));t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("5hJT"),t("mXGw");var r=t("/FXl"),i=t("7XvJ");var o={},l={_frontmatter:o},a=i.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(r.b)(a,Object.assign({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"Slik bruker du Jøkul"),Object(r.b)("p",null,"Du kan bruke komponentene i Jøkul som rene stilark eller som React-komponenter. Alle CSS-stilark finnes i både vanlig og minifisert utgave. Vi anbefaler å bruke den minifiserte i produksjon. Vi tilbyr også hjelpefunksjoner for vanlige utfordringer i både Sass og JavaScript."),Object(r.b)("p",null,"Dersom du kun bruker stilarkene (f.eks. hvis prosjektet ditt ikke bruker React) må du sørge for å gi komponentene riktig HTML-struktur. Se gjerne på hvordan React-komponentene er implementert, eller sjekk eksemplene i portalen."),Object(r.b)("h2",null,"Kom i gang med React-komponenter"),Object(r.b)("p",null,"Hvis du vil ta i bruk en Jøkul React-komponent, trenger du å laste inn både stilen og komponenten. Hvis du har satt opp en CSS-loader i pakkesystemet, kan du laste ned stilen direkte i React. Du kan også velge å legge den inn i en av dine ",Object(r.b)("inlineCode",{parentName:"p"},".scss"),"- eller ",Object(r.b)("inlineCode",{parentName:"p"},".css"),"-filer."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"For å normalisere stilen og få tilgang til rotstilen, laster du inn ",Object(r.b)("inlineCode",{parentName:"p"},"core.min.css")," fra ",Object(r.b)("inlineCode",{parentName:"p"},"@fremtind/jkl-core"),". Det trenger du bare å gjøre én gang i prosjektet ditt.")),Object(r.b)("h2",null,"Installer avhengigheter"),Object(r.b)("p",null,"Hvis du bruker React-komponenten, installerer du den med ",Object(r.b)("inlineCode",{parentName:"p"},"yarn add @fremtind/jkl-accordion-react"),". Stilpakken blir automatisk installert som en avhengighet."),Object(r.b)("p",null,"Dersom du bare bruker stilpakken, installerer du den med ",Object(r.b)("inlineCode",{parentName:"p"},"yarn add @fremtind/jkl-accordion"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Vi bruker Yarn for pakkehåndtering i Jøkul. Hvis ditt prosjekt bruker NPM, kan du selvfølgelig installere pakkene med ",Object(r.b)("inlineCode",{parentName:"p"},"npm i")," som vanlig.")),Object(r.b)("h2",null,"Ta i bruk komponenten"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),'import "@fremtind/jkl-accordion/accordion.min.css";\nimport { Accordion, AccordionItem } from "@fremtind/jkl-accordion";\n\nconst Component = () => (\n    <Accordion>\n        <AccordionItem title="Tittel 1">Innhold i første</AccordionItem>\n        <AccordionItem title="Tittel 2">Innhold i andre</AccordionItem>\n    </Accordion>\n);\n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-getstarted-getting-started-dev-mdx-983520119f100c398f07.js.map