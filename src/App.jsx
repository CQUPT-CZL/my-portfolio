import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code, 
  Cpu, 
  Database, 
  Terminal,
  Briefcase,
  GraduationCap,
  Award,
  ChevronDown,
  Brain
} from 'lucide-react';

const Portfolio = () => {
  const [, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  // 监听滚动以改变导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // 简历数据
  const profile = {
    name: "崔子梁",
    title: "AI 应用开发工程师 / 算法工程师",
    tagline: "专注于 Agent 开发、LLM 微调与 RAG 技术的全栈 AI 开发者",
    location: "重庆 / 山东",
    email: "230201019@stu.cqupt.edu.cn",
    phone: "132-7271-1345",
    github: "https://github.com/CQUPT-CZL",
    education: [
      {
        school: "重庆邮电大学",
        degree: "计算机科学与技术 (硕士)",
        period: "2023.09 - 2026.06",
        icon: <GraduationCap className="w-5 h-5" />
      },
      {
        school: "烟台大学",
        degree: "软件工程 (本科)",
        period: "2019.09 - 2023.06",
        icon: <GraduationCap className="w-5 h-5" />
      }
    ]
  };

  const skills = {
    languages: ["Python", "Java", "C", "SQL"],
    ai_core: ["LangChain", "LangGraph", "LangSmith", "Llama-Factory", "Huggingface", "Transformers"],
    techniques: ["RAG", "LoRA/QLoRA 微调", "Prompt Engineering", "模型量化", "Agent Tools"],
    devops: ["Docker", "Linux", "FastAPI", "Redis", "Git"]
  };

  const experience = [
    {
      company: "中冶赛迪-技术研究院 (央企)",
      role: "AI 应用算法工程师",
      period: "2025.06 - 2025.11",
      description: "主导 Multi-Agent 框架调研与落地，全栈自研知识图谱构建平台。",
      achievements: [
        "深度调研 LangGraph/Autogen，设计并实现多智能体框架评估平台。",
        "全栈自研知识图谱平台，打通非结构化文本到图谱的自动化构建链路。",
        "攻克基于图谱的复杂推理问答核心模块。"
      ]
    },
    {
      company: "光立方(重庆)智能科技有限公司",
      role: "AI 应用开发工程师",
      period: "2025.03 - 2025.06",
      description: "参与 LLM 后端架构重构，负责从数据构建到模型微调的端到端优化。",
      achievements: [
        "深度优化模型推理与缓存策略，核心接口平均响应延迟降低 30%。",
        "开发“指令化照片检索”、“智能账单查询”等 Agent 工具。",
        "主导 SFT 数据集生产流程（2万条高质量指令），提升特定任务模型性能。"
      ]
    }
  ];

  const projects = [
    {
      title: "基于深度推理大模型的自适应学习平台",
      subtitle: "Dynamic-Tutor",
      tech: ["Multi-Agent", "GNN", "LLM", "知识图谱"],
      desc: "集成了智能答案诊断、知识图谱可视化的个性化教育解决方案。融合前沿 Multi-agent 协作策略，提供自适应学习体验。",
      link: "https://github.com/CQUPT-CZL/Dynamic-Tutor",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "智能知识图谱构建系统",
      subtitle: "LKG-GEN",
      tech: ["LLM", "NLP", "End-to-End Pipeline"],
      desc: "端到端的知识图谱自动化构建平台，通过多阶段 AI 流水线将非结构化文档转换为结构化知识图谱。支持快速扩展到不同专业领域。",
      link: "https://github.com/CQUPT-CZL/LKG-GEN",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "多模态电报机器人",
      subtitle: "LangChain ChatBot",
      tech: ["LangChain", "FastAPI", "Redis", "RAG", "Telegram Bot"],
      desc: "基于 LangChain 的智能对话系统，核心功能包括情绪感知、多模态交互（图生文/文生图）以及基于 RAG 的知识库问答。",
      link: "#",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "石油压井大模型层级微调",
      subtitle: "Industrial LLM Fine-tuning",
      tech: ["SFT", "Transformers", "LoRA", "Layer-wise Tuning"],
      desc: "针对石油压井领域大模型进行层级微调（Q、K、V逐层优化），结合领域知识提升模型在特定工业场景下的准确性。发表 EI 会议论文一篇。",
      link: "#",
      color: "from-orange-500 to-red-500"
    }
  ];

  const awards = [
    "2024年研究生学业奖学金特等奖 (前5%)",
    "2024年蓝桥杯算法编程比赛研究生组重庆赛区第一名",
    "2024年 CCF-CSP 计算机软件能力认证前 3.8%",
    "2025年 挑战杯-揭榜挂帅专项赛二等奖"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            CZL.AI
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-indigo-400 transition-colors uppercase tracking-wider"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
          <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm mb-6">
                <Terminal className="w-4 h-4 mr-2" />
                <span>Available for AI Engineering Roles</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                你好, 我是 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{profile.name}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-400 mb-6 font-light">
                {profile.title}
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mb-8 leading-relaxed">
                {profile.tagline}。拥有构建复杂智能对话系统、多 Agent 协作平台以及工业级大模型微调的实战经验。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all group">
                  <Github className="w-5 h-5 mr-2 group-hover:text-white" />
                  <span>GitHub Profile</span>
                </a>
                <a href={`mailto:${profile.email}`} className="flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg shadow-indigo-500/20 transition-all">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>联系我</span>
                </a>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-500">
                <div className="flex items-center">
                  <GraduationCap className="w-4 h-4 mr-2 text-indigo-400" />
                  重庆邮电大学 · 计算机科学与技术 (硕士)
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-indigo-400" />
                  {profile.location}
                </div>
              </div>
            </div>
            
            {/* Abstract Code Decoration */}
            <div className="md:w-1/3 mt-12 md:mt-0 flex justify-center">
              <div className="relative p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 w-full max-w-md">
                <div className="flex space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3 font-mono text-xs md:text-sm text-slate-300">
                  <p><span className="text-purple-400">class</span> <span className="text-yellow-400">AIEngineer</span>:</p>
                  <p className="pl-4">def <span className="text-blue-400">__init__</span>(self):</p>
                  <p className="pl-8">self.skills = [<span className="text-green-400">'LangChain'</span>, <span className="text-green-400">'RAG'</span>, <span className="text-green-400">'LoRA'</span>]</p>
                  <p className="pl-8">self.focus = <span className="text-green-400">'Agentic Workflow'</span></p>
                  <p className="pl-4">&nbsp;</p>
                  <p className="pl-4"><span className="text-purple-400">async def</span> <span className="text-blue-400">solve_problem</span>(self, task):</p>
                  <p className="pl-8"><span className="text-purple-400">await</span> self.analyze(task)</p>
                  <p className="pl-8"><span className="text-purple-400">return</span> <span className="text-green-400">"Optimized Solution"</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900/50 border-y border-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <Cpu className="w-8 h-8 text-indigo-500 mr-4" />
            <h2 className="text-3xl font-bold">技术栈</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Code className="w-4 h-4 mr-2 text-blue-400" /> 编程语言
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-900 text-slate-300 rounded-md text-sm border border-slate-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Brain className="w-4 h-4 mr-2 text-purple-400" /> AI 核心框架
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.ai_core.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-indigo-900/30 text-indigo-300 rounded-md text-sm border border-indigo-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Database className="w-4 h-4 mr-2 text-green-400" /> 关键技术
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.techniques.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-900 text-slate-300 rounded-md text-sm border border-slate-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

             <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Terminal className="w-4 h-4 mr-2 text-orange-400" /> 开发运维
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.devops.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-900 text-slate-300 rounded-md text-sm border border-slate-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <Briefcase className="w-8 h-8 text-indigo-500 mr-4" />
            <h2 className="text-3xl font-bold">工作经历</h2>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-indigo-500/50 before:to-transparent">
            {experience.map((job, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                {/* Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-indigo-500 bg-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Briefcase className="w-5 h-5 text-indigo-400" />
                </div>
                
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-xl hover:shadow-indigo-500/10 transition-all">
                  <div className="flex justify-between items-start mb-2 flex-col sm:flex-row">
                    <h3 className="font-bold text-xl text-white">{job.company}</h3>
                    <span className="text-xs font-mono text-indigo-400 bg-indigo-900/20 px-2 py-1 rounded mt-1 sm:mt-0">{job.period}</span>
                  </div>
                  <div className="text-slate-300 font-medium mb-3">{job.role}</div>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{job.description}</p>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-400">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <Database className="w-8 h-8 text-indigo-500 mr-4" />
            <h2 className="text-3xl font-bold">精选项目</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                      <p className="text-sm font-mono text-slate-500 mt-1">{project.subtitle}</p>
                    </div>
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                  
                  <p className="text-slate-400 mb-6 h-auto min-h-[3rem] leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-900 border border-slate-800 rounded text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block mb-8">
             <Award className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
             <h2 className="text-2xl font-bold">荣誉奖项</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, idx) => (
               <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-lg border border-slate-800 flex flex-col items-center justify-center shadow-lg">
                 <div className="text-yellow-500/80 mb-3">★</div>
                 <p className="text-slate-300 font-medium">{award}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Let's Build Something Amazing</h2>
          <div className="flex justify-center space-x-6 mb-8">
            <a href={`mailto:${profile.email}`} className="flex items-center text-slate-400 hover:text-indigo-400 transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center text-slate-400 hover:text-white transition-colors">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} {profile.name}. Generated based on Resume.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;