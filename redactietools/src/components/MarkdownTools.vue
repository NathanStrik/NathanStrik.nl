<template>
  <div id="markdowntools">
    <i-button-group size="sm">
      <i-button title="Vetgedrukt <strong> Ctrl+B" v-on:click="emitCommand('boldCommand')">
        <fa-icon :icon="['fas', 'bold']" />
      </i-button>
      <i-button title="Schuingedrukt <em> Ctrl+I" v-on:click="emitCommand('italicCommand')">
        <fa-icon :icon="['fas', 'italic']" />
      </i-button>
    </i-button-group>
    <i-button-group size="sm">
      <i-button disabled outline title="Hyperlink <a> Ctrl+L">
        <fa-icon :icon="['fas', 'link']" />
      </i-button>
      <i-button disabled outline title="Afbeelding <img> Ctrl+G">
        <fa-icon :icon="['fas', 'image']" />
      </i-button>
      <i-button title="Kop 1 <h1>" v-on:click="emitCommand('h1Command')">
        <fa-icon :icon="['fas', 'heading']" /><span class="button-text">1</span>
      </i-button>
      <i-button title="Kop 2 <h2>" v-on:click="emitCommand('h2Command')">
        <fa-icon :icon="['fas', 'heading']" /><span class="button-text">2</span>
      </i-button>
      <i-button title="Kop 3 <h3>" v-on:click="emitCommand('h3Command')">
        <fa-icon :icon="['fas', 'heading']" /><span class="button-text">3</span>
      </i-button>
    </i-button-group>
    <i-button-group size="sm">
      <i-button title="Genummerde lijst <ol> Ctrl+O" v-on:click="emitCommand('olCommand')">
        <fa-icon :icon="['fas', 'list-ol']" />
      </i-button>
      <i-button title="Ongenummerde lijst <ul> Ctrl+U" v-on:click="emitCommand('ulCommand')">
        <fa-icon :icon="['fas', 'list-ul']" />
      </i-button>
      <i-button disabled outline title="Horizontale lineaal <hr> Ctrl+R">
        <fa-icon :icon="['fas', 'minus']" />
      </i-button>
    </i-button-group>
    <i-button-group size="sm">
      <i-button disabled outline title="Maak laatste handeling ongedaan - Ctrl+Z">
        <fa-icon :icon="['fas', 'undo-alt']" />
      </i-button>
      <i-button disabled outline title="Doe laatste handeling opnieuw - Ctrl+Y">
        <fa-icon :icon="['fas', 'redo-alt']" />
      </i-button>
    </i-button-group>  
  </div>
</template>

<script>
export default {
  name: 'MarkdownTools',
  methods: {
    emitCommand(command) {
      this.$root.$emit(command);
    }
  }
}
</script>
