import React, { useState } from "react";
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.blockEditor;
const { Button } = wp.components;

registerBlockType("hero-block/hero-block", {
  title: "Hero Block",
  description:
    "Block to create a hero section with a title on the left side and an image on the right side. A description and social platforms on the bottom.",
  icon: "superhero",
  category: "layout",
  attributes: {
    isChecked: {
      type: "boolean",
      default: false,
    },
    heroTitle: {
      type: "string",
    },
    heroTitle2: {
      type: "string",
    },
    heroContent: {
      type: "html",
    },
    imageUrl: {
      type: "string",
    },
    linkedinUrl: {
      type: "string",
    },
    codepenUrl: {
      type: "string",
    },
    githubUrl: {
      type: "string",
    },
    dribbbleUrl: {
      type: "string",
    },
    resumeUrl: {
      type: "string",
    },
  },
  edit({ attributes, setAttributes }) {
    const [isChecked, setIsChecked] = useState(attributes.isChecked);
    const {
      heroTitle,
      heroTitle2,
      heroContent,
      imageUrl,
      linkedinUrl,
      codepenUrl,
      githubUrl,
      dribbbleUrl,
      resumeUrl,
    } = attributes;

    const handleCheckboxChange = (event) => {
      const checked = event.target.checked;
      setIsChecked(checked);
      setAttributes({ isChecked: checked });
    };

    function updateHeroTitle(event) {
      setAttributes({ heroTitle: event.target.value });
    }

    function updateHeroTitle2(event) {
      setAttributes({ heroTitle2: event.target.value });
    }

    const handleContentChange = (heroContent) => {
      setAttributes({ heroContent: heroContent });
    };

    const handleImageSelect = (media) => {
      setAttributes({ imageUrl: media.url });
    };

    const handleLinkedinUrl = (event) => {
      setAttributes({ linkedinUrl: event.target.value });
    };

    const handleCodepenUrl = (event) => {
      setAttributes({ codepenUrl: event.target.value });
    };

    const handleGithubUrl = (event) => {
      setAttributes({ githubUrl: event.target.value });
    };

    const handleDribbbleUrl = (event) => {
      setAttributes({ dribbbleUrl: event.target.value });
    };

    const handleResumeUrl = (event) => {
      setAttributes({ resumeUrl: event.target.value });
    };

    const [isClosed, setIsClosed] = useState(false);

    const toggleDmbBlock = () => {
      setIsClosed(!isClosed);
    };

    const blockClassName = `${isClosed ? "is-closed" : ""}`;

    return (
      <div className={`dmb-block ${blockClassName}`}>
        <div class="dmb-block__header">
          <h2>Hero Component</h2>
          <button onClick={toggleDmbBlock}>
            <span class="sr-only">Toggle Panel</span>
          </button>
        </div>
        <div class="dmb-block-fields">
          <div className="dmb-field">
            <div class="dmb-label">
              <label for="heroTitleLines">
                Does the Hero Title have multiple lines?
              </label>
              <p>
                The hero block title can have one or two lines, determining the
                amount of lines the title has, allows the settings to adjust
                properly.
              </p>
            </div>
            <div class="dmb-input">
              <input
                id="heroTitleLines"
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
          <div className="dmb-field dmb-field--has-subfield">
            <div class="dmb-subfield">
              <div class="dmb-label">
                <label for="heroTitle">Hero Title</label>
                <p>
                  Describes the title of the hero block in one line, usually
                  composed by one word or two with a maximum of 10 characters.
                </p>
              </div>
              <div class="dmb-input">
                <input
                  id="heroTitle"
                  value={heroTitle}
                  onChange={updateHeroTitle}
                  type="text"
                />
              </div>
            </div>
            {attributes.isChecked && (
              <div class="dmb-subfield">
                <div class="dmb-label">
                  <label for="heroTitle2">Hero Title/Second Line</label>
                  <p>
                    Adds a second line to the hero title. I can hold up one word
                    or multiple words with a maximum of 10 characters.
                  </p>
                </div>
                <div class="dmb-input">
                  <input
                    id="heroTitle2"
                    value={heroTitle2}
                    onChange={updateHeroTitle2}
                    type="text"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="dmb-field">
            <div class="dmb-label">
              <label for="heroDescription">Hero Description</label>
              <p>
                This section describes in an small amount of words or upto 56
                characters what the hero is about.
              </p>
            </div>
            <RichText
              id="heroDescription"
              value={heroContent}
              onChange={handleContentChange}
              placeholder="Enter hero content..."
              rows="5"
            />
          </div>
          <div className="dmb-field dmb-field--has-btn">
            <div class="dmb-label">
              <label for="heroImage">Hero Image</label>
              <p>
                The image uploaded will be the the main point of attention on
                the hero block. The hero image section will hold up an image up
                to 744px wide.
              </p>
              <p>
                In order to look appropiate it is recommended that the image
                uploaded has a ratio of 4:3 upto 4:4
              </p>
            </div>
            <div class="dmb-input">
              {!imageUrl ? (
                <MediaUpload
                  onSelect={handleImageSelect}
                  allowedTypes={["image"]}
                  render={({ open }) => (
                    <Button className="dmb-block-btn" onClick={open}>
                      Select Image
                    </Button>
                  )}
                />
              ) : (
                <div class="dmb-selected-image-wrap">
                  <img src={imageUrl} class="dmb-selected-image" />
                  <div className="dmb-selected-image-image__btn-wrapper">
                    <MediaUpload
                      onSelect={handleImageSelect}
                      allowedTypes={["image"]}
                      render={({ open }) => (
                        <Button
                          className="dmb-block-btn dmb-block-btn--select"
                          onClick={open}
                        >
                          <span class="sr-only">Select Image</span>
                        </Button>
                      )}
                    />
                    <Button
                      className="dmb-block-btn dmb-block-btn--remove"
                      onClick={() => setAttributes({ imageUrl: "" })}
                    >
                      <span class="sr-only">Remove Image</span>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div class="dmb-field dmb-field--has-multiple-inputs">
            <div class="dmb-label">
              <h5 class="label-style">Social Media</h5>
              <p>
                This section displays the social media links that you would like
                to include on the hero block.
              </p>
            </div>
            <div class="dmb-input">
              <input
                id="linkedinUrl"
                value={linkedinUrl}
                onChange={handleLinkedinUrl}
                type="url"
                pattern="https://.*"
                placeholder="LinkedIn"
              />
              <input
                id="codepenUrl"
                value={codepenUrl}
                onChange={handleCodepenUrl}
                type="url"
                pattern="https://.*"
                placeholder="Codepen"
              />
              <input
                id="githubUrl"
                value={githubUrl}
                onChange={handleGithubUrl}
                type="url"
                pattern="https://.*"
                placeholder="GitHub"
              />
              <input
                id="dribbbleUrl"
                value={dribbbleUrl}
                onChange={handleDribbbleUrl}
                type="url"
                pattern="https://.*"
                placeholder="Dribbble"
              />
              <input
                id="resumeURL"
                value={resumeUrl}
                onChange={handleResumeUrl}
                type="text"
                placeholder="Resume"
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
  save({ attributes }) {
    return (
      <section class="hero">
        <div class="hero__content">
          <div class="hero__inner">
            <div class="hero__text">
              <h1>
                <span class="block--xs">{attributes.heroTitle}</span>
                {attributes.isChecked && (
                  <span class="block--xs">{attributes.heroTitle2}</span>
                )}
              </h1>
            </div>
            <div class="hero__image">
              {attributes.imageUrl && (
                <img src={attributes.imageUrl} class="hero-home" />
              )}
            </div>
          </div>
          <RichText.Content tagName="p" value={attributes.heroContent} />
        </div>
        <nav class="hero__nav-wrapper">
          <ul class="hero__nav">
            {attributes.linkedinUrl && (
              <li class="hero__item">
                <a
                  href={attributes.linkedinUrl}
                  class="hero__link hero__link--linkedin"
                  title="linkedin"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span class="sr-only">linkedin</span>
                </a>
              </li>
            )}
            {attributes.codepenUrl && (
              <li class="hero__item">
                <a
                  href={attributes.codepenUrl}
                  class="hero__link hero__link--codepen"
                  title="codepen"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span class="sr-only">codepen</span>
                </a>
              </li>
            )}
            {attributes.githubUrl && (
              <li class="hero__item">
                <a
                  href={attributes.githubUrl}
                  class="hero__link hero__link--github"
                  title="github"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span class="sr-only">github</span>
                </a>
              </li>
            )}
            {attributes.dribbbleUrl && (
              <li class="hero__item">
                <a
                  href={attributes.dribbbleUrl}
                  class="hero__link hero__link--dribbble"
                  title="dribbble"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span class="sr-only">dribbble</span>
                </a>
              </li>
            )}
            {attributes.resumeUrl && (
              <li class="hero__item">
                <a
                  href={attributes.resumeUrl}
                  class="btn btn--primary btn--icon btn--icon--resume"
                  title="Resume"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Resume
                </a>
              </li>
            )}
          </ul>
        </nav>
      </section>
    );
  },
});
