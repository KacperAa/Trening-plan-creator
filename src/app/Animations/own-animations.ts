import {
  AnimationTriggerMetadata,
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const animationSocialMedia: AnimationTriggerMetadata = trigger(
  'holdUnhold',
  [
    // ...
    state('unhold', style({})),
    state(
      'hold',
      style({
        backgroundColor: 'rgb(104,104,104,0.6)',
        boxShadow: '0px 0px 2px 0px rgba(157, 157, 171, 1)',
      })
    ),
    transition('unhold => hold', [
      animate(
        '0.1s',
        keyframes([
          style({ backgroundColor: 'rgb(128,128,128,0.5))', offset: 0 }),
          style({
            backgroundColor: 'rgb(105,105,105,,0.5)',
            offset: 0.5,
          }),
          style({
            backgroundColor: 'rgb(88,88,88,0.8)',
            offset: 1.0,
          }),
        ])
      ),
    ]),
    transition('hold => unhold', [animate('0.1s')]),
  ]
);

export const matCardAnimation: AnimationTriggerMetadata = trigger(
  'matCardAnimation',
  [
    state(
      'inactive',
      style({
        transform: 'scale(1)',
      })
    ),
    state(
      'active',
      style({
        backgroundColor: '#D0D0D0',
        transform: 'scale(0.98)',
      })
    ),
    transition('inactive => active', animate('100ms')),
    transition('active => inactive', animate('100ms')),
  ]
);

export const hamburgerMenuAnimation: AnimationTriggerMetadata = trigger(
  'hamburgerMenuAnimation',
  [
    state(
      'closed',
      style({
        transform: 'translateX(-100%)',
        opacity: '0.5',
      })
    ),
    state(
      'open',
      style({
        transform: 'translateX(0%)',
        opacity: '1',
      })
    ),
    transition(
      'closed => open',
      animate(
        '300ms',
        keyframes([
          style({ transform: 'translateX(-100%)', opacity: '0.5', offset: 0 }),
          style({
            transform: 'translateX(-8%)',
            opacity: '0.7',
            offset: 0.3,
          }),
          style({
            transform: 'translateX(0%)',
            opacity: '1',
            offset: 1.0,
          }),
        ])
      )
    ),
    transition('open => closed', animate('250ms')),
  ]
);

export const openField: AnimationTriggerMetadata = trigger('openField', [
  state(
    'closed',
    style({
      height: '10vh',
      opacity: 0.1,
      scale: 0.8,
    })
  ),
  state(
    'open',
    style({
      height: '20vh',
      scale: 1,
    })
  ),
  transition(
    'open <=> closed',
    animate(
      '100ms',
      keyframes([
        style({ height: '10vh', opacity: '0.1', offset: 0, scale: 0.8 }),
        style({
          height: '15vh',
          opacity: '0.1',
          scale: 0.9,
          offset: 0.3,
        }),
        style({
          height: '20vh',
          opacity: '1',
          scale: 1,
          offset: 1.0,
        }),
      ])
    )
  ),
]);

export const detailExpand: AnimationTriggerMetadata = trigger('detailExpand', [
  state(
    'collapsed',
    style({
      height: '0px',
      minHeight: '0',
      opacity: '0.5',
    })
  ),
  state('expanded', style({ height: '*', opacity: '1' })),
  transition(
    'expanded <=> collapsed',
    animate('5000ms cubic-bezier(0.4, 0.0, 0.2, 1)')
  ),
]);

export const markButton: AnimationTriggerMetadata = trigger('markButton', [
  state('marked', style({ borderBottom: '2px solid blue' })),
  state('unmarked', style({ borderBottom: '0 solid gray' })),
  transition('marked <=> unmarked', animate('150ms')),
]);
