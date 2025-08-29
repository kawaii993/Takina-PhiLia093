<script setup lang="ts">
// 我的历程组件
interface TimelineItem {
  date: string
  title: string
  description: string
}

const timelineItems: TimelineItem[] = [
  {
    date: '2025.08',
    title: '整理并复盘第一段职场经历，规划下一步的方向',
    description: '我一读再读，却不得不说青春是本太仓促的书。'
  },
  {
    date: '2024.06',
    title: '正式进入游戏行业',
    description: '本科毕业之后正式进入游戏行业，开始升级打怪之路！'
  },
  {
    date: '2023.12',
    title: '第一次合作',
    description: '与kai合作开始开发项目，创立了Apex相关道具店铺，制作发布各种攻略前瞻内容等，独立提升运营能力。'
  },
  {
    date: '2021.05',
    title: '单个视频50w播放，累计130w播放',
    description: '且视他人疑目如盏盏鬼火，大胆地去走你的夜路。'
  },
  {
    date: '2020.04.09',
    title: 'b站单个视频10w播放',
    description: '对游戏的热爱有了数据的体现，这使我充满了决心。'
  },
  {
    date: '2020.04.07',
    title: 'b站第一个2w播放视频',
    description: '制作的视频中第一个突破2w播放的游戏攻略视频，有正反馈后开始继续创作。'
  },
  {
    date: '2019.07',
    title: '正式接触编程开发相关内容',
    description: '开始接触前端开发，学习了HTML、CSS和JavaScript，Mysql、Python等语言'
  },
  {
    date: '2013.10',
    title: '第一个大型游戏，开启游戏探索之路',
    description: '从洛克王国赛尔号这类网页游戏转到Minecraft、使命召唤等大型游戏'
  }
]
</script>

<template>
  <aside class="w-full md:w-1/2 bg-white rounded-3xl shadow-lg p-8 mb-12 timeline-section flex flex-col min-w-[280px]"
    style="box-shadow: 0 4px 24px rgba(139,90,140,0.08);">
    <h2 class="text-2xl font-bold text-primary mb-6">我的历程</h2>
    <ul class="timeline list-none p-0 m-0 space-y-6 max-h-96 overflow-y-auto pr-2" style="scrollbar-width: thin;">
      <li v-for="(item, index) in timelineItems" :key="index">
        <div class="flex items-start gap-4">
          <div class="flex flex-col items-center">
            <div class="w-3 h-3 rounded-full bg-primary mb-1"></div>
            <div v-if="index < timelineItems.length - 1" class="h-full w-0.5 bg-gray-200 flex-1"></div>
          </div>
          <div>
            <div class="text-sm text-gray-400">{{ item.date }}</div>
            <div class="font-semibold text-lg">{{ item.title }}</div>
            <div class="text-gray-600 text-base">{{ item.description }}</div>
          </div>
        </div>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
/* 自定义滚动条样式 */
.timeline::-webkit-scrollbar {
  width: 4px;
}

.timeline::-webkit-scrollbar-track {
  background: rgba(139, 90, 140, 0.05);
  border-radius: 2px;
}

.timeline::-webkit-scrollbar-thumb {
  background: rgba(139, 90, 140, 0.3);
  border-radius: 2px;
}

.timeline::-webkit-scrollbar-thumb:hover {
  background: rgba(139, 90, 140, 0.5);
}
</style>
