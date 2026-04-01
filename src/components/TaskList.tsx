import React, { useState } from 'react';
import { 
  GripVertical, 
  MoreHorizontal, 
  Calendar, 
  MessageSquare, 
  Paperclip, 
  Plus, 
  Filter,
  Check,
  X,
  ChevronDown
} from 'lucide-react';
import CustomDatePicker from './CustomDatePicker';

interface Task {
  id: string;
  title: string;
  status: 'todo' | 'inprogress' | 'completed';
  tag?: {
    name: string;
    color: string;
  };
  dueDate?: string;
  comments?: number;
  attachments?: number;
  userAvatar: string;
  completed?: boolean;
}

const initialTasks: Task[] = [
  // To Do
  {
    id: '1',
    title: '사용자 온보딩 완료',
    status: 'todo',
    tag: { name: '마케팅', color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10' },
    dueDate: '내일',
    comments: 1,
    userAvatar: 'https://images.unsplash.com/photo-1535711603863-10d97bc7a2d4?w=100&h=100&fit=crop',
    completed: false
  },
  {
    id: '2',
    title: '팀과 Dribbble 우선순위 문제 해결',
    status: 'todo',
    dueDate: '2027년 1월 8일',
    comments: 2,
    attachments: 1,
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    completed: true
  },
  {
    id: '3',
    title: '라이선스 변경 및 제품 제거',
    status: 'todo',
    tag: { name: '마케팅', color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10' },
    dueDate: '2027년 2월 12일',
    comments: 1,
    userAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
    completed: true
  },
  // In Progress
  {
    id: '4',
    title: '진행 중(WIP) 대시보드',
    status: 'inprogress',
    dueDate: '오늘',
    comments: 1,
    userAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
    completed: false
  },
  {
    id: '5',
    title: '칸반 플로우 매니저',
    status: 'inprogress',
    tag: { name: '템플릿', color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10' },
    dueDate: '2027년 2월 12일',
    comments: 8,
    attachments: 2,
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    completed: false
  },
  {
    id: '6',
    title: '제품 업데이트 - 2024년 4분기',
    status: 'inprogress',
    dueDate: '2027년 2월 12일',
    comments: 8,
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    completed: false
  },
  {
    id: '7',
    title: '티켓 인박스 복귀 시 Figbot 댓글 자동화 설정',
    status: 'inprogress',
    dueDate: '2027년 3월 8일',
    comments: 1,
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    completed: false
  },
  // Completed
  {
    id: '8',
    title: '내부 피드백 관리',
    status: 'completed',
    dueDate: '내일',
    comments: 1,
    userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    completed: false
  },
  {
    id: '9',
    title: 'React Native 및 Flutter 프로젝트 진행',
    status: 'completed',
    tag: { name: '개발', color: 'text-orange-600 bg-orange-50 dark:bg-orange-500/10' },
    dueDate: '2027년 1월 8일',
    userAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    completed: false
  },
  {
    id: '10',
    title: '마케팅 에셋 디자인',
    status: 'completed',
    tag: { name: '마케팅', color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10' },
    dueDate: '2027년 1월 8일',
    comments: 2,
    attachments: 1,
    userAvatar: 'https://images.unsplash.com/photo-1535711603863-10d97bc7a2d4?w=100&h=100&fit=crop',
    completed: false
  },
  {
    id: '11',
    title: '칸반 플로우 매니저',
    status: 'completed',
    tag: { name: '템플릿', color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10' },
    dueDate: '2027년 2월 12일',
    comments: 8,
    userAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
    completed: false
  }
];

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [activeFilter, setActiveFilter] = useState<'all' | 'todo' | 'inprogress' | 'completed'>('all');
  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    dueDate: '',
    status: 'todo' as 'todo' | 'inprogress' | 'completed',
    tag: '마케팅',
    assignee: 'Mayad Ahmed',
    description: ''
  });

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDragStart = (id: string) => {
    setDraggedTaskId(id);
  };

  const handleDrop = (status: 'todo' | 'inprogress' | 'completed') => {
    if (!draggedTaskId) return;
    
    setTasks(prev => prev.map(task => 
      task.id === draggedTaskId ? { ...task, status } : task
    ));
    setDraggedTaskId(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleCreateTask = () => {
    if (!newTask.title.trim()) return;

    const task: Task = {
      id: Date.now().toString(),
      title: newTask.title,
      status: newTask.status,
      tag: { 
        name: newTask.tag, 
        color: newTask.tag === '마케팅' ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10' : 
               newTask.tag === '템플릿' ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10' : 
               'text-orange-600 bg-orange-50 dark:bg-orange-500/10' 
      },
      dueDate: newTask.dueDate || 'Today',
      comments: 0,
      userAvatar: 'https://images.unsplash.com/photo-1535711603863-10d97bc7a2d4?w=100&h=100&fit=crop',
      completed: false
    };

    setTasks([task, ...tasks]);
    setIsModalOpen(false);
    setNewTask({
      title: '',
      dueDate: '',
      status: 'todo',
      tag: '마케팅',
      assignee: 'Mayad Ahmed',
      description: ''
    });
  };

  const filteredTasks = tasks.filter(task => {
    if (activeFilter === 'all') return true;
    return task.status === activeFilter;
  });

  const todoTasks = filteredTasks.filter(t => t.status === 'todo');
  const inProgressTasks = filteredTasks.filter(t => t.status === 'inprogress');
  const completedTasks = filteredTasks.filter(t => t.status === 'completed');

  const getTaskCount = (status: 'all' | 'todo' | 'inprogress' | 'completed') => {
    if (status === 'all') return tasks.length;
    return tasks.filter(t => t.status === status).length;
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">작업 목록</h2>
        <nav className="flex items-center gap-2 text-sm font-medium">
          <span className="text-slate-400">홈</span>
          <span className="text-slate-400">/</span>
          <span className="text-indigo-600">작업 목록</span>
        </nav>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-[#1A222C] p-2 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
        <div className="flex flex-wrap gap-1 p-1">
          {[
            { id: 'all', label: '전체 작업' },
            { id: 'todo', label: '할 일' },
            { id: 'inprogress', label: '진행 중' },
            { id: 'completed', label: '완료' }
          ].map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as any)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${activeFilter === filter.id ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
            >
              {filter.label}
              <span className={`px-1.5 py-0.5 rounded text-[10px] ${activeFilter === filter.id ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                {getTaskCount(filter.id as any)}
              </span>
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-3 px-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <Filter className="w-4 h-4" />
            필터 및 정렬
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors"
          >
            새 작업 추가
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Task Groups */}
      <div className="space-y-8 pb-10">
        {activeFilter !== 'inprogress' && activeFilter !== 'completed' && todoTasks.length > 0 && (
          <TaskGroup 
            title="할 일" 
            status="todo"
            count={todoTasks.length} 
            tasks={todoTasks} 
            onToggle={toggleTask} 
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        )}
        
        {activeFilter !== 'todo' && activeFilter !== 'completed' && inProgressTasks.length > 0 && (
          <TaskGroup 
            title="진행 중" 
            status="inprogress"
            count={inProgressTasks.length} 
            tasks={inProgressTasks} 
            onToggle={toggleTask} 
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        )}

        {activeFilter !== 'todo' && activeFilter !== 'inprogress' && completedTasks.length > 0 && (
          <TaskGroup 
            title="완료" 
            status="completed"
            count={completedTasks.length} 
            tasks={completedTasks} 
            onToggle={toggleTask} 
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        )}
      </div>

      {/* Add New Task Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-all">
          <div className="bg-white dark:bg-[#1A222C] w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="p-8 pb-0 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">새 작업 추가하기</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">할 일 목록을 효율적으로 관리하세요: 새 작업을 추가합니다.</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">작업 제목</label>
                <input 
                  type="text" 
                  value={newTask.title}
                  onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                  placeholder="작업 제목을 입력하세요"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 dark:focus:ring-indigo-900/20 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">마감일</label>
                  <CustomDatePicker 
                    placeholder="마감일 선택"
                    onChange={(date) => {
                      if (date instanceof Date) {
                        setNewTask({ ...newTask, dueDate: date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric', year: 'numeric' }) });
                      }
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">상태</label>
                  <div className="relative">
                    <select 
                      value={newTask.status}
                      onChange={(e) => setNewTask({...newTask, status: e.target.value as any})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="todo">할 일</option>
                      <option value="inprogress">진행 중</option>
                      <option value="completed">완료</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">태그</label>
                  <div className="relative">
                    <select 
                      value={newTask.tag}
                      onChange={(e) => setNewTask({...newTask, tag: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="마케팅">마케팅</option>
                      <option value="템플릿">템플릿</option>
                      <option value="개발">개발</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">담당자</label>
                  <div className="relative">
                    <select 
                      value={newTask.assignee}
                      onChange={(e) => setNewTask({...newTask, assignee: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="Mayad Ahmed">Mayad Ahmed</option>
                      <option value="Jhon Doe">Jhon Doe</option>
                      <option value="Jane Smith">Jane Smith</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">설명</label>
                <textarea 
                  rows={4}
                  value={newTask.description}
                  onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                  placeholder="작업 설명을 입력하세요"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all resize-none overflow-y-auto"
                ></textarea>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-8 pt-4 flex items-center justify-between border-t border-slate-50 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500">조회자:</span>
                <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
                    "https://images.unsplash.com/photo-1535711603863-10d97bc7a2d4?w=100&h=100&fit=crop"
                  ].map((url, i) => (
                    <img key={i} src={url} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 object-cover" alt="Viewer" />
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  취소
                </button>
                <button 
                  onClick={handleCreateTask}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-lg shadow-indigo-200 dark:shadow-none transition-all active:scale-95"
                >
                  작업 생성하기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface TaskGroupProps {
  title: string;
  status: 'todo' | 'inprogress' | 'completed';
  count: number;
  tasks: Task[];
  onToggle: (id: string) => void;
  onDragStart: (id: string) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (status: 'todo' | 'inprogress' | 'completed') => void;
}

const TaskGroup: React.FC<TaskGroupProps> = ({ 
  title, 
  status, 
  count, 
  tasks, 
  onToggle, 
  onDragStart, 
  onDragOver, 
  onDrop 
}) => {
  return (
    <div 
      className="space-y-4 min-h-[100px]"
      onDragOver={onDragOver}
      onDrop={() => onDrop(status)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">{title}</h3>
          <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500 dark:text-slate-400">
            {count}
          </span>
        </div>
        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex flex-col gap-3">
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onToggle={onToggle} 
            onDragStart={onDragStart}
          />
        ))}
      </div>
    </div>
  );
};

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDragStart: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDragStart }) => {
  return (
    <div 
      draggable
      onDragStart={() => onDragStart(task.id)}
      className="group flex items-center gap-4 bg-white dark:bg-[#1A222C] p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all cursor-move active:opacity-50"
    >
      <div className="flex items-center gap-3 shrink-0">
        <button className="text-slate-300 dark:text-slate-600 cursor-grab active:cursor-grabbing hover:text-slate-400">
          <GripVertical className="w-5 h-5" />
        </button>
        
        <label className="flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="hidden" 
            checked={task.completed} 
            onChange={() => onToggle(task.id)} 
          />
          <div className={`w-5 h-5 rounded-[0.25rem] border flex items-center justify-center transition-all ${task.completed ? 'border-blue-500 bg-blue-500' : 'border-slate-300 dark:border-slate-600 hover:border-blue-500'}`}>
            {task.completed && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
          </div>
        </label>
      </div>

      <div className="flex-1 min-w-0">
        <span className={`text-sm font-semibold block truncate transition-all ${task.completed ? 'text-slate-400 dark:text-slate-500 line-through decoration-slate-400 decoration-1' : 'text-slate-700 dark:text-slate-200'}`}>
          {task.title}
        </span>
      </div>

      <div className="hidden sm:flex items-center gap-6 shrink-0 ml-4">
        {task.tag && (
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${task.tag.color}`}>
            {task.tag.name}
          </span>
        )}
        
        {task.dueDate && (
          <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
            <Calendar className="w-4 h-4" />
            <span className="text-xs font-medium">{task.dueDate}</span>
          </div>
        )}

        {(task.comments !== undefined || task.attachments !== undefined) && (
          <div className="flex items-center gap-3">
            {task.comments !== undefined && (
              <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
                <MessageSquare className="w-4 h-4" />
                <span className="text-xs font-medium">{task.comments}</span>
              </div>
            )}
            {task.attachments !== undefined && (
              <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
                <Paperclip className="w-4 h-4" />
                <span className="text-xs font-medium">{task.attachments}</span>
              </div>
            )}
          </div>
        )}

        <img 
          src={task.userAvatar} 
          alt="Avatar" 
          className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-800 object-cover" 
        />
      </div>
    </div>
  );
};

export default TaskList;
