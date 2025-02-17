import { cn } from '@/shared/lib/utils';
import {
  Captions,
  CaptionsOff,
  ChevronLeft,
  ChevronRight,
  Play,
  X,
} from 'lucide-react';

export function CloseIcon({
  className,
  ...props
}: React.ComponentProps<typeof X>) {
  return (
    <X
      strokeWidth={0.5}
      className={cn('size-10 sm:size-12', className)}
      {...props}
    />
  );
}
export function NextIcon({
  className,
  ...props
}: React.ComponentProps<typeof ChevronRight>) {
  return (
    <ChevronRight
      strokeWidth={0.5}
      className={cn('size-12 sm:-mx-4 sm:size-18', className)}
      {...props}
    />
  );
}
export function PrevIcon({
  className,
  ...props
}: React.ComponentProps<typeof ChevronLeft>) {
  return (
    <ChevronLeft
      strokeWidth={0.5}
      className={cn('size-12 sm:-mx-4 sm:size-18', className)}
      {...props}
    />
  );
}
export function CaptionsVisibleIcon({
  className,
  ...props
}: React.ComponentProps<typeof Captions>) {
  return (
    <Captions
      strokeWidth={0.5}
      className={cn('size-10 sm:-mx-4 sm:size-12', className)}
      {...props}
    />
  );
}
export function CaptionsHiddenIcon({
  className,
  ...props
}: React.ComponentProps<typeof Captions>) {
  return (
    <CaptionsOff
      strokeWidth={0.5}
      className={cn('size-10 sm:-mx-4 sm:size-12', className)}
      {...props}
    />
  );
}

export function PlayIcon({
  className,
  ...props
}: React.ComponentProps<typeof Captions>) {
  return (
    <Play
      strokeWidth={0}
      fill="hsla(0, 0%, 100%, 0.5)"
      className={cn('size-12 sm:size-20', className)}
      {...props}
    />
  );
}
