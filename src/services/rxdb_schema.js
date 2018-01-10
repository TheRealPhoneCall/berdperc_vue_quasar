import { PERC_COL } from './constants'

export const percSchema = {
  title: 'percussion schema',
  description: 'percussion data',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'integer'
    },
    name: {
      type: 'string',
      primary: true
    },
    slug: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    image: {
      type: 'string'
    },
    image_png: {
      type: 'string'
    },
    image_front: {
      type: 'string'
    },
    image_top: {
      type: 'string'
    },
    image_side: {
      type: 'string'
    },
    image_grid_classes: {
      type: 'string'
    },
    detail_grid_classes: {
      type: 'string'
    },
    logo: {
      type: 'string'
    },
    default_map: {
      type: 'string'
    },
    pads_main_styles: {
      type: 'object',
      properties: {
        padding: {
          type: 'integer'
        },
        verticalAlign: {
          type: 'string'
        },
        zIndex: {
          type: 'integer'
        },
        opacity: {
          type: 'number'
        },
        background: {
          type: 'string'
        },
        position: {
          type: 'string'
        }
      }
    },
    pads: {
      type: 'array',
      description: 'pad data of the percussion',
      uniqueItems: true,
      item: {
        type: 'object',
        properties: {
          id: {
            type: 'integer'
          },
          name: {
            type: 'string'
          },
          pad_type: {
            type: 'string'
          },
          pad_grid_classes: {
            type: 'string'
          },
          pad_div_styles: {
            type: 'object',
            description: 'position, size and style of the each pad',
            properties: {
              position: {
                type: 'object',
                properties: {
                  top: {
                    type: 'string'
                  },
                  left: {
                    type: 'string'
                  },
                  width: {
                    type: 'string'
                  },
                  height: {
                    type: 'string'
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  required: ['id', 'slug', 'image', 'image_front', 'default_map']
}

export const librarySchema = {
  title: 'library schema',
  description: 'library data',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'integer'
    },
    genre: {
      type: 'string',
      primary: true
    }
  },
  required: ['id']
}

export const mapListSchema = {
  title: 'map schema',
  description: 'map data',
  version: 0,
  type: 'object',
  properties: {
    name: {
      type: 'string',
      primary: true
    },
    maps: {
      type: 'array',
      description: 'lists the maps of the given maptype',
      item: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          note: {
            type: 'integer'
          }
        }
      }
    }
  }
}

export const configSchema = () => {
  const padSchema = {
    type: 'object',
    properties: {
      notes: {
        type: 'array',
        description: 'lists notes attached to a pad',
        item: {
          type: 'object',
          properties: {
            name: {
              type: 'string'
            },
            note: {
              type: 'integer'
            },
            min_vel_out: {
              type: 'integer'
            },
            max_vel_out: {
              type: 'integer'
            },
            min_vel_in: {
              type: 'integer'
            },
            max_vel_in: {
              type: 'integer'
            },
            channel: {
              type: 'integer'
            },
            port: {
              type: 'string'
            }
          }
        }
      }
    }
  }

  return {
    title: 'config schema',
    description: 'config data',
    version: 0,
    type: 'object',
    properties: {
      name: {
        type: 'string',
        primary: true
      },
      perc: {
        type: 'string',
        ref: PERC_COL.NAME
      },
      plugin: {
        type: 'string'
      },
      plugin_map: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      used_for: {
        type: 'string'
      },
      genre: {
        type: 'string'
      },
      maps: {
        type: 'array',
        description: 'list of pad maps for each mode',
        item: {
          type: 'object',
          properties: {
            pad0: padSchema,
            pad1: padSchema,
            pad2: padSchema,
            pad3: padSchema,
            pad4: padSchema,
            pad5: padSchema,
            pad6: padSchema,
            pad7: padSchema,
            pad8: padSchema,
            pad9: padSchema,
            pad10: padSchema,
            pad11: padSchema,
            pad12: padSchema,
            pad13: padSchema,
            pad14: padSchema,
            pad15: padSchema
          }
        }

      }
    },
    required: ['name', 'perc']
  }
}
