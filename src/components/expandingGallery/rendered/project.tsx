import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export function Project({
  className,
  ...props
}: React.ComponentProps<'article'>) {
  return (
    <article
      className={cn(
        'animate-fade-in col-span-full flex flex-auto flex-col items-center transition-all sm:px-[4.5rem] sm:py-6 md:flex-row md:gap-6 md:px-16 md:py-10 lg:gap-16',
        className,
      )}
      {...props}
    />
  );
}

export function ProjectVideoContainer({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'w-full basis-7/12 transition-all lg:basis-6/12',
        className,
      )}
      {...props}
    />
  );
}

export function ProjectVideoAspectRatio({
  className,
  ...props
}: React.ComponentProps<typeof AspectRatio>) {
  return (
    <AspectRatio ratio={16 / 9} className={cn('flex', className)} {...props} />
  );
}

export function ProjectMetaContainer({
  className,
  ...props
}: React.ComponentProps<'section'>) {
  return (
    <section
      className={cn(
        'flex w-auto flex-1 flex-col gap-6 pt-8 pb-6 font-extralight tracking-[0.020em] sm:gap-10 sm:px-0 sm:text-xl md:p-0',
        className,
      )}
      {...props}
    />
  );
}

export function ProjectTitleContainer({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={cn('', className)} {...props} />;
}

export function ProjectTitle({
  className,
  ...props
}: React.ComponentProps<'h2'>) {
  return (
    <h2
      className={cn(
        'font-primary text-3xl font-extralight tracking-[0.065em] uppercase sm:text-3xl',
        className,
      )}
      {...props}
    />
  );
}

export function ProjectSubTitle({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'low flex items-center gap-2 text-base lowercase',
        className,
      )}
      {...props}
    />
  );
}

export function ProjectSubTitleSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      orientation="vertical"
      className={cn('h-4 w-[0.5px] bg-neutral-200', className)}
      {...props}
    />
  );
}

export function ProjectType({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p aria-label="Project type" className={cn('', className)} {...props} />
  );
}

export function ProjectRole({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p
      aria-label="Role on this project"
      className={cn('', className)}
      {...props}
    />
  );
}

export function ProjectDescription({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p
      aria-label="Video description"
      className={cn('text-base text-white', className)}
      {...props}
    />
  );
}

export function ProjectCreditList({
  className,
  ...props
}: React.ComponentProps<'dl'>) {
  return <dl className={cn('text-base', className)} {...props} />;
}

export function ProjectCreditListItem({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={cn('', className)} {...props} />;
}

export function ProjectCreditTitle({
  className,
  ...props
}: React.ComponentProps<'dt'>) {
  return <dt className={cn('inline font-light', className)} {...props} />;
}

export function ProjectCreditName({
  className,
  ...props
}: React.ComponentProps<'dd'>) {
  return <dd className={cn('inline', className)} {...props} />;
}
