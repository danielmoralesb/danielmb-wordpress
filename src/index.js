import React, { useState, useReducer, useEffect } from "react";
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
      query: {
        images: {
          type: "array",
          default: [],
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

    const removeTile = (index) => {
      const newTiles = tiles.filter((tile, i) => i !== index);
      setAttributes({ tiles: newTiles });
    };

    const initialIndex = (index) => {
      return index;
    };

    const initialState = {
      isClosed: false,
      isClosedSub: false,
      index: null,
      tiles: [],
    };

    const reducer = (state, action) => {
      switch (action.type) {
        case "INITIALIZE_TILES":
          return {
            ...state,
            tiles: action.tiles,
          };
        case "TOGGLE_DMB_BLOCK":
          return { ...state, isClosed: !state.isClosed };
        case "TOGGLE_SUB_BLOCK":
          return {
            ...state,
            index: action.index,
            tiles: state.tiles.map((tile, i) =>
              i === action.index
                ? { ...tile, isClosedSub: !tile.isClosedSub }
                : tile
            ),
          };
        default:
          return state;
      }
    };

    const [state, dispatch] = useReducer(
      reducer,
      initialState,
      (initialState) => {
        return {
          ...initialState,
          index:
            typeof initialState.index === "number"
              ? initialState.index
              : initialIndex,
        };
      }
    );

    useEffect(() => {
      const tilesWithState = tiles.map((tile, index) => ({
        ...tile,
        index,
        isClosedSub: false,
      }));
      dispatch({ type: "INITIALIZE_TILES", tiles: tilesWithState });
      toggleSubBlock(initialIndex);
    }, [tiles]);

    const toggleDmbBlock = () => {
      dispatch({ type: "TOGGLE_DMB_BLOCK" });
    };

    const toggleSubBlock = (index) => {
      dispatch({ type: "TOGGLE_SUB_BLOCK", index });
      initialIndex(index);
    };

    const blockClassName = `${state.isClosed ? "is-closed" : ""}`;

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
            tiles.length > 0
              ? "dmb-block-fields dmb-block-fields--show-subfield-group"
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
            {state.tiles.map((tile, index) => (
              <div
                key={index}
                className={`dmb-subfield-group ${
                  tile.isClosedSub && tile.index === index
                    ? "is-sub-closed"
                    : ""
                }`}
              >
                <div class="dmb-subfield__header">
                  <div className="dmb-subfield__options">
                    <h3>Tile {index + 1}</h3>
                    <button
                      onClick={() => removeTile(index)}
                      className="dmb-block-btn dmb-block-btn--remove"
                    >
                      Remove Tile
                    </button>
                  </div>
                  <button
                    id={index}
                    onClick={() => toggleSubBlock(index)}
                    className="dmb-block-btn dmb-block-btn--toggle"
                  >
                    <span class="sr-only">Toggle Sub Panel</span>
                  </button>
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
      <section className="tiles">
        <div className="container">
          <h2>{attributes.tilesTitle}</h2>
          <div className="tiles__container">
            {attributes.tiles.map((tile, index) => (
              <div className={`tile ${index > 3 && "hidden"}`}>
                <div className="tile__inner">
                  <h3>
                    <span className="block">{tile.title}</span>
                    {attributes.isChecked && (
                      <span className="block">{tile.title2}</span>
                    )}
                  </h3>
                  <p>{tile.description}</p>
                  <div className="tile__logos">
                    {Array.isArray(tile.images) &&
                      tile.images.map((image, imageIndex) => (
                        <img id={index} key={imageIndex} src={image} />
                      ))}
                  </div>
                </div>
              </div>
            ))}
            {attributes.tiles.length > 4 && (
              <button
                id="moreTiles"
                className="btn btn--primary btn--icon btn--icon--plus"
              >
                More Skills
              </button>
            )}
          </div>
        </div>
      </section>
    );
  },
});

registerBlockType("diagonal-block/diagonal-block", {
  title: "Diagonal Block",
  description:
    "Block to create a section with a diagonal background composed by a background color and a background image which holds a title and a description.",
  icon: "tide",
  category: "layout",
  attributes: {
    isChecked: {
      type: "boolean",
      default: false,
    },
    boxesTitle: {
      type: "string",
    },
    boxes: {
      type: "array",
      default: [],
      query: {
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
        imageUrl: {
          type: "string",
        },
        isFlipped: {
          type: "boolean",
          default: false,
        },
      },
    },
  },
  edit({ attributes, setAttributes }) {
    const [isChecked, setIsChecked] = useState(attributes.isChecked);
    const [isCheckedFlipping, setIsCheckedFlipping] = useState(
      attributes.isChecked
    );
    const { boxes, boxesTitle } = attributes;

    function updateboxesTitle(event) {
      setAttributes({ boxesTitle: event.target.value });
    }

    const handleCheckboxChange = (event) => {
      const checked = event.target.checked;
      setIsChecked(checked);
      setAttributes({ isChecked: checked });
    };

    function handleImageSelect(media, index) {
      const newboxes = boxes.map((box, i) => {
        return i === index ? { ...box, imageUrl: media.url } : box;
      });
      setAttributes({ boxes: newboxes });
    }

    const handleFlipping = (event, index) => {
      const checked = event.target.checked;
      setIsCheckedFlipping(checked);

      const newboxes = boxes.map((box, i) => {
        return i === index ? { ...box, isFlipped: checked } : box;
      });
      setAttributes({ boxes: newboxes });
    };

    const addbox = () => {
      const newboxes = boxes.concat([
        {
          title: "",
          title2: "",
          description: "",
          imageUrl: "",
          isFlipped: false,
        },
      ]);
      setAttributes({ boxes: newboxes });
    };

    const removebox = (index) => {
      const newboxes = boxes.filter((box, i) => i !== index);
      setAttributes({ boxes: newboxes });
    };

    const initialIndex = (index) => {
      return index;
    };

    const initialState = {
      isClosed: false,
      isClosedSub: false,
      index: null,
      boxes: [],
    };

    const reducer = (state, action) => {
      switch (action.type) {
        case "INITIALIZE_boxes":
          return {
            ...state,
            boxes: action.boxes,
          };
        case "TOGGLE_DMB_BLOCK":
          return { ...state, isClosed: !state.isClosed };
        case "TOGGLE_SUB_BLOCK":
          return {
            ...state,
            index: action.index,
            boxes: state.boxes.map((box, i) =>
              i === action.index
                ? { ...box, isClosedSub: !box.isClosedSub }
                : box
            ),
          };
        default:
          return state;
      }
    };

    const [state, dispatch] = useReducer(
      reducer,
      initialState,
      (initialState) => {
        return {
          ...initialState,
          index:
            typeof initialState.index === "number"
              ? initialState.index
              : initialIndex,
        };
      }
    );

    useEffect(() => {
      const boxesWithState = boxes.map((box, index) => ({
        ...box,
        index,
        isClosedSub: false,
      }));
      dispatch({ type: "INITIALIZE_boxes", boxes: boxesWithState });
      toggleSubBlock(initialIndex);
    }, [boxes]);

    const toggleDmbBlock = () => {
      dispatch({ type: "TOGGLE_DMB_BLOCK" });
    };

    const toggleSubBlock = (index) => {
      dispatch({ type: "TOGGLE_SUB_BLOCK", index });
      initialIndex(index);
    };

    const blockClassName = `${state.isClosed ? "is-closed" : ""}`;

    return (
      <div className={`dmb-block dmb-block--boxes ${blockClassName}`}>
        <div class="dmb-block__header">
          <h2>Diagonal Component</h2>
          <button onClick={toggleDmbBlock}>
            <span class="sr-only">Toggle Panel</span>
          </button>
        </div>
        <div
          class={
            boxes.length > 0
              ? "dmb-block-fields dmb-block-fields--show-subfield-group"
              : "dmb-block-fields"
          }
        >
          <div className="dmb-field">
            <div class="dmb-label">
              <label for="boxesTitle">Component Title</label>
              <p>Describes the title of the overall boxes component.</p>
            </div>
            <div class="dmb-input">
              <input
                id="boxesTitle"
                value={boxesTitle}
                onChange={updateboxesTitle}
                type="text"
              />
            </div>
          </div>
          <div className="dmb-field dmb-field--has-subfield-group">
            {state.boxes.map((box, index) => (
              <div
                key={index}
                className={`dmb-subfield-group ${
                  box.isClosedSub && box.index === index ? "is-sub-closed" : ""
                }`}
              >
                <div class="dmb-subfield__header">
                  <div className="dmb-subfield__options">
                    <h3>Box {index + 1}</h3>
                    <button
                      onClick={() => removebox(index)}
                      className="dmb-block-btn dmb-block-btn--remove"
                    >
                      Remove box
                    </button>
                  </div>
                  <button
                    id={index}
                    onClick={() => toggleSubBlock(index)}
                    className="dmb-block-btn dmb-block-btn--toggle"
                  >
                    <span class="sr-only">Toggle Sub Panel</span>
                  </button>
                </div>
                <div class="dmb-subfield__fields">
                  <div className="dmb-field">
                    <div class="dmb-label">
                      <label for="boxTitleLines">
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
                        id="boxTitleLines"
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                  </div>
                  <div className="dmb-field dmb-field--has-subfield">
                    <div class="dmb-subfield">
                      <div class="dmb-label">
                        <label for="boxTitle">Title</label>
                        <p>
                          Describes the title of the box in one line, usually
                          composed by one word or two with a maximum of 10
                          characters.
                        </p>
                      </div>
                      <div class="dmb-input">
                        <input
                          id="boxTitle"
                          value={box.title}
                          onChange={(event) => {
                            const newTitle = event.target.value;
                            setAttributes({
                              boxes: boxes.map((t, i) =>
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
                          <label for="boxTitle2">Title/Second Line</label>
                          <p>
                            Adds a second line to the title title. I can hold up
                            one word or multiple words with a maximum of 10
                            characters.
                          </p>
                        </div>
                        <div class="dmb-input">
                          <input
                            id="boxTitle2"
                            value={box.title2}
                            onChange={(event) => {
                              const newTitle2 = event.target.value;
                              setAttributes({
                                boxes: boxes.map((t, i) =>
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
                      <label for="boxDescription">Box Description</label>
                      <p>
                        Describes the box in around 56 characters. This section
                        is usually composed by one or two lines.
                      </p>
                    </div>
                    <div class="dmb-input">
                      <RichText
                        id="boxDescription"
                        value={box.description}
                        onChange={(description) => {
                          const newDescription = description;
                          setAttributes({
                            boxes: boxes.map((t, i) =>
                              i === index
                                ? { ...t, description: newDescription }
                                : t
                            ),
                          });
                        }}
                        placeholder="Enter box description..."
                        rows="5"
                      />
                    </div>
                  </div>
                  <div class="dmb-field dmb-subfield--has-btn">
                    <div class="dmb-label">
                      <label for="heroImage">Box Image</label>
                      <p>
                        The images uploaded will be displayed under the text on
                        mobile and next to the text on desktop. The image will
                        be displayed as a background.
                      </p>
                    </div>
                    <div class="dmb-input">
                      {!box.imageUrl ? (
                        <MediaUpload
                          onSelect={(media) => handleImageSelect(media, index)}
                          allowedTypes={["image"]}
                          render={({ open }) => (
                            <Button className="dmb-block-btn" onClick={open}>
                              Select Image
                            </Button>
                          )}
                        />
                      ) : (
                        <div class="dmb-selected-image-wrap">
                          <img src={box.imageUrl} class="dmb-selected-image" />
                          <div className="dmb-selected-image-image__btn-wrapper">
                            <MediaUpload
                              onSelect={(media) =>
                                handleImageSelect(media, index)
                              }
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
                              onClick={() => {
                                const newboxes = boxes.map((box, i) => {
                                  return i === index
                                    ? {
                                        ...box,
                                        imageUrl: "",
                                      }
                                    : box;
                                });
                                setAttributes({ boxes: newboxes });
                              }}
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
                      <label for="boxFlipping">
                        Flip the content of the box?
                      </label>
                      <p>
                        The content of the box can be flipped horizontally to
                        display the image on the left side and the text on the
                        right side.
                      </p>
                    </div>
                    <div class="dmb-input">
                      <input
                        id="boxFlipping"
                        type="checkbox"
                        checked={isCheckedFlipping}
                        onChange={() => handleFlipping(event, index)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="dmb-field__header">
              <div className="dmb-label">
                <label htmlFor="addbox">Boxes</label>
                <p>
                  Add a box, which consist in a section that holds a title, a
                  description on top of a solid background, next to an image.
                </p>
              </div>
              <div className="dmb-input">
                <Button
                  onClick={addbox}
                  className="dmb-block-btn dmb-block-btn--icon dmb-block-btn--icon-plus"
                >
                  <span>Add a Box</span>
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
      <section className="diagonal">
        <div className="container">
          <h2>{attributes.boxesTitle}</h2>
        </div>
        <div className="diagonal__container">
          {attributes.boxes.map((box, index) => (
            <div
              key={index}
              className={`diagonal__box ${
                box.isFlipped === true && "diagonal__box--flipped"
              }`}
            >
              <div className="diagonal__text">
                <h4>
                  <span className="block">{box.title}</span>
                  {attributes.isChecked && (
                    <span className="block">{box.title2}</span>
                  )}
                </h4>
                <p>{box.description}</p>
              </div>
              <div
                className="diagonal__image"
                style={{ backgroundImage: `url(${box.imageUrl})` }}
              ></div>
            </div>
          ))}
        </div>
      </section>
    );
  },
});
