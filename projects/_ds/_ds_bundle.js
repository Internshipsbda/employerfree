/* @ds-bundle: {"format":3,"namespace":"InternshipInsightsCoDesignSystem_cd6ca8","components":[{"name":"Badge","sourcePath":"components/badges/Badge.jsx"},{"name":"Eyebrow","sourcePath":"components/badges/Eyebrow.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"OptionCard","sourcePath":"components/forms/OptionCard.jsx"},{"name":"ScaleSelector","sourcePath":"components/forms/ScaleSelector.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"ResultPanel","sourcePath":"components/surfaces/ResultPanel.jsx"},{"name":"ScoreBar","sourcePath":"components/surfaces/ScoreBar.jsx"}],"sourceHashes":{"components/badges/Badge.jsx":"046d7b914591","components/badges/Eyebrow.jsx":"c7277092a612","components/buttons/Button.jsx":"c54a6bdc08a9","components/forms/OptionCard.jsx":"8547db1bfc47","components/forms/ScaleSelector.jsx":"cd5e118f8a08","components/forms/TextField.jsx":"ad7228e3be56","components/surfaces/Card.jsx":"0881ed2e4e7d","components/surfaces/ResultPanel.jsx":"b9488e0c78a6","components/surfaces/ScoreBar.jsx":"3593c9018ad7","ui_kits/freebie-tools/EmployerDiagnostic.jsx":"606165da8303","ui_kits/freebie-tools/Header.jsx":"d826e75af95e","ui_kits/freebie-tools/StudentAssessment.jsx":"9addca98d588"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.InternshipInsightsCoDesignSystem_cd6ca8 = window.InternshipInsightsCoDesignSystem_cd6ca8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badges/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  blue: {
    background: 'rgba(84,153,187,.15)',
    color: 'var(--blue-800)'
  },
  orange: {
    background: 'rgba(251,168,86,.18)',
    color: 'var(--orange-700)'
  },
  slate: {
    background: 'var(--slate-50)',
    color: 'var(--text-secondary)'
  },
  ink: {
    background: 'var(--ink)',
    color: '#fff'
  },
  wicked: {
    background: 'var(--burnt-100)',
    color: 'var(--burnt-900)'
  },
  solidOrange: {
    background: 'var(--orange)',
    color: 'var(--ink)'
  },
  solidBlue: {
    background: 'var(--blue)',
    color: '#fff'
  }
};

/**
 * Pill badge / tag. Uppercase + wide tracking in the brand's label style.
 */
function Badge({
  children,
  tone = 'blue',
  uppercase = true,
  iconLeft = null,
  ...rest
}) {
  const t = TONES[tone] || TONES.blue;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      borderRadius: 'var(--radius-pill)',
      padding: '5px 13px',
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      fontWeight: 700,
      textTransform: uppercase ? 'uppercase' : 'none',
      letterSpacing: uppercase ? '0.16em' : '0.01em',
      lineHeight: 1.2,
      ...t
    }
  }, rest), iconLeft, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Badge.jsx", error: String((e && e.message) || e) }); }

// components/badges/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow / kicker label — the uppercase wide-tracked line that sits above
 * headings across the brand (e.g. "FUTURE READY TALENT FRAMEWORK").
 */
function Eyebrow({
  children,
  tone = 'blue',
  as = 'p',
  ...rest
}) {
  const color = tone === 'orange' ? 'var(--orange-700)' : tone === 'ink' ? 'var(--ink)' : 'var(--blue-700)';
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      color
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '8px 16px',
    fontSize: 14,
    borderRadius: 'var(--radius-md)'
  },
  md: {
    padding: '12px 22px',
    fontSize: 15,
    borderRadius: 'var(--radius-lg)'
  },
  lg: {
    padding: '16px 28px',
    fontSize: 16,
    borderRadius: 'var(--radius-lg)'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--action)',
    color: 'var(--action-text)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--action-hover)'
  },
  secondary: {
    background: 'var(--blue)',
    color: '#fff',
    border: '1px solid transparent',
    '--hover-bg': 'var(--blue-700)'
  },
  outline: {
    background: 'var(--white)',
    color: 'var(--ink)',
    border: '1px solid var(--border)',
    '--hover-bg': 'var(--slate-50)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--blue-700)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--blue-50)'
  }
};

/**
 * Internship Insights Co. button. Orange = primary action across the brand;
 * buttons use the display font, bold, with tight tracking.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    letterSpacing: '0.01em',
    lineHeight: 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    background: hover && !disabled ? v['--hover-bg'] : v.background,
    color: v.color,
    border: v.border,
    transition: 'background-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
    transform: hover && !disabled ? 'translateY(-1px)' : 'none',
    boxShadow: variant === 'outline' || variant === 'ghost' ? 'none' : 'var(--shadow-sm)',
    ...s
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: style
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/OptionCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selectable option card — the full-width radio row used in the employer
 * "Kind or Wicked" diagnostic. Orange border + tint when selected.
 */
function OptionCard({
  children,
  selected = false,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      cursor: 'pointer',
      borderRadius: 'var(--radius-lg)',
      border: `2px solid ${selected ? 'var(--orange)' : 'var(--border)'}`,
      background: selected ? 'var(--orange-50)' : hover ? 'rgba(255,245,234,.6)' : 'var(--white)',
      padding: '13px 16px',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: selected ? 'var(--orange-900)' : 'var(--text-secondary)',
      transition: 'var(--transition-colors)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 2,
      flexShrink: 0,
      width: 16,
      height: 16,
      borderRadius: '50%',
      border: `2px solid ${selected ? 'var(--orange)' : '#c4ccd2'}`,
      background: selected ? 'var(--orange)' : 'transparent',
      boxShadow: selected ? 'inset 0 0 0 3px #fff' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", null, children)));
}
Object.assign(__ds_scope, { OptionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/OptionCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/ScaleSelector.jsx
try { (() => {
const DEFAULT_SCALE = [{
  value: 1,
  label: 'Rarely'
}, {
  value: 2,
  label: ''
}, {
  value: 3,
  label: 'Emerging'
}, {
  value: 4,
  label: ''
}, {
  value: 5,
  label: 'Consistently'
}];

/**
 * 1–5 rating selector — the FRTF self-assessment scale. Each step is a small
 * tile; the selected tile fills orange.
 */
function ScaleSelector({
  scale = DEFAULT_SCALE,
  value,
  onChange,
  name
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-label": name,
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, scale.map(s => {
    const selected = value === s.value;
    return /*#__PURE__*/React.createElement(Tile, {
      key: s.value,
      step: s,
      selected: selected,
      onSelect: () => onChange && onChange(s.value)
    });
  }));
}
function Tile({
  step,
  selected,
  onSelect
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onSelect,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      cursor: 'pointer',
      minWidth: 64,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      padding: '8px 14px',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${selected ? 'var(--orange-600)' : hover ? 'var(--blue)' : 'var(--border)'}`,
      background: selected ? 'var(--orange)' : hover ? 'var(--blue-50)' : 'var(--white)',
      color: 'var(--ink)',
      transition: 'var(--transition-colors)',
      boxShadow: selected ? 'var(--shadow-sm)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15
    }
  }, step.value), step.label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: selected ? 'var(--orange-900)' : 'var(--text-muted)'
    }
  }, step.label));
}
Object.assign(__ds_scope, { ScaleSelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ScaleSelector.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Labeled text input. White field, hairline border, blue/orange focus ring.
 */
function TextField({
  label,
  id,
  type = 'text',
  placeholder = '',
  value,
  defaultValue,
  onChange,
  required = false,
  focusTone = 'orange',
  // 'orange' | 'blue'
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const ring = focusTone === 'blue' ? 'var(--focus-ring)' : 'var(--focus-ring-action)';
  const borderFocus = focusTone === 'blue' ? 'var(--blue)' : 'var(--orange)';
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink)',
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    required: required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '12px 16px',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--ink)',
      background: focused ? 'var(--white)' : 'var(--slate-50)',
      border: `1px solid ${focused ? borderFocus : 'var(--border)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focused ? `0 0 0 3px ${ring}` : 'none',
      transition: 'var(--transition-colors), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, rest)));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface card — white, hairline slate border, soft shadow, generous radius.
 * The default container for content blocks across the brand.
 */
function Card({
  children,
  padding = 24,
  accent = null,
  // null | 'orange' | 'blue' | 'ink' — left accent bar
  highlight = false,
  // tint background orange-50 (selected / weakest)
  radius = 'var(--radius-xl)',
  style = {},
  ...rest
}) {
  const accentColor = accent === 'orange' ? 'var(--orange)' : accent === 'blue' ? 'var(--blue)' : accent === 'ink' ? 'var(--ink)' : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: highlight ? 'var(--orange-50)' : 'var(--white)',
      border: `1px solid ${highlight ? 'var(--orange)' : 'var(--border)'}`,
      borderLeft: accentColor ? `4px solid ${accentColor}` : undefined,
      borderRadius: radius,
      boxShadow: 'var(--shadow-sm)',
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ResultPanel.jsx
try { (() => {
/**
 * Result panel — the signature blue gradient surface that shows a headline
 * score or a key takeaway at the end of an assessment / diagnostic.
 */
function ResultPanel({
  label,
  value,
  suffix,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gradient-blue)',
      color: '#fff',
      borderRadius: 'var(--radius-xl)',
      padding: 24,
      boxShadow: 'var(--shadow-md)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      color: 'rgba(255,255,255,.8)'
    }
  }, label), value != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 48,
      fontWeight: 900,
      lineHeight: 1,
      marginTop: 6
    }
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      color: 'rgba(255,255,255,.6)'
    }
  }, " ", suffix)), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: value != null ? 14 : 6
    }
  }, children));
}
Object.assign(__ds_scope, { ResultPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ResultPanel.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ScoreBar.jsx
try { (() => {
const TONE_COLOR = {
  blue: 'var(--blue)',
  orange: 'var(--orange)',
  wicked: 'var(--burnt)',
  ink: 'var(--ink)'
};

/**
 * Score / progress bar used in diagnostic reports. Rounded track on slate,
 * filled with a tone color, animates width.
 */
function ScoreBar({
  percent = 0,
  tone = 'blue',
  height = 8
}) {
  const pct = Math.max(0, Math.min(100, percent));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      background: 'var(--slate)',
      borderRadius: 'var(--radius-pill)',
      height,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      background: TONE_COLOR[tone] || TONE_COLOR.blue,
      transition: 'width var(--dur-slow) var(--ease-standard)'
    }
  }));
}
Object.assign(__ds_scope, { ScoreBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ScoreBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/freebie-tools/EmployerDiagnostic.jsx
try { (() => {
// Kind-or-Wicked Environment Diagnostic — recreation of employerfreebie.
const KW_DIMS = {
  clarity: {
    name: 'Project Clarity',
    weak: 'Interns are guessing what "good" looks like. Effort gets spent on the wrong things and confidence erodes by week two.'
  },
  onboarding: {
    name: 'Onboarding Rituals',
    weak: 'Without a structured first week and a dedicated mentor, interns burn weeks finding their footing.'
  },
  selection: {
    name: 'Selection Rigor',
    weak: 'Resume-based hiring optimises for the wrong signal — the skills gap shows up only after the cohort starts.'
  },
  feedback: {
    name: 'Feedback Structure',
    weak: 'No feedback structure means interns can\'t correct course. Even good interns plateau.'
  }
};
const KW_QUESTIONS = [{
  id: 'q1',
  dim: 'clarity',
  prompt: 'When an intern starts a project, what do they receive?',
  opts: [[1, 'A vague problem area — they figure out the scope themselves.'], [3, 'A topic and they shape the deliverables with their manager.'], [5, 'A written brief with scope, deliverables, and success criteria on Day 1.']]
}, {
  id: 'q2',
  dim: 'clarity',
  prompt: 'How are project milestones tracked?',
  opts: [[1, 'We don\'t formally track milestones.'], [3, 'Informal weekly check-ins, no shared artefact.'], [5, 'A documented milestone plan reviewed bi-weekly with the intern.']]
}, {
  id: 'q3',
  dim: 'onboarding',
  prompt: 'What does an intern\'s first week look like?',
  opts: [[1, 'They show up, get a laptop, and shadow whoever\'s free.'], [3, 'A half-day welcome session, then straight into tasks.'], [5, 'A structured 5-day plan: intros, training, shadowing, first wins, reflection.']]
}, {
  id: 'q4',
  dim: 'onboarding',
  prompt: 'Are interns paired with a dedicated mentor with scheduled 1:1s?',
  opts: [[1, 'No — they ask whoever happens to be around.'], [3, 'A mentor is informally assigned; check-ins are ad-hoc.'], [5, 'A trained mentor with weekly 1:1s for the full internship.']]
}, {
  id: 'q5',
  dim: 'selection',
  prompt: 'How do you primarily decide which interns to hire?',
  opts: [[1, 'Resume and GPA screening.'], [3, 'Resume plus a behavioural interview.'], [5, 'A structured work-sample task that mirrors real intern work.']]
}, {
  id: 'q6',
  dim: 'feedback',
  prompt: 'How often do interns receive structured, written feedback?',
  opts: [[1, 'Only at the end, if at all.'], [3, 'Mid-point and end-of-internship.'], [5, 'Every two weeks against a documented template.']]
}, {
  id: 'q7',
  dim: 'feedback',
  prompt: 'Is there a formal end-of-internship review the intern can take with them?',
  opts: [[1, 'No.'], [3, 'A verbal summary with the manager.'], [5, 'A written review covering wins, gaps, and recommendations.']]
}];
function toneFor(pct) {
  return pct >= 80 ? 'blue' : pct >= 55 ? 'orange' : 'wicked';
}
function EmployerDiagnostic({
  onExit
}) {
  const {
    Card,
    Badge,
    Eyebrow,
    Button,
    TextField,
    OptionCard,
    ScoreBar,
    ResultPanel
  } = window.InternshipInsightsCoDesignSystem_cd6ca8;
  const [name, setName] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [answers, setAnswers] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const all = KW_QUESTIONS.every(q => answers[q.id] !== undefined);
  const total = Object.values(answers).reduce((a, b) => a + b, 0);
  const max = KW_QUESTIONS.length * 5;
  const dimScores = Object.keys(KW_DIMS).map(id => {
    const qs = KW_QUESTIONS.filter(q => q.dim === id);
    const sum = qs.reduce((a, q) => a + (answers[q.id] || 0), 0);
    const m = qs.length * 5;
    return {
      id,
      name: KW_DIMS[id].name,
      weak: KW_DIMS[id].weak,
      sum,
      max: m,
      pct: m ? Math.round(sum / m * 100) : 0
    };
  });
  const weakest = dimScores.reduce((a, b) => a.pct <= b.pct ? a : b, dimScores[0]);
  const overallPct = Math.round(total / max * 100);
  const overall = overallPct >= 80 ? 'Kind environment' : overallPct >= 55 ? 'Mixed environment' : 'Wicked environment';
  if (submitted) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 680,
        padding: '40px 20px',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "blue"
    }, "Internship Environment Diagnostic"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 34,
        fontWeight: 900,
        letterSpacing: '-0.02em',
        margin: '8px 0 0',
        color: 'var(--ink)'
      }
    }, "Thanks, ", name.split(' ')[0] || 'there', ". Here's your report.")), /*#__PURE__*/React.createElement(Card, {
      highlight: overallPct < 55,
      accent: toneFor(overallPct) === 'wicked' ? 'ink' : toneFor(overallPct),
      style: {
        textAlign: 'center',
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: toneFor(overallPct) === 'wicked' ? 'orange' : 'blue'
    }, "Your result"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 46,
        fontWeight: 900,
        margin: '8px 0 2px',
        color: 'var(--ink)'
      }
    }, total, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22,
        fontWeight: 500,
        color: 'var(--text-muted)'
      }
    }, " / ", max)), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 22,
        fontWeight: 700,
        margin: '0 0 14px',
        color: 'var(--ink)'
      }
    }, overall), /*#__PURE__*/React.createElement(ScoreBar, {
      percent: overallPct,
      tone: toneFor(overallPct)
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 18,
        fontWeight: 700,
        margin: '0 0 12px',
        color: 'var(--ink)'
      }
    }, "Scaffolding dimensions"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        marginBottom: 22
      }
    }, dimScores.map(d => {
      const isWeak = d.id === weakest.id;
      return /*#__PURE__*/React.createElement(Card, {
        key: d.id,
        highlight: isWeak
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
          marginBottom: 8
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 14,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          color: 'var(--ink)'
        }
      }, d.name, isWeak && /*#__PURE__*/React.createElement(Badge, {
        tone: "solidOrange",
        uppercase: false
      }, "Weakest")), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 700,
          fontSize: 14,
          color: 'var(--ink)'
        }
      }, d.sum, "/", d.max)), /*#__PURE__*/React.createElement(ScoreBar, {
        percent: d.pct,
        tone: toneFor(d.pct)
      }));
    })), /*#__PURE__*/React.createElement(ResultPanel, {
      label: "Your weakest dimension",
      style: {
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 22,
        fontWeight: 700,
        margin: '0 0 8px'
      }
    }, weakest.name), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'rgba(255,255,255,.9)',
        lineHeight: 1.55,
        margin: 0
      }
    }, weakest.weak), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(255,255,255,.12)',
        borderRadius: 'var(--radius-lg)',
        padding: 16,
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        margin: 0,
        lineHeight: 1.55
      }
    }, "The ", /*#__PURE__*/React.createElement("strong", null, "Cognitive Scaffolding Audit"), " gives you a full diagnosis across all four dimensions and a ", /*#__PURE__*/React.createElement("strong", null, "90-day fix plan"), " tailored to your team.")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true
    }, "Book a 20-minute consult \u2192"))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onExit
    }, "\u2190 All tools"));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 680,
      padding: '40px 20px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "orange",
    style: {
      marginBottom: 12
    }
  }, "7-Question Diagnostic for Employers"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 42,
      fontWeight: 900,
      letterSpacing: '-0.02em',
      margin: '0 0 14px',
      color: 'var(--ink)'
    }
  }, "Is your internship environment ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blue)'
    }
  }, "Kind"), " or ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange)'
    }
  }, "Wicked"), "?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      marginBottom: 24,
      lineHeight: 1.55
    }
  }, "Skills develop fast in ", /*#__PURE__*/React.createElement("strong", null, "kind"), " environments \u2014 clear rules, regular feedback. They stall in ", /*#__PURE__*/React.createElement("strong", null, "wicked"), " ones. This 90-second quiz scores your internship across four scaffolding dimensions."), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Your Name",
    id: "kw-name",
    placeholder: "Jane Smith",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Company",
    id: "kw-co",
    placeholder: "Acme Inc.",
    value: company,
    onChange: e => setCompany(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, KW_QUESTIONS.map((q, i) => /*#__PURE__*/React.createElement(Card, {
    key: q.id
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: 'var(--orange)',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 14,
      display: 'grid',
      placeItems: 'center'
    }
  }, i + 1), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.3,
      margin: 0,
      color: 'var(--ink)'
    }
  }, q.prompt)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, q.opts.map(([score, label]) => /*#__PURE__*/React.createElement(OptionCard, {
    key: score,
    selected: answers[q.id] === score,
    onClick: () => setAnswers(a => ({
      ...a,
      [q.id]: score
    }))
  }, label)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    disabled: !all || !name.trim(),
    onClick: () => setSubmitted(true)
  }, "Get my Kind-or-Wicked score \u2192"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      textAlign: 'center',
      marginTop: 10
    }
  }, "Takes about 90 seconds \xB7 Instant report \xB7 No spam")));
}
Object.assign(window, {
  EmployerDiagnostic
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/freebie-tools/EmployerDiagnostic.jsx", error: String((e && e.message) || e) }); }

// ui_kits/freebie-tools/Header.jsx
try { (() => {
// Shared brand header used across the freebie apps.
function Header({
  eyebrow
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: '1px solid var(--border)',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1024,
      margin: '0 auto',
      padding: '18px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.png",
    alt: "",
    style: {
      height: 38,
      width: 38
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 17,
      letterSpacing: '-0.01em',
      color: 'var(--ink)'
    }
  }, "Internship Insights Co.")), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'none',
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      color: 'var(--blue-700)'
    },
    className: "hdr-eyebrow"
  }, eyebrow)));
}
function BrandFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border)',
      background: 'var(--white)',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1024,
      margin: '0 auto',
      padding: '20px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " Internship Insights Co. \u2014 Unlocking potential through experience."), /*#__PURE__*/React.createElement("span", null, "Bermuda's only internship transformation firm.")));
}
Object.assign(window, {
  Header,
  BrandFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/freebie-tools/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/freebie-tools/StudentAssessment.jsx
try { (() => {
// FRTF Competency Self-Assessment — recreation of studentfreebie.
// Compresses the 12 competencies (4 clusters) and produces a Gap Report.
const FRTF_CLUSTERS = [{
  title: 'Expand & Transfer Expertise',
  items: [['discipline', 'Discipline Proficiency', 'I apply academic knowledge to real workplace tasks.'], ['tech', 'Technological Agility', 'I learn new software and handle data securely.'], ['info', 'Information Literacy', 'I find, verify, and organize data for projects.']]
}, {
  title: 'Develop Self',
  items: [['mgmt', 'Self-Management', 'I manage time and emotions under pressure.'], ['assess', 'Self-Assessment', 'I reflect on performance and seek feedback.'], ['account', 'Professional Accountability', 'I own my tasks and meet deadlines.']]
}, {
  title: 'Build Relationships',
  items: [['comm', 'Professional Communication', 'My emails and reports are clear and effective.'], ['collab', 'Collaboration', 'I work in teams and contribute positively.'], ['inter', 'Intercultural Effectiveness', 'I adapt to diverse colleagues.']]
}, {
  title: 'Design & Deliver Solutions',
  items: [['critical', 'Critical Thinking', 'I analyze problems before assuming.'], ['impl', 'Implementation', 'I follow through and deliver rigorous reports.'], ['innov', 'Innovation Mindset', 'I find creative ways to improve processes.']]
}];
const ALL_FRTF = FRTF_CLUSTERS.flatMap(c => c.items);
function StudentAssessment({
  onExit
}) {
  const {
    Card,
    Badge,
    Eyebrow,
    Button,
    TextField,
    ScaleSelector,
    ScoreBar,
    ResultPanel
  } = window.InternshipInsightsCoDesignSystem_cd6ca8;
  const [name, setName] = React.useState('');
  const [ratings, setRatings] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const answered = Object.keys(ratings).length;
  const total = Object.values(ratings).reduce((s, n) => s + n, 0);
  const all = answered === ALL_FRTF.length;
  if (submitted) {
    const strengths = ALL_FRTF.filter(c => ratings[c[0]] >= 4);
    const emerging = ALL_FRTF.filter(c => ratings[c[0]] === 3);
    const gaps = ALL_FRTF.filter(c => ratings[c[0]] <= 2);
    const Section = ({
      title,
      sub,
      items,
      accent,
      empty
    }) => /*#__PURE__*/React.createElement(Card, {
      accent: accent,
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 20,
        fontWeight: 700,
        margin: '0 0 2px',
        color: 'var(--ink)'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: '0.16em',
        color: 'var(--text-muted)',
        marginBottom: 12
      }
    }, sub), items.length === 0 ? /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        fontStyle: 'italic',
        color: 'var(--text-muted)'
      }
    }, empty) : /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        padding: 0,
        margin: 0
      }
    }, items.map(c => /*#__PURE__*/React.createElement("li", {
      key: c[0],
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '7px 0',
        borderBottom: '1px solid var(--slate)',
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("span", null, c[1]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        color: 'var(--blue-700)'
      }
    }, ratings[c[0]])))));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 760,
        padding: '40px 20px',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "orange",
      style: {
        marginBottom: 14
      }
    }, "Gap Report"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 38,
        fontWeight: 900,
        letterSpacing: '-0.02em',
        margin: '0 0 6px',
        color: 'var(--ink)'
      }
    }, "Your FRTF Gap Report"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-secondary)',
        marginBottom: 22
      }
    }, "Thanks", name ? `, ${name}` : '', " \u2014 your responses have been recorded."), /*#__PURE__*/React.createElement(ResultPanel, {
      label: "Total Score",
      value: total,
      suffix: "/ 60",
      style: {
        marginBottom: 22
      }
    }), /*#__PURE__*/React.createElement(Section, {
      title: "Your Strengths",
      sub: "Scores of 4\u20135",
      items: strengths,
      accent: "orange",
      empty: "No strengths recorded yet \u2014 keep building evidence."
    }), /*#__PURE__*/React.createElement(Section, {
      title: "Emerging Skills",
      sub: "Scores of 3",
      items: emerging,
      accent: "blue",
      empty: "No emerging skills in this category."
    }), /*#__PURE__*/React.createElement(Section, {
      title: "Priority Gaps",
      sub: "Scores of 1\u20132",
      items: gaps,
      accent: "ink",
      empty: "No priority gaps \u2014 strong foundation."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => {
        setSubmitted(false);
        setRatings({});
      }
    }, "Take it again"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onExit
    }, "\u2190 All tools")));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 760,
      padding: '40px 20px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "blue",
    style: {
      marginBottom: 12
    }
  }, "Future Ready Talent Framework"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 42,
      fontWeight: 900,
      letterSpacing: '-0.02em',
      margin: '0 0 12px',
      color: 'var(--ink)'
    }
  }, "FRTF Competency Self-Assessment"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      marginBottom: 24,
      lineHeight: 1.55
    }
  }, "Rate your current ability for each of the 12 core competencies from 1 (Rarely) to 5 (Consistently). You'll get a tailored Gap Report."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 5,
      background: 'rgba(255,255,255,.95)',
      backdropFilter: 'blur(6px)',
      borderBottom: '1px solid var(--border)',
      padding: '12px 0',
      marginBottom: 22,
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, answered), " of ", ALL_FRTF.length, " answered"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Running total: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--blue-700)'
    }
  }, total, " / 60"))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Your Name",
    id: "name",
    placeholder: "Your name",
    value: name,
    onChange: e => setName(e.target.value),
    focusTone: "blue"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, FRTF_CLUSTERS.map((cluster, idx) => /*#__PURE__*/React.createElement(Card, {
    key: cluster.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--blue)',
      color: '#fff',
      borderRadius: 'var(--radius-pill)',
      padding: '5px 14px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.7
    }
  }, "0", idx + 1), " ", cluster.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, cluster.items.map(c => /*#__PURE__*/React.createElement("div", {
    key: c[0]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, c[1]), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      margin: '2px 0 10px'
    }
  }, c[2]), /*#__PURE__*/React.createElement(ScaleSelector, {
    name: c[1],
    value: ratings[c[0]],
    onChange: v => setRatings(r => ({
      ...r,
      [c[0]]: v
    }))
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    disabled: !all,
    onClick: () => setSubmitted(true)
  }, all ? `Submit assessment (Total: ${total} / 60)` : `Answer all 12 to submit (${answered} / 12)`)));
}
Object.assign(window, {
  StudentAssessment
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/freebie-tools/StudentAssessment.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.OptionCard = __ds_scope.OptionCard;

__ds_ns.ScaleSelector = __ds_scope.ScaleSelector;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ResultPanel = __ds_scope.ResultPanel;

__ds_ns.ScoreBar = __ds_scope.ScoreBar;

})();
