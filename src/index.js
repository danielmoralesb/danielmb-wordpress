import React, { useState } from "react";
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;
const { Button } = wp.components;

registerBlockType("hero-block/hero-block", {
  title: "Hero Block",
  description:
    "Block to create a hero section with a title on the left side and an image on the right side. A description and social platforms on the bottom.",
  icon: "superhero",
  category: "layout",
  attributes: {
    heroTitle: {
      type: "string",
    },
    content: {
      type: "string",
    },
    imageUrl: {
      type: "string",
    },
  },
  edit({ attributes, setAttributes }) {
    const [isChecked, setIsChecked] = useState(false);
    const [heroTitle, setHeroTitle] = useState(attributes.heroTitle || "");
    const [heroContent, setHeroContent] = useState(attributes.content || "");
    const [imageUrl, setImageUrl] = useState(attributes.imageUrl || "");

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };

    function updateHeroTitle(event) {
      setAttributes({ heroTitle: event.target.value });
    }

    function updateHeroTitle2(event) {
      setAttributes({ heroTitle2: event.target.value });
    }

    const handleContentChange = (content) => {
      setHeroContent(content);
      setAttributes({ content: content });
    };

    const handleImageSelect = (media) => {
      setImageUrl(media.url);
      setAttributes({ imageUrl: media.url });
    };

    return (
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="heroTitleLines">
            Does the Hero Title have multiple lines?
          </label>
          <input
            id="heroTitleLines"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>
        <div class="form-group">
          <label htmlFor="heroTitle">Hero Title:</label>
          <input
            id="heroTitle"
            value={attributes.heroTitle}
            onChange={updateHeroTitle}
            type="text"
          />
        </div>
        {isChecked && (
          <div class="form-group">
            <label htmlFor="heroTitle2">Hero Title 2:</label>
            <input
              id="heroTitle2"
              value={attributes.heroTitle2}
              onChange={updateHeroTitle2}
              type="text"
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="heroContent">Hero Content:</label>
          <RichText
            id="heroContent"
            value={heroContent}
            onChange={handleContentChange}
            placeholder="Enter hero content..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="heroImage">Hero Image:</label>
          <MediaUpload
            onSelect={handleImageSelect}
            allowedTypes={["image"]}
            render={({ open }) => (
              <Button onClick={open}>
                {imageUrl ? (
                  <img src={imageUrl} class="hero-home" />
                ) : (
                  "Select Image"
                )}
              </Button>
            )}
          />
        </div>
      </div>
    );
  },
  save({ attributes }) {
    return (
      <section class="hero">
        <div>
          <div class="hero__inner">
            <div class="hero__text">
              <h1>
                <span class="block--xs">{attributes.heroTitle}</span>
                <span class="block--xs">{attributes.heroTitle2}</span>
              </h1>
            </div>
            <div class="hero__image">
              {attributes.imageUrl && (
                <img src={attributes.imageUrl} class="hero-home" />
              )}
            </div>
          </div>
          <RichText.Content tagName="p" value={attributes.content} />
        </div>
        <nav class="hero__nav-wrapper">
          <ul class="hero__nav">
            <li class="hero__item">
              <a
                href="https://www.linkedin.com/in/danielmoralesb/"
                class="hero__link hero__link--linkedin"
                title="linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only">linkedin</span>
              </a>
            </li>
            <li class="hero__item">
              <a
                href="https://codepen.io/danielmoralesportfolio"
                class="hero__link hero__link--codepen"
                title="codepen"
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only">codepen</span>
              </a>
            </li>
            <li class="hero__item">
              <a
                href="https://github.com/danielmoralesb"
                class="hero__link hero__link--github"
                title="github"
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only">github</span>
              </a>
            </li>
            <li class="hero__item">
              <a
                href="https://dribbble.com/"
                class="hero__link hero__link--dribbble"
                title="dribbble"
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only">dribbble</span>
              </a>
            </li>
            <li class="hero__item">
              <a
                href="/Daniel_Morales_Resume_2024.pdf"
                class="btn btn--primary btn--icon btn--icon--resume"
                title="Resume"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </section>
    );
  },
});
