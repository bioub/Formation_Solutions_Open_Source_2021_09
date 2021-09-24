<!-- <template>
  <div class="Clock">{{ now.toLocaleTimeString() }}</div>
</template> -->

<script>
export default {
  name: 'Clock',
  data() {
    return {
      now: new Date(),
    };
  },
  mounted() {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  },
  render() {
    return <div className="Clock">{this.now.toLocaleTimeString()}</div>;
  },
};
</script>
