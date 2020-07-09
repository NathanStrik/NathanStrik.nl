<template>
  <div id="markdowntools">
    <i-button-group size="sm">
      <i-button v-on:click="emitBoldCommand">
        <fa-icon :icon="['fas', 'bold']" />
      </i-button>
      <i-button>
        <fa-icon :icon="['fas', 'italic']" />
      </i-button>
    </i-button-group>
    <i-button-group size="sm">
      <i-button>
        <fa-icon :icon="['fas', 'link']" />
      </i-button>
      <i-button>
        <fa-icon :icon="['fas', 'quote-right']" />
      </i-button>
      <i-button>
        <fa-icon :icon="['fas', 'code']" />
      </i-button>
      <i-button>
        <fa-icon :icon="['fas', 'image']" />
      </i-button>
    </i-button-group>
    <i-button-group size="sm">
      <i-button>
        <fa-icon :icon="['fas', 'list-ol']" />
      </i-button>
      <i-button>
        <fa-icon :icon="['fas', 'list-ul']" />
      </i-button>
      <i-button>
        <fa-icon :icon="['fas', 'minus']" />
      </i-button>
    </i-button-group>
    <i-button-group size="sm">
      <i-button>
        <fa-icon :icon="['fas', 'undo-alt']" />
      </i-button>
      <i-button>
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
      console.log('Emitting bold command!');
      this.$root.$emit('boldCommand');
    }
  }
}
</script>