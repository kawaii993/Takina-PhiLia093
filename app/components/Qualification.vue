<script setup lang="ts">
// 个人履历组件
interface Education {
  title: string
  period: string
  school: string
  courses: string
}

interface Skill {
  category: string
  technologies: { name: string; color: string }[]
}

interface WorkExperience {
  position: string
  period: string
  company: string
  responsibilities: string[]
  isActive: boolean
}

interface Project {
  title: string
  description: string
  technologies: { name: string; color: string }[]
  bgColor: string
  borderColor: string
}

interface Award {
  title: string
  subtitle: string
  icon: string
  bgColor: string
  borderColor: string
  iconColor: string
}

const education: Education[] = [
  {
    title: '计算机科学与技术',
    period: 'End : 2024',
    school: '学士学位',
    courses: '主修内容：编程开发、数据分析'
  }
]

const skills: Skill[] = [
  {
    category: '游戏运营',
    technologies: [
      { name: '社区运营', color: 'bg-pink-100 text-gray-800' },
      { name: '版本发行', color: 'bg-red-100 text-red-800' },
      { name: '活动策划', color: 'bg-teal-100 text-teal-800' }
    ]
  },
  {
    category: '前端开发',
    technologies: [
      { name: 'Astro', color: 'bg-orange-100 text-orange-800' },
      { name: 'Vue', color: 'bg-blue-100 text-blue-800' }
    ]
  },
  {
    category: '数据分析',
    technologies: [
      { name: 'MySql', color: 'bg-blue-100 text-blue-800' },
      { name: 'Python', color: 'bg-orange-100 text-orange-800' }
    ]
  },
  {
    category: '后端开发',
    technologies: [
      { name: 'C#', color: 'bg-purple-100 text-purple-800' },
      { name: 'Node.js', color: 'bg-green-100 text-green-800' }
    ]
  },
]

const workExperience: WorkExperience[] = [
  {
    position: '游戏运营',
    period: '2024.06 - 2025.06',
    company: '深圳',
    responsibilities: [
      '负责游戏版本发行与更新规划，协调研发与测试团队，确保版本稳定上线',
      '策划与执行线上节日活动、专题活动，提升用户活跃度与留存率',
      '运营社区（Discord、TapTap、Bilibili等），维护用户关系并收集反馈',
      '跟进数据分析，监测活动效果和玩家行为数据，提出优化建议',
      '参与海外版本本地化及上线流程，提升产品全球影响力'
    ],
    isActive: true
  },
  {
    position: '前端开发实习生',
    period: '2023.06 - 2023.12',
    company: '武汉',
    responsibilities: [
      '参与公司主要产品的前端开发，使用Vue.js构建用户界面',
      '优化页面性能，提升用户体验',
      '与后端团队协作，完成API对接'
    ],
    isActive: false
  },
]

const projects: Project[] = [
  {
    title: '全栈游戏运营',
    description: '负责主要7款游戏的版本发行、活动策划及社区运营等，包含活动玩法设计、社区氛围维护与用户反馈收集。',
    technologies: [
      { name: 'MMORPG', color: 'bg-blue-100 text-blue-800' },
      { name: 'TPS', color: 'bg-orange-100 text-orange-800' },
      { name: 'ARPG', color: 'bg-yellow-100 text-yellow-800' },
      { name: 'SIM', color: 'bg-green-100 text-green-800' },
      { name: 'MATCH-3', color: 'bg-purple-100 text-green-800' },
    ],
    bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
    borderColor: 'border-blue-100'
  },
  {
    title: '个人主页网站',
    description: '基于Astro与Tailwind构建的静态个人主页，支持文章订阅、项目展示与响应式设计。',
    technologies: [
      { name: 'Astro', color: 'bg-blue-100 text-blue-800' },
      { name: 'Tailwind', color: 'bg-orange-100 text-orange-800' },
      { name: 'TypeScript', color: 'bg-purple-100 text-purple-800' },
      { name: 'Vue', color: 'bg-green-100 text-green-800' },
    ],
    bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
    borderColor: 'border-blue-100'
  }
]

const awards: Award[] = [
  {
    title: '计算机系一等奖学金',
    subtitle: '2022-2024学年',
    icon: 'fas fa-medal',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    iconColor: 'text-yellow-500'
  },
  {
    title: '国家励志奖学金',
    subtitle: '2024年',
    icon: 'fas fa-code',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconColor: 'text-blue-500'
  },
  {
    title: 'CET-6证书',
    subtitle: '英语六级',
    icon: 'fas fa-certificate',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    iconColor: 'text-green-500'
  }
]
</script>

<template>
  <section class="bg-white rounded-3xl shadow-lg p-8 w-full mb-12"
    style="box-shadow: 0 4px 24px rgba(139,90,140,0.08);">
    <h2 class="text-3xl font-bold text-primary mb-8 text-center font-fumofumo">个人履历</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- 教育背景 -->
      <div class="space-y-6">
        <h3 class="text-xl font-semibold text-primary mb-4 flex items-center">
          <i class="fas fa-graduation-cap mr-2"></i>
          教育背景
        </h3>
        <div class="space-y-4">
          <div v-for="edu in education" :key="edu.title"
            class="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4">
            <div class="flex justify-between items-start mb-2">
              <h4 class="font-semibold text-gray-800">{{ edu.title }}</h4>
              <span class="text-sm text-gray-500">{{ edu.period }}</span>
            </div>
            <p class="text-gray-600 text-sm">{{ edu.school }}</p>
            <p class="text-gray-600 text-sm mt-1">{{ edu.courses }}</p>
          </div>
        </div>
      </div>

      <!-- 技能专长 -->
      <div class="space-y-6">
        <h3 class="text-xl font-semibold text-primary mb-4 flex items-center">
          <i class="fas fa-code mr-2"></i>
          技能专长
        </h3>
        <div class="space-y-3">
          <div v-for="skill in skills" :key="skill.category"
            class="flex items-center justify-between bg-gray-50 rounded-lg p-3">
            <span class="text-gray-700">{{ skill.category }}</span>
            <div class="flex gap-1">
              <span v-for="tech in skill.technologies" :key="tech.name"
                :class="`px-2 py-1 text-xs rounded ${tech.color}`">
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 工作经历 -->
    <div class="mt-8">
      <h3 class="text-xl font-semibold text-primary mb-6 flex items-center">
        <i class="fas fa-briefcase mr-2"></i>
        工作经历
      </h3>
      <div class="space-y-6">
        <div v-for="work in workExperience" :key="work.position"
          :class="`pl-6 relative ${work.isActive ? 'border-l-4 border-primary' : 'border-l-4 border-gray-300'}`">
          <div :class="`absolute w-3 h-3 rounded-full -left-2 top-2 ${work.isActive ? 'bg-primary' : 'bg-gray-300'}`">
          </div>
          <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <h4 class="font-semibold text-gray-800">{{ work.position }}</h4>
            <span class="text-sm text-gray-500">{{ work.period }}</span>
          </div>
          <p class="text-gray-600 text-sm mb-2">{{ work.company }}</p>
          <ul class="text-gray-600 text-sm space-y-1">
            <li v-for="responsibility in work.responsibilities" :key="responsibility">
              • {{ responsibility }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 项目经历 -->
    <div class="mt-8">
      <h3 class="text-xl font-semibold text-primary mb-6 flex items-center">
        <i class="fas fa-rocket mr-2"></i>
        主要项目
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="project in projects" :key="project.title"
          :class="`${project.bgColor} rounded-lg p-4 border ${project.borderColor}`">
          <h4 class="font-semibold text-gray-800 mb-2">{{ project.title }}</h4>
          <p class="text-gray-600 text-sm mb-3">{{ project.description }}</p>
          <div class="flex gap-2 flex-wrap">
            <span v-for="tech in project.technologies" :key="tech.name"
              :class="`px-2 py-1 text-xs rounded ${tech.color}`">
              {{ tech.name }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 获得荣誉 -->
    <div class="mt-8">
      <h3 class="text-xl font-semibold text-primary mb-6 flex items-center">
        <i class="fas fa-trophy mr-2"></i>
        获得荣誉
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="award in awards" :key="award.title"
          :class="`text-center ${award.bgColor} rounded-lg p-4 border ${award.borderColor}`">
          <i :class="`${award.icon} ${award.iconColor} text-2xl mb-2`"></i>
          <h4 class="font-semibold text-gray-800 text-sm">{{ award.title }}</h4>
          <p class="text-gray-600 text-xs">{{ award.subtitle }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 组件特定样式 */
section {
  font-size: 1rem;
  /* 默认 16px，比 text-sm 稍大 */
  line-height: 1.6;
}

section .text-sm {
  font-size: 0.95rem;
  /* 稍微大一点 */
}

section .text-xs {
  font-size: 0.85rem;
}
</style>
