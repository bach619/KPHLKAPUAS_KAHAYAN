import React from 'react';
import { motion } from 'framer-motion';
import Lanyard from './Lanyard';

export interface LanyardData {
  name: string;
  role: string;
  children?: LanyardData[];
}

interface LanyardNodeProps {
  data: LanyardData;
  variant?: 'default' | 'primary' | 'secondary';
}

interface LanyardLevelProps {
  data: LanyardData;
  level?: number;
  variant?: 'default' | 'primary' | 'secondary';
}

const variants = {
  default: {
    bg: 'bg-white',
    border: 'border-green-100 hover:border-green-300',
    text: 'text-gray-900',
    role: 'text-green-600',
    line: 'bg-green-200 group-hover:bg-green-400',
  },
  primary: {
    bg: 'bg-green-50',
    border: 'border-green-200 hover:border-green-400',
    text: 'text-green-900',
    role: 'text-green-700',
    line: 'bg-green-300 group-hover:bg-green-500',
  },
  secondary: {
    bg: 'bg-blue-50',
    border: 'border-blue-200 hover:border-blue-400',
    text: 'text-blue-900',
    role: 'text-blue-700',
    line: 'bg-blue-300 group-hover:bg-blue-500',
  },
};

export function LanyardNode({ data, variant = 'default' }: LanyardNodeProps) {
  const styles = variants[variant];

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`${styles.bg} rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl border-2 ${styles.border}`}
      >
        <div className={`font-semibold ${styles.text}`}>{data.name}</div>
        <div className={`text-sm ${styles.role}`}>{data.role}</div>
      </div>
      {data.children && (
        <>
          <div
            className={`absolute left-1/2 -bottom-8 w-0.5 h-8 transition-colors duration-300 ${styles.line}`}
          />
          <div
            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%+4rem)] h-0.5 transition-colors duration-300 ${styles.line}`}
          />
        </>
      )}
    </motion.div>
  );
}

export function LanyardLevel({
  data,
  level = 0,
  variant = 'default',
}: LanyardLevelProps) {
  return (
    <div
      className={`flex flex-col items-center gap-16 ${
        level === 0 ? 'mt-8' : ''
      }`}
    >
      <LanyardNode data={data} variant={variant} />
      {data.children && (
        <div className="flex gap-8">
          {data.children.map((child, index) => (
            <div key={index} className="flex-1">
              <LanyardLevel data={child} level={level + 1} variant={variant} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface LanyardProps {
  data: LanyardData;
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
}

export default function Lanyard({
  data,
  variant = 'default',
  className = '',
}: LanyardProps) {
  return (
    <div className={`min-w-[1200px] ${className}`}>
      <LanyardLevel data={data} variant={variant} />
    </div>
  );
}
