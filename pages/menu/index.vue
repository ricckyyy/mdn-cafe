<template>
  <layout-wrapper>
    <layout-visual title="Menu" :height="40" visual="visual-menu" />
    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <div class="mb-20">
        <!-- <layout-menu-list /> -->
      </div>
      <base-button name="トップへ戻る" link="/" />
    </div>
  </layout-wrapper>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ $config }) {
    const { data } = await axios.get(`${$config.apiUrl}/menu`, {
      headers: { 'X-API-KEY': $config.apiKey },
    })
    console.log(data.contents);
    return {
      items: data.contents,
    }
  },
  head() {
    return {
      title: 'メニュー',
    }
  },
}
</script>
