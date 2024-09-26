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
      <div className={`dmb-block dmb-block--hero ${blockClassName}`}>
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
                The hero title can have one or two lines, determining the amount
                of lines the title has, allows the settings to adjust properly.
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
                  Describes the title of the hero in one line, usually composed
                  by one word or two with a maximum of 10 characters.
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
        <div class="container">
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
        </div>
      </section>
    );
  },
});

registerBlockType("intro-block/intro-block", {
  title: "Intro Block",
  description:
    "Block to create an introduction section with an image, title and description aligned to the center.",
  icon: "align-center",
  category: "layout",
  attributes: {
    introTitle: {
      type: "string",
    },
    introDescription: {
      type: "html",
    },
    imageUrlMobile: {
      type: "string",
    },
    imageUrlDesktop: {
      type: "string",
    },
  },
  edit({ attributes, setAttributes }) {
    const { introTitle, introDescription, imageUrlMobile, imageUrlDesktop } =
      attributes;

    function updateIntroTitle(event) {
      setAttributes({ introTitle: event.target.value });
    }

    const handleContentChange = (introDescription) => {
      setAttributes({ introDescription: introDescription });
    };

    const handleImageSelectMobile = (media) => {
      setAttributes({ imageUrlMobile: media.url });
    };

    const handleImageSelectDesktop = (media) => {
      setAttributes({ imageUrlDesktop: media.url });
    };

    const [isClosed, setIsClosed] = useState(false);

    const toggleDmbBlock = () => {
      setIsClosed(!isClosed);
    };

    const blockClassName = `${isClosed ? "is-closed" : ""}`;

    return (
      <div className={`dmb-block dmb-block--intro ${blockClassName}`}>
        <div class="dmb-block__header">
          <h2>Intro Component</h2>
          <button onClick={toggleDmbBlock}>
            <span class="sr-only">Toggle Panel</span>
          </button>
        </div>
        <div class="dmb-block-fields">
          <div className="dmb-field dmb-field--has-btn">
            <div class="dmb-label">
              <label for="introImage">Intro Image Mobile</label>
              <p>
                The image uploaded will be the the main point of attention on
                the intro block. The intro image mobile section will hold up an
                image in landscape mode up to 220px wide.
              </p>
              <p>
                In order to look appropiate it is recommended that the image
                uploaded has a ratio of 20:40 upto 200:100
              </p>
            </div>
            <div class="dmb-input">
              {!imageUrlMobile ? (
                <MediaUpload
                  onSelect={handleImageSelectMobile}
                  allowedTypes={["image"]}
                  render={({ open }) => (
                    <Button className="dmb-block-btn" onClick={open}>
                      Select Image
                    </Button>
                  )}
                />
              ) : (
                <div class="dmb-selected-image-wrap">
                  <img src={imageUrlMobile} class="dmb-selected-image" />
                  <div className="dmb-selected-image-image__btn-wrapper">
                    <MediaUpload
                      onSelect={handleImageSelectMobile}
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
                      onClick={() => setAttributes({ imageUrlMobile: "" })}
                    >
                      <span class="sr-only">Remove Image</span>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="dmb-field dmb-field--has-btn">
            <div class="dmb-label">
              <label for="introImage">Intro Image Desktop</label>
              <p>
                The image uploaded will be the the main point of attention on
                the intro block. The intro image desktop section will hold up an
                image in landscape mode up to 800px wide.
              </p>
              <p>
                In order to look appropiate it is recommended that the image
                uploaded has a ratio of 200:70 upto 200:100
              </p>
            </div>
            <div class="dmb-input">
              {!imageUrlDesktop ? (
                <MediaUpload
                  onSelect={handleImageSelectDesktop}
                  allowedTypes={["image"]}
                  render={({ open }) => (
                    <Button className="dmb-block-btn" onClick={open}>
                      Select Image
                    </Button>
                  )}
                />
              ) : (
                <div class="dmb-selected-image-wrap">
                  <img src={imageUrlDesktop} class="dmb-selected-image" />
                  <div className="dmb-selected-image-image__btn-wrapper">
                    <MediaUpload
                      onSelect={handleImageSelectDesktop}
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
                      onClick={() => setAttributes({ imageUrlDesktop: "" })}
                    >
                      <span class="sr-only">Remove Image</span>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="dmb-field">
            <div class="dmb-label">
              <label for="introTitle">Intro Title</label>
              <p>
                Describes the title of the intro block in one line, usually
                composed by one word or two with a maximum of 20 characters.
              </p>
            </div>
            <div class="dmb-input">
              <input
                id="introTitle"
                value={introTitle}
                onChange={updateIntroTitle}
                type="text"
              />
            </div>
          </div>
          <div className="dmb-field">
            <div class="dmb-label">
              <label for="introDescription">Intro Description</label>
              <p>
                This section describes the introduction with around 340
                characters.
              </p>
            </div>
            <RichText
              id="introDescription"
              value={introDescription}
              onChange={handleContentChange}
              placeholder="Enter intro description..."
              rows="5"
            />
          </div>
        </div>
      </div>
    );
  },
  save({ attributes }) {
    return (
      <section class="home-intro">
        <div class="container">
          <header class="home-intro__header">
            {attributes.imageUrlMobile && (
              <img src={attributes.imageUrlMobile} class="shi-mobile" />
            )}
            {attributes.imageUrlDesktop && (
              <img src={attributes.imageUrlDesktop} class="shi-desktop" />
            )}
            <h2>{attributes.introTitle}</h2>
          </header>
          <RichText.Content tagName="p" value={attributes.introDescription} />
        </div>
      </section>
    );
  },
});

registerBlockType("tiles-block/tiles-block", {
  title: "Tiles Block",
  description:
    "Block to create a section with multiple tiles that contain a title, a description and one or multiple images.",
  icon: "grid-view",
  category: "layout",
  attributes: {
    isChecked: {
      type: "boolean",
      default: false,
    },
    tilesTitle: {
      type: "string",
    },
    tiles: {
      type: "array",
      default: [],
      source: "query",
      query: {
        // imageUrl: {
        //   type: "string",
        //   source: "attribute",
        //   selector: ".tiles__image",
        //   attribute: "src",
        // },
        images: {
          type: "array",
          default: [],
          source: "query",
          query: {
            url: {
              type: "string",
              source: "attribute",
              selector: "img",
              attribute: "src",
            },
          },
        },
        title: {
          type: "string",
          source: "text",
        },
        title2: {
          type: "string",
          source: "text",
        },
        description: {
          type: "string",
          source: "text",
        },
      },
    },
  },
  edit({ attributes, setAttributes }) {
    const [isChecked, setIsChecked] = useState(attributes.isChecked);
    const { tiles, tilesTitle } = attributes;
    const [hasTiles, setHasTiles] = useState(false);

    function updateTilesTitle(event) {
      setAttributes({ tilesTitle: event.target.value });
    }

    const handleCheckboxChange = (event) => {
      const checked = event.target.checked;
      setIsChecked(checked);
      setAttributes({ isChecked: checked });
    };

    // const handleTileChange = (newTile, index) => {
    //   const newTiles = tiles.map((tile, i) => {
    //     return i === index ? newTile : tile;
    //   });
    //   setAttributes({ tiles: newTiles });
    // };

    function handleImageSelect(media, index) {
      const newTiles = tiles.map((tile, i) => {
        return i === index
          ? { ...tile, images: [...tile.images, media.url] }
          : tile;
      });
      setAttributes({ tiles: newTiles });
    }

    function updateImageSelect(media, index, imageIndex) {
      const newTiles = tiles.map((tile, i) => {
        return i === index
          ? {
              ...tile,
              images: tile.images.map((img, imgIndex) =>
                imgIndex === imageIndex ? media.url : img
              ),
            }
          : tile;
      });
      setAttributes({ tiles: newTiles });
    }

    const addTile = () => {
      const newTiles = tiles.concat([
        {
          images: "",
          title: "",
          title2: "",
          description: "",
        },
      ]);
      setAttributes({ tiles: newTiles });
      setHasTiles(true);
    };

    // const addImage = (index) => {
    //   const newTiles = tiles.map((tile, i) => {
    //     return i === index
    //       ? { ...tile, images: tile.images.concat([""]) }
    //       : tile;
    //   });
    //   setAttributes({ tiles: newTiles });
    //   console.log("Tiles:", tiles);
    //   console.log("Index:", index);
    //   console.log("New Tiles:", newTiles);
    //   console.log("New Tiles Images:", newTiles[index].images);
    //   console.log("Images:", tiles[index].images);
    // };

    const addImage = (index) => {
      console.log(index);
      const newTiles = tiles.map((tile, i) => {
        return i === index
          ? {
              ...tile,
              images: [...tile.images, ""],
            }
          : tile;
      });
      setAttributes({ tiles: newTiles });
    };

    // const removeTile = (index) => {
    //   const newTiles = tiles.filter((tile, i) => i !== index);
    //   setAttributes({ tiles: newTiles });
    // };

    const [isClosed, setIsClosed] = useState(false);

    const toggleDmbBlock = () => {
      setIsClosed(!isClosed);
    };

    const blockClassName = `${isClosed ? "is-closed" : ""}`;
    console.log(
      "Image Array: " + JSON.stringify(tiles.map((tile) => tile.images))
    );

    return (
      <div className={`dmb-block dmb-block--tiles ${blockClassName}`}>
        <div class="dmb-block__header">
          <h2>Tiles Component</h2>
          <button onClick={toggleDmbBlock}>
            <span class="sr-only">Toggle Panel</span>
          </button>
        </div>
        <div
          class={
            hasTiles === true
              ? "dmb-block-fields dmb-block-fields--has-tiles"
              : "dmb-block-fields"
          }
        >
          <div className="dmb-field">
            <div class="dmb-label">
              <label for="tilesTitle">Component Title</label>
              <p>Describes the title of the overall tiles component.</p>
            </div>
            <div class="dmb-input">
              <input
                id="tilesTitle"
                value={tilesTitle}
                onChange={updateTilesTitle}
                type="text"
              />
            </div>
          </div>
          <div className="dmb-field dmb-field--has-subfield-group">
            {tiles.map((tile, index) => (
              <div className="dmb-subfield-group">
                <div class="dmb-subfield__header">
                  <h3>Tile {index + 1}</h3>
                  {/* <Button
        onClick={() => removeTile(index)}
        className="dmb-block-btn dmb-block-btn--remove"
        >
        Remove Tile
        </Button> */}
                </div>
                <div class="dmb-subfield__fields">
                  <div className="dmb-field">
                    <div class="dmb-label">
                      <label for="tileTitleLines">
                        Does the Title have multiple lines?
                      </label>
                      <p>
                        The title can have one or two lines, determining the
                        amount of lines the title has, allows the settings to
                        adjust properly.
                      </p>
                    </div>
                    <div class="dmb-input">
                      <input
                        id="tileTitleLines"
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                  </div>
                  <div className="dmb-field dmb-field--has-subfield">
                    <div class="dmb-subfield">
                      <div class="dmb-label">
                        <label for="tileTitle">Title</label>
                        <p>
                          Describes the title of the tile in one line, usually
                          composed by one word or two with a maximum of 10
                          characters.
                        </p>
                      </div>
                      <div class="dmb-input">
                        <input
                          id="tileTitle"
                          value={tile.title}
                          onChange={(event) => {
                            const newTitle = event.target.value;
                            setAttributes({
                              tiles: tiles.map((t, i) =>
                                i === index ? { ...t, title: newTitle } : t
                              ),
                            });
                          }}
                          type="text"
                        />
                      </div>
                    </div>
                    {attributes.isChecked && (
                      <div class="dmb-subfield">
                        <div class="dmb-label">
                          <label for="tileTitle2">Title/Second Line</label>
                          <p>
                            Adds a second line to the title title. I can hold up
                            one word or multiple words with a maximum of 10
                            characters.
                          </p>
                        </div>
                        <div class="dmb-input">
                          <input
                            id="tileTitle2"
                            value={tile.title2}
                            onChange={(event) => {
                              const newTitle2 = event.target.value;
                              setAttributes({
                                tiles: tiles.map((t, i) =>
                                  i === index ? { ...t, title2: newTitle2 } : t
                                ),
                              });
                            }}
                            type="text"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div class="dmb-field">
                    <div class="dmb-label">
                      <label for="tileDescription">Tile Description</label>
                      <p>
                        Describes the tile in around 56 characters. This section
                        is usually composed by one or two lines.
                      </p>
                    </div>
                    <div class="dmb-input">
                      <RichText
                        id="tileDescription"
                        value={tile.description}
                        onChange={(description) => {
                          const newDescription = description;
                          setAttributes({
                            tiles: tiles.map((t, i) =>
                              i === index
                                ? { ...t, description: newDescription }
                                : t
                            ),
                          });
                        }}
                        placeholder="Enter tile description..."
                        rows="5"
                      />
                    </div>
                  </div>
                  <div class="dmb-field dmb-subfield--has-btn">
                    <div class="dmb-label">
                      <label for="heroImage">Tile Images</label>
                      <p>
                        The images uploaded will be displayed in grid mode. Each
                        tile image section will wil be compressed a maximum of
                        138px wide.
                      </p>
                      <p>
                        In order to look appropiate it is recommended that the
                        images uploaded have the same coloring/style.
                      </p>
                    </div>
                    <div class="dmb-input">
                      {tiles.map(
                        (tile, tileIndex) =>
                          tileIndex === index && (
                            <div
                              className="dmb-selected-image-container"
                              key={tileIndex}
                            >
                              {Array.isArray(tile.images) &&
                                tile.images.map((image, imageIndex) => (
                                  <div class="dmb-selected-image-wrap">
                                    <img
                                      id={tileIndex}
                                      key={imageIndex}
                                      src={image}
                                      class="dmb-selected-image"
                                    />
                                    <div className="dmb-selected-image-image__btn-wrapper">
                                      <MediaUpload
                                        onSelect={(media) =>
                                          updateImageSelect(
                                            media,
                                            index,
                                            imageIndex
                                          )
                                        }
                                        allowedTypes={["image"]}
                                        render={({ open }) => (
                                          <Button
                                            className="dmb-block-btn dmb-block-btn--select"
                                            onClick={open}
                                          >
                                            <span class="sr-only">
                                              Select Image
                                            </span>
                                          </Button>
                                        )}
                                      />
                                      <Button
                                        className="dmb-block-btn dmb-block-btn--remove"
                                        onClick={() => {
                                          const newTiles = tiles.map(
                                            (tile, i) => {
                                              return i === index
                                                ? {
                                                    ...tile,
                                                    images: tile.images.filter(
                                                      (img, imgIndex) =>
                                                        imgIndex !== imageIndex
                                                    ),
                                                  }
                                                : tile;
                                            }
                                          );
                                          setAttributes({ tiles: newTiles });
                                        }}
                                      >
                                        <span class="sr-only">
                                          Remove Image
                                        </span>
                                      </Button>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          )
                      )}
                      {/* <Button
                        onClick={() => addImage(index)}
                        className="dmb-block-btn"
                      >
                        Add New Image
                      </Button> */}
                      <MediaUpload
                        onSelect={(media) => handleImageSelect(media, index)}
                        allowedTypes={["image"]}
                        render={({ open }) => (
                          <Button className="dmb-block-btn" onClick={open}>
                            Select Images
                          </Button>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="dmb-field__header">
              <div className="dmb-label">
                <label htmlFor="addTile">Tiles</label>
                <p>
                  Add a tile, which consist in a frame that holds a tiles, a
                  description and one or multiple images inside of it.
                </p>
              </div>
              <div className="dmb-input">
                <Button
                  onClick={addTile}
                  className="dmb-block-btn dmb-block-btn--icon dmb-block-btn--icon-plus"
                >
                  <span>Add a Tile</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  save({ attributes }) {
    return (
      <section class="skills-wrapper">
        <div class="container">
          <h2>{attributes.tilesTitle}</h2>
          <div className="skills">
            {attributes.tiles.map((tile, index) => (
              <div class="skills__box">
                <div class="tiles__item">
                  <h3>
                    <span class="block">{tile.title}</span>
                    {attributes.isChecked && (
                      <span class="block">{tile.title2}</span>
                    )}
                  </h3>
                  <p>{tile.description}</p>
                  <div className="skills__logos">
                    {Array.isArray(tile.images) &&
                      tile.images.map((image, imageIndex) => (
                        <img
                          id={index}
                          key={imageIndex}
                          src={image}
                          className="tiles__image"
                        />
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
