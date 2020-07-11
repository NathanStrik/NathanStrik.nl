<template>
  <div id="markdowntools">
    <i-button-group size="sm">
      <i-button title="Vetgedrukt <strong> Ctrl+B" v-on:click="emitBoldCommand">
        <fa-icon :icon="['fas', 'bold']" />
      </i-button>
      <i-button title="Schuingedrukt <em> Ctrl+I" v-on:click="emitItalicCommand">
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
      <i-button title="Kop 1 <h1>" v-on:click="emitH1Command">
        <fa-icon :icon="['fas', 'heading']" /><span class="button-text">1</span>
      </i-button>
      <i-button title="Kop 2 <h2>" v-on:click="emitH2Command">
        <fa-icon :icon="['fas', 'heading']" /><span class="button-text">2</span>
      </i-button>
      <i-button title="Kop 3 <h3>" v-on:click="emitH3Command">
        <fa-icon :icon="['fas', 'heading']" /><span class="button-text">3</span>
      </i-button>
    </i-button-group>
    <i-button-group size="sm">
      <i-button disabled outline title="Genummerde lijst <ol> Ctrl+O">
        <fa-icon :icon="['fas', 'list-ol']" />
      </i-button>
      <i-button disabled outline title="Ongenummerde lijst <ul> Ctrl+U">
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
    emitBoldCommand() {
      this.$root.$emit('boldCommand');
    },
    emitItalicCommand() {
      this.$root.$emit('italicCommand');
    },
    emitH1Command() {
      this.$root.$emit('h1Command');
    },
    emitH2Command() {
      this.$root.$emit('h2Command');
    },
    emitH3Command() {
      this.$root.$emit('h3Command');
    }
  }
}
</script>
