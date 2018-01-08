import jsonfile from 'jsonfile'
import fs from 'fs'
import path from 'path'

export const PercAPI = {
  percs () {
    const object = require('./json/percussions.json')
    console.log(object)
    return object
  },
  all () {
    return this.percs()
  },
  get (id) {
    const isPerc = p => p.id === id
    return this.percs().find(isPerc)
  }
}

export const MidiMapAPI = {
  midi_map (file) {
    const object = require(`./json/${file}`)
    console.log(object)
    return object
  },
  all (file) {
    return this.midi_map(file)
  },
  get (id) {
    const isMap = p => p.id === id
    return this.midi_map().find(isMap)
  }
}

export const MidiListAPI = {
  midi_map (file) {
    const object = require(`./json/${file}`)
    console.log(object)
    return object
  },
  all (file) {
    return this.midi_map('gm_admap.json')
  },
  get (id) {
    const isMap = p => p.id === id
    return this.midi_map().find(isMap)
  }
}

export const ConfigAPI = {
  configs (percSlug, genre) {
    var configs = []
    const padMapPath = path.join(__dirname, `../settings/pad_maps/${percSlug}`)
    const dir = fs.readdirSync(padMapPath)

    // loop through file system
    for (let filePath of dir) {
      const jsonFilePath = `${padMapPath}/${filePath}`
      const object = jsonfile.readFileSync(jsonFilePath)
      if (genre) {
        console.log(object, genre)

        if (object.genre === genre) {
          configs.push(object)
        }
      }
      else {
        configs.push(object)
      }
    }
    console.log(configs)
    return configs
  },
  configs_by_genre (percSlug, genre) {
    return this.configs(percSlug, genre)
  },
  all_configs (percSlug) {
    return this.configs(percSlug)
  },
  get_config_content (percSlug, file) {
    const object = require(`../settings/pad_maps/${percSlug}/${file}`)
    return object
  }
}

export const ConfigFileAPI2 = {
  configs (percSlug, genre) {
    var configs = []
    const padMapPath = path.join(__dirname, `../settings/pad_maps/${percSlug}`)
    console.log('padMapPath:', padMapPath)
    const dir = fs.readdirSync(padMapPath)
    // loop through file system
    for (let filePath of dir) {
      const jsonFilePath = `${padMapPath}/${filePath}`
      const object = jsonfile.readFileSync(jsonFilePath)
      if (genre) {
        console.log(object, genre)

        if (object.genre === genre) {
          configs.push(object)
        }
      }
      else {
        configs.push(object)
      }
    }

    console.log(configs)
    return configs
  },
  configs_by_genre (percSlug, genre) {
    return this.configs(percSlug, genre)
  },
  all () {
    const percSlug = 'berdcajon_v1'
    return this.configs(percSlug)
  },
  get_config_content (percSlug, file) {
    const object = require(`../settings/pad_maps/${percSlug}/${file}`)
    return object
  }
}

export const ConfigFileAPI = {
  configs (percSlug, genre) {
    var configs = []
    let configFiles = require('./json/library.json')
    configFiles = configFiles[percSlug]
    console.log('configFiles: ', configFiles)
    // loop through file system
    for (let file of configFiles) {
      const object = require(`../settings/pad_maps/${percSlug}/${file.name}`)
      if (genre) {
        console.log(object, genre)

        if (object.genre === genre) {
          configs.push(object)
        }
      }
      else {
        configs.push(object)
      }
    }

    console.log(configs)
    return configs
  },
  configs_by_genre (percSlug, genre) {
    return this.configs(percSlug, genre)
  },
  all () {
    const percSlug = 'berdcajon_v1'
    return this.configs(percSlug)
  },
  get_config_content (percSlug, file) {
    const object = require(`../settings/pad_maps/${percSlug}/${file}`)
    return object
  }
}

export const libraryAPI = {
  music_lib () {
    const object = require(`./json/music_library.json`)
    console.log(object.genres)
    return object.genres
  },
  all () {
    return this.music_lib()
  },
  get (id) {
    const isConfig = p => p.id === id
    return this.music_lib().find(isConfig)
  }
}
