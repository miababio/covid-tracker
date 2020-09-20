/**
 * 2 WAYS TO EXPORT INTERFACES
 */

// Way #1
// ======
// export * from './CardProps';
// export * from './ApiProps';

// Way #2
// ======
import CardProps from './CardProps';
import ApiProps from './ApiProps';

export type { CardProps, ApiProps };