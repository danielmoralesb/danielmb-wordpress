(()=>{"use strict";const e=window.React,l=window.ReactJSXRuntime,{registerBlockType:i}=wp.blocks,{RichText:s,MediaUpload:r}=wp.blockEditor,{Button:t}=wp.components;i("hero-block/hero-block",{title:"Hero Block",description:"Block to create a hero section with a title on the left side and an image on the right side. A description and social platforms on the bottom.",icon:"superhero",category:"layout",attributes:{isChecked:{type:"boolean",default:!1},heroTitle:{type:"string"},heroTitle2:{type:"string"},heroContent:{type:"html"},imageUrl:{type:"string"},linkedinUrl:{type:"string"},codepenUrl:{type:"string"},githubUrl:{type:"string"},dribbbleUrl:{type:"string"},resumeUrl:{type:"string"}},edit({attributes:i,setAttributes:n}){const[o,a]=(0,e.useState)(i.isChecked),{heroTitle:d,heroTitle2:c,heroContent:h,imageUrl:b,linkedinUrl:p,codepenUrl:u,githubUrl:m,dribbbleUrl:x,resumeUrl:j}=i;return(0,l.jsxs)("div",{className:"dmb-block",children:[(0,l.jsxs)("div",{class:"dmb-block__header",children:[(0,l.jsx)("h2",{children:"Hero Component"}),(0,l.jsx)("button",{onClick:()=>{document.querySelector(".dmb-block").classList.toggle("is-closed")},children:(0,l.jsx)("span",{class:"sr-only",children:"Toggle Panel"})})]}),(0,l.jsxs)("div",{class:"dmb-block-fields",children:[(0,l.jsxs)("div",{className:"dmb-field",children:[(0,l.jsxs)("div",{class:"dmb-label",children:[(0,l.jsx)("label",{for:"heroTitleLines",children:"Does the Hero Title have multiple lines?"}),(0,l.jsx)("p",{children:"The hero block title can have one or two lines, determining the amount of lines the title has, allows the settings to adjust properly."})]}),(0,l.jsx)("div",{class:"dmb-input",children:(0,l.jsx)("input",{id:"heroTitleLines",type:"checkbox",checked:o,onChange:e=>{const l=e.target.checked;a(l),n({isChecked:l})}})})]}),(0,l.jsxs)("div",{className:"dmb-field dmb-field--has-subfield",children:[(0,l.jsxs)("div",{class:"dmb-subfield",children:[(0,l.jsxs)("div",{class:"dmb-label",children:[(0,l.jsx)("label",{for:"heroTitle",children:"Hero Title"}),(0,l.jsx)("p",{children:"Describes the title of the hero block in one line, usually composed by one word or two with a maximum of 10 characters."})]}),(0,l.jsx)("div",{class:"dmb-input",children:(0,l.jsx)("input",{id:"heroTitle",value:d,onChange:function(e){n({heroTitle:e.target.value})},type:"text"})})]}),i.isChecked&&(0,l.jsxs)("div",{class:"dmb-subfield",children:[(0,l.jsxs)("div",{class:"dmb-label",children:[(0,l.jsx)("label",{for:"heroTitle2",children:"Hero Title/Second Line"}),(0,l.jsx)("p",{children:"Adds a second line to the hero title. I can hold up one word or multiple words with a maximum of 10 characters."})]}),(0,l.jsx)("div",{class:"dmb-input",children:(0,l.jsx)("input",{id:"heroTitle2",value:c,onChange:function(e){n({heroTitle2:e.target.value})},type:"text"})})]})]}),(0,l.jsxs)("div",{className:"dmb-field",children:[(0,l.jsxs)("div",{class:"dmb-label",children:[(0,l.jsx)("label",{for:"heroDescription",children:"Hero Description"}),(0,l.jsx)("p",{children:"This section describes in an small amount of words or upto 56 characters what the hero is about."})]}),(0,l.jsx)(s,{id:"heroDescription",value:h,onChange:e=>{n({heroContent:e})},placeholder:"Enter hero content...",rows:"5"})]}),(0,l.jsxs)("div",{className:"dmb-field dmb-field--has-btn",children:[(0,l.jsxs)("div",{class:"dmb-label",children:[(0,l.jsx)("label",{for:"heroImage",children:"Hero Image"}),(0,l.jsx)("p",{children:"The image uploaded will be the the main point of attention on the hero block. The hero image section will hold up an image up to 744px wide."}),(0,l.jsx)("p",{children:"In order to look appropiate it is recommended that the image uploaded has a ratio of 4:3 upto 4:4"})]}),(0,l.jsxs)("div",{class:"dmb-input",children:[(0,l.jsx)(r,{onSelect:e=>{n({imageUrl:e.url})},allowedTypes:["image"],render:({open:e})=>(0,l.jsx)(t,{class:"dmb-block-btn",onClick:e,children:"Select Image"})}),b&&(0,l.jsx)("img",{src:b,class:"dmb-selected-image"})]})]}),(0,l.jsxs)("div",{class:"dmb-field dmb-field--has-multiple-inputs",children:[(0,l.jsxs)("div",{class:"dmb-label",children:[(0,l.jsx)("h5",{class:"label-style",children:"Social Media"}),(0,l.jsx)("p",{children:"This section displays the social media links that you would like to include on the hero block."})]}),(0,l.jsxs)("div",{class:"dmb-input",children:[(0,l.jsx)("input",{id:"linkedinUrl",value:p,onChange:e=>{n({linkedinUrl:e.target.value})},type:"url",pattern:"https://.*",placeholder:"LinkedIn"}),(0,l.jsx)("input",{id:"codepenUrl",value:u,onChange:e=>{n({codepenUrl:e.target.value})},type:"url",pattern:"https://.*",placeholder:"Codepen"}),(0,l.jsx)("input",{id:"githubUrl",value:m,onChange:e=>{n({githubUrl:e.target.value})},type:"url",pattern:"https://.*",placeholder:"GitHub"}),(0,l.jsx)("input",{id:"dribbbleUrl",value:x,onChange:e=>{n({dribbbleUrl:e.target.value})},type:"url",pattern:"https://.*",placeholder:"Dribbble"}),(0,l.jsx)("input",{id:"resumeURL",value:j,onChange:e=>{n({resumeUrl:e.target.value})},type:"text",placeholder:"Resume"})]})]})]})]})},save:({attributes:e})=>(0,l.jsxs)("section",{class:"hero",children:[(0,l.jsxs)("div",{class:"hero__content",children:[(0,l.jsxs)("div",{class:"hero__inner",children:[(0,l.jsx)("div",{class:"hero__text",children:(0,l.jsxs)("h1",{children:[(0,l.jsx)("span",{class:"block--xs",children:e.heroTitle}),e.isChecked&&(0,l.jsx)("span",{class:"block--xs",children:e.heroTitle2})]})}),(0,l.jsx)("div",{class:"hero__image",children:e.imageUrl&&(0,l.jsx)("img",{src:e.imageUrl,class:"hero-home"})})]}),(0,l.jsx)(s.Content,{tagName:"p",value:e.heroContent})]}),(0,l.jsx)("nav",{class:"hero__nav-wrapper",children:(0,l.jsxs)("ul",{class:"hero__nav",children:[e.linkedinUrl&&(0,l.jsx)("li",{class:"hero__item",children:(0,l.jsx)("a",{href:e.linkedinUrl,class:"hero__link hero__link--linkedin",title:"linkedin",target:"_blank",rel:"noreferrer noopener",children:(0,l.jsx)("span",{class:"sr-only",children:"linkedin"})})}),e.codepenUrl&&(0,l.jsx)("li",{class:"hero__item",children:(0,l.jsx)("a",{href:e.codepenUrl,class:"hero__link hero__link--codepen",title:"codepen",target:"_blank",rel:"noreferrer noopener",children:(0,l.jsx)("span",{class:"sr-only",children:"codepen"})})}),e.githubUrl&&(0,l.jsx)("li",{class:"hero__item",children:(0,l.jsx)("a",{href:e.githubUrl,class:"hero__link hero__link--github",title:"github",target:"_blank",rel:"noreferrer noopener",children:(0,l.jsx)("span",{class:"sr-only",children:"github"})})}),e.dribbbleUrl&&(0,l.jsx)("li",{class:"hero__item",children:(0,l.jsx)("a",{href:e.dribbbleUrl,class:"hero__link hero__link--dribbble",title:"dribbble",target:"_blank",rel:"noreferrer noopener",children:(0,l.jsx)("span",{class:"sr-only",children:"dribbble"})})}),e.resumeUrl&&(0,l.jsx)("li",{class:"hero__item",children:(0,l.jsx)("a",{href:e.resumeUrl,class:"btn btn--primary btn--icon btn--icon--resume",title:"Resume",target:"_blank",rel:"noreferrer noopener",children:"Resume"})})]})})]})})})();