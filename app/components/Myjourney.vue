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
    title: '整理并复盘第一段职场经历',
    description: '提炼可迁移能力，并规划下一步发展方向。这一世，我要夺回属于我的一切！'
  },
  {
    date: '2024.06',
    title: '正式进入游戏行业',
    description: '本科毕业后进入游戏行业，参与运营累计20+款产品，开始升级打怪之路。'
  },
  {
    date: '2023.12',
    title: '游戏相关合作项目',
    description: '与伙伴合作开发游戏周边项目（Apex 道具店铺 & 攻略站），实现电商转化与内容变现，独立提升从内容制作到用户运营的全链路能力。'
  },
  {
    date: '2021.05',
    title: '单个视频50w播放，累计130w播放',
    description: '船新的里程碑！！！'
  },
  {
    date: '2020.04',
    title: 'b站单个视频2w / 10w播放',
    description: '创作游戏攻略视频，运营个人 B 站频道，奠定了持续创作与数据分析的基础，对游戏的热爱有了不错的数据体现，这使我充满了决心。'
  },
  {
    date: '2019.07',
    title: '正式接触编程开发相关内容',
    description: '自学编程开发，掌握 HTML、CSS、JavaScript、Python、MySQL 基础，后续在项目中能结合数据与前端做小型工具。'
  },
  {
    date: '2013.10',
    title: '游戏探索之路',
    description: '第一次深度体验 Minecraft、使命召唤等大型游戏，培养了对游戏机制、玩家体验和社区文化的敏感度。'
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
