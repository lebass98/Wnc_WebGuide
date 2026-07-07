import React, { useState, useEffect, useRef } from 'react';
import { 
  Plus, 
  MoreHorizontal, 
  Settings, 
  Mail, 
  Video, 
  Box, 
  CheckSquare, 
  Clipboard,
  X,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface Integration {
  id: string;
  name: string;
  description: string;
  isEnabled: boolean;
  icon: React.ReactNode;
  iconBg: string;
}

const Integrations: React.FC = () => {
  const [integrations, setIntegrations] = useState<Integration[]>([
    { 
      id: '1', 
      name: 'Mailchimp', 
      description: '마케팅 이메일 전송 및 캠페인 관리를 자동화하기 위해 Mailchimp를 연결하세요.', 
      isEnabled: true, 
      icon: <span className="text-2xl">🐵</span>, 
      iconBg: 'bg-white' 
    },
    { 
      id: '2', 
      name: 'Google Meet', 
      description: '원활한 화상 회의 진행을 위해 Google Meet 계정을 연동하세요.', 
      isEnabled: false, 
      icon: <Video className="w-6 h-6 text-emerald-500" />, 
      iconBg: 'bg-white' 
    },
    { 
      id: '3', 
      name: 'Zoom', 
      description: '원격 회의 및 팀 협업을 위해 Zoom을 통합하세요.', 
      isEnabled: false, 
      icon: <Video className="w-6 h-6 text-blue-500" />, 
      iconBg: 'bg-blue-500' 
    },
    { 
      id: '4', 
      name: 'Loom', 
      description: '영상 메시지를 쉽게 녹화하고 공유, 관리할 수 있도록 Loom을 연동하세요.', 
      isEnabled: false, 
      icon: <Box className="w-6 h-6 text-indigo-500" />, 
      iconBg: 'bg-white' 
    },
    { 
      id: '5', 
      name: 'Linear', 
      description: '팀의 이슈를 관리하고 진행 상황을 추적하기 위해 Linear를 연결하세요.', 
      isEnabled: false, 
      icon: <CheckSquare className="w-6 h-6 text-indigo-600" />, 
      iconBg: 'bg-indigo-600' 
    },
    { 
      id: '6', 
      name: 'Gmail', 
      description: '워크스페이스에서 직접 이메일을 주고받으며 관리하도록 Gmail을 연동하세요.', 
      isEnabled: false, 
      icon: <Mail className="w-6 h-6 text-red-500" />, 
      iconBg: 'bg-white' 
    },
    { 
      id: '7', 
      name: 'Trello', 
      description: '어디서든 일정을 기록하고 칸반 보드로 시각적으로 관리하세요.', 
      isEnabled: false, 
      icon: <Clipboard className="w-6 h-6 text-blue-600" />, 
      iconBg: 'bg-blue-600' 
    },
    { 
      id: '8', 
      name: 'Notion', 
      description: '팀의 지식을 기록, 공유하고 프로젝트를 함께 체계적으로 구축하세요.', 
      isEnabled: false, 
      icon: <CheckSquare className="w-6 h-6 text-black" />, 
      iconBg: 'bg-white' 
    },
    { 
      id: '9', 
      name: 'Jira', 
      description: '팀 전체가 이슈를 추적하고 프로젝트 진행 상황을 쉽게 확인할 수 있습니다.', 
      isEnabled: false, 
      icon: <Box className="w-6 h-6 text-blue-500" />, 
      iconBg: 'bg-white' 
    },
  ]);

  const [activeModal, setActiveModal] = useState<'none' | 'new' | 'settings' | 'details' | 'remove'>('none');
  const [selectedApp, setSelectedApp] = useState<Integration | null>(null);
  const [dropdownOpenId, setDropdownOpenId] = useState<string | null>(null);

  // States for New Integration form
  const [newAppName, setNewAppName] = useState('');
  const [newClientId, setNewClientId] = useState('');
  const [newClientSecret, setNewClientSecret] = useState('');
  const [newAuthUri, setNewAuthUri] = useState('');

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpenId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleIntegration = (id: string) => {
    setIntegrations(prev => prev.map(item => 
      item.id === id ? { ...item, isEnabled: !item.isEnabled } : item
    ));
  };

  const handleRemove = () => {
    if (selectedApp) {
      setIntegrations(prev => prev.filter(item => item.id !== selectedApp.id));
      setActiveModal('none');
      setSelectedApp(null);
    }
  };

  const handleAddIntegration = () => {
    if (!newAppName || newAppName === '옵션 선택') return;

    // Find the base app to steal its icon if it exists in the template list
    const templateApp = integrations.find(app => app.name === newAppName);
    
    const newIntegration: Integration = {
      id: Date.now().toString(),
      name: newAppName,
      description: templateApp ? templateApp.description : '팀에서 추가한 커스텀 앱 연동 항목입니다.',
      isEnabled: true,
      icon: templateApp ? templateApp.icon : <Box className="w-6 h-6 text-slate-500" />,
      iconBg: templateApp ? templateApp.iconBg : 'bg-white'
    };

    setIntegrations(prev => [newIntegration, ...prev]);
    
    // Reset form and close
    setNewAppName('');
    setNewClientId('');
    setNewClientSecret('');
    setNewAuthUri('');
    setActiveModal('none');
  };

  return (
    <div className="space-y-8 pb-10">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            연동 서비스 관리
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>페이지</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">연동</span>
          </div>
        </div>
        <button 
          onClick={() => setActiveModal('new')}
          className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold text-sm transition-all shadow-md shadow-indigo-200 dark:shadow-none"
        >
          <Plus className="w-4 h-4" />
          새 연동 추가
        </button>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {integrations.map((item) => (
          <div key={item.id} className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all">
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border border-slate-50 dark:border-slate-800 ${item.id === '3' || item.id === '5' || item.id === '7' ? item.iconBg : 'bg-white dark:bg-slate-800'} shadow-sm`}>
                  {item.id === '3' || item.id === '5' || item.id === '7' ? (
                    <div className="text-white">{item.icon}</div>
                  ) : item.icon}
                </div>
                <div className="relative" ref={dropdownOpenId === item.id ? dropdownRef : null}>
                  <button 
                    onClick={() => setDropdownOpenId(dropdownOpenId === item.id ? null : item.id)}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                  >
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                  {dropdownOpenId === item.id && (
                    <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-100 dark:border-slate-700 py-1 z-10 animate-in fade-in zoom-in duration-100">
                      <button 
                        onClick={() => {
                          setSelectedApp(item);
                          setActiveModal('remove');
                          setDropdownOpenId(null);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                      >
                        삭제하기
                      </button>
                    </div>
                  )}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{item.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="px-6 py-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between bg-slate-50/30 dark:bg-slate-800/20">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => { setSelectedApp(item); setActiveModal('settings'); }}
                  className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-indigo-600 transition-all"
                >
                  <Settings className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => { setSelectedApp(item); setActiveModal('details'); }}
                  className="px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-all"
                >
                  상세 정보
                </button>
              </div>

              {/* Toggle Switch */}
              <button 
                onClick={() => toggleIntegration(item.id)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${item.isEnabled ? 'bg-indigo-600' : 'bg-slate-200 dark:bg-slate-700'}`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${item.isEnabled ? 'translate-x-5' : 'translate-x-0'}`}
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modals Backdrop */}
      {activeModal !== 'none' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          
          {/* Settings Modal */}
          {activeModal === 'settings' && selectedApp && (
            <div className="bg-white dark:bg-[#1A222C] w-full max-w-[500px] rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-8 pb-6 relative">
                <button 
                  onClick={() => setActiveModal('none')}
                  className="absolute right-6 top-6 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">연동 설정</h3>
                <p className="text-[13px] text-slate-500 dark:text-slate-400">연결된 앱 및 서비스의 설정을 관리합니다.</p>
              </div>

              <div className="px-8 py-2 space-y-5">
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 block">앱 선택</label>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-[13px] text-slate-600 dark:text-slate-300 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all">
                      <option>{selectedApp.name}</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 block">클라이언트 ID</label>
                  <input 
                    type="text" 
                    defaultValue="872364219810-abc123xyz456.apps.googleusercontent.com"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-[13px] text-slate-600 dark:text-slate-300 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 block">클라이언트 비밀키 (Secret)</label>
                  <input 
                    type="text" 
                    defaultValue="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e"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-[13px] text-slate-600 dark:text-slate-300 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 block">인증 기본 URI</label>
                  <input 
                    type="text" 
                    defaultValue="https://accounts.application.com/o/oauth2/auth"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-[13px] text-slate-600 dark:text-slate-300 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>
              </div>

              <div className="p-8 pt-6 space-y-6">
                <p className="text-[13px] text-slate-500 dark:text-slate-400">'변경사항 저장' 버튼을 눌러 설정을 저장하세요.</p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setActiveModal('none')}
                    className="flex-1 py-3 rounded-lg border border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600 text-[13px] font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                  >
                    닫기
                  </button>
                  <button 
                    onClick={() => setActiveModal('none')}
                    className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-[13px] font-bold transition-colors"
                  >
                    변경사항 저장
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Details Modal */}
          {activeModal === 'details' && selectedApp && (
            <div className="bg-white dark:bg-[#1A222C] w-full max-w-[500px] rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-8 pb-6 relative">
                <button 
                  onClick={() => setActiveModal('none')}
                  className="absolute right-6 top-6 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">연동 상세 정보</h3>
                <p className="text-[13px] text-slate-500 dark:text-slate-400">연결된 앱의 인증 정보 및 설정을 확인하세요.</p>
              </div>

              <div className="px-8 py-4">
                <div className="divide-y divide-slate-100 dark:divide-slate-800 border-t border-b border-slate-100 dark:border-slate-800">
                  <div className="py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="w-[180px] shrink-0 text-[13px] text-slate-500 dark:text-slate-400">앱 이름</span>
                    <span className="text-[14px] font-medium text-slate-800 dark:text-slate-200">{selectedApp.name}</span>
                  </div>
                  <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                    <span className="w-[180px] shrink-0 text-[13px] text-slate-500 dark:text-slate-400">클라이언트 ID</span>
                    <span className="text-[14px] font-medium text-slate-800 dark:text-slate-200 break-all leading-relaxed">
                      872364219810-abc123xyz456.apps.usercontent.com
                    </span>
                  </div>
                  <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                    <span className="w-[180px] shrink-0 text-[13px] text-slate-500 dark:text-slate-400">클라이언트 비밀키</span>
                    <span className="text-[14px] font-medium text-slate-800 dark:text-slate-200 break-all leading-relaxed">
                      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e
                    </span>
                  </div>
                  <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                    <span className="w-[180px] shrink-0 text-[13px] text-slate-500 dark:text-slate-400">인증 기본 URI</span>
                    <span className="text-[14px] font-medium text-slate-800 dark:text-slate-200 break-all leading-relaxed">
                      https://accounts.app.com/o/oauth2/auth
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-4"></div>
            </div>
          )}

          {/* New Integration Modal */}
          {activeModal === 'new' && (
            <div className="bg-white dark:bg-[#1A222C] w-full max-w-[500px] rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-8 pb-6 relative">
                <button 
                  onClick={() => setActiveModal('none')}
                  className="absolute right-6 top-6 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">새로운 연동 항목</h3>
                <p className="text-[13px] text-slate-500 dark:text-slate-400">새로운 앱을 연동하고 팀을 위한 간단한 설명을 추가하세요.</p>
              </div>

              <div className="px-8 py-2 space-y-5">
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 block">앱 선택</label>
                  <div className="relative">
                    <select 
                      value={newAppName}
                      onChange={(e) => setNewAppName(e.target.value)}
                      className="w-full appearance-none rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-[13px] text-slate-600 dark:text-slate-300 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    >
                      <option value="">옵션 선택</option>
                      {integrations.map(app => (
                        <option key={app.id} value={app.name}>{app.name}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 block">클라이언트 ID</label>
                  <input 
                    type="text" 
                    value={newClientId}
                    onChange={(e) => setNewClientId(e.target.value)}
                    placeholder="여기에 클라이언트 ID 입력"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-[13px] text-slate-600 dark:text-slate-300 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 block">클라이언트 비밀키</label>
                  <input 
                    type="text" 
                    value={newClientSecret}
                    onChange={(e) => setNewClientSecret(e.target.value)}
                    placeholder="여기에 클라이언트 비밀키 입력"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-[13px] text-slate-600 dark:text-slate-300 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 block">인증 기본 URI</label>
                  <input 
                    type="text" 
                    value={newAuthUri}
                    onChange={(e) => setNewAuthUri(e.target.value)}
                    placeholder="여기에 URL 붙여넣기"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-[13px] text-slate-600 dark:text-slate-300 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="p-8 pt-6 space-y-6">
                <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  전체 URI를 붙여넣으시면 참고할 수 있도록 하위 도메인만 자동으로 추출하여 표시합니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setActiveModal('none')}
                    className="flex-1 py-3 rounded-lg border border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600 text-[13px] font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                  >
                    닫기
                  </button>
                  <button 
                    onClick={handleAddIntegration}
                    disabled={!newAppName}
                    className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-[13px] font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    저장하기
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Remove Confirmation Modal */}
          {activeModal === 'remove' && (
            <div className="bg-white dark:bg-[#1A222C] w-full max-w-[480px] rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-8 pb-4 relative flex flex-col items-center text-center">
                <button 
                  onClick={() => setActiveModal('none')}
                  className="absolute right-6 top-6 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                
                {/* Decorative Icon */}
                <div className="w-24 h-24 mt-6 mb-8 relative flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-red-50 dark:text-red-900/20 fill-current">
                    <path d="M50 0 C60 0 65 10 75 15 C85 20 95 30 95 40 C95 50 90 60 85 70 C80 80 65 90 50 90 C35 90 20 80 15 70 C10 60 5 50 5 40 C5 30 15 20 25 15 C35 10 40 0 50 0 Z" />
                  </svg>
                  <X className="w-8 h-8 text-red-500 relative z-10 stroke-[2.5]" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">확인 필요!</h3>
                <p className="text-[15px] font-medium text-slate-500 dark:text-slate-400">
                  이 앱의 연동을 삭제하시겠습니까?
                </p>
              </div>

              <div className="p-8 pt-6 flex justify-center gap-4">
                <button 
                  onClick={() => setActiveModal('none')}
                  className="px-6 py-2.5 rounded-lg border border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600 text-[14px] font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                >
                  아니오, 취소할게요
                </button>
                <button 
                  onClick={handleRemove}
                  className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg text-[14px] font-bold transition-colors"
                >
                  네, 삭제합니다
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Integrations;
