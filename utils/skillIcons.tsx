import { IconType } from 'react-icons';
import { FaLaptopCode, FaServer, FaTools, FaCode } from 'react-icons/fa';

// Category icons mapping
export const categoryIcons: Record<string, IconType> = {
  Frontend: FaLaptopCode,
  'Backend & Databases': FaServer,
  'Dev Tools': FaTools,
};

export const categoryGradients: Record<string, string> = {
  Frontend: 'from-slate-900 via-slate-800 to-slate-700',
  'Backend & Databases': 'from-emerald-600 via-emerald-500 to-emerald-400',
  'Dev Tools': 'from-indigo-600 via-slate-800 to-slate-700',
};

export const getCategoryIcon = (category: string): IconType => {
  return categoryIcons[category] || FaCode;
};

export const getCategoryGradient = (category: string): string => {
  return categoryGradients[category] || 'from-gray-500 to-slate-700';
};
