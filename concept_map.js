/* concept_map.js — QUESTION->CONCEPT tagging (separate from banks). */
var SIE_CONCEPT_MAP = {
  "version": 1,
  "concepts": {
    "primary_vs_secondary_market": {
      "label": "Primary Vs Secondary Market",
      "section": "1 - Capital Markets",
      "confuses_with": []
    },
    "go_vs_revenue_municipal_bonds": {
      "label": "Go Vs Revenue Municipal Bonds",
      "section": "1 - Capital Markets",
      "confuses_with": []
    },
    "broker_vs_dealer": {
      "label": "Broker Vs Dealer",
      "section": "1 - Capital Markets",
      "confuses_with": [
        "agency_vs_principal_capacity"
      ]
    },
    "agency_vs_principal_capacity": {
      "label": "Agency Vs Principal Capacity",
      "section": "1 - Capital Markets",
      "confuses_with": [
        "broker_vs_dealer"
      ]
    },
    "firm_commitment_vs_best_efforts_underwriting": {
      "label": "Firm Commitment Vs Best Efforts Underwriting",
      "section": "1 - Capital Markets",
      "confuses_with": [
        "syndicate_vs_selling_group"
      ]
    },
    "syndicate_vs_selling_group": {
      "label": "Syndicate Vs Selling Group",
      "section": "1 - Capital Markets",
      "confuses_with": [
        "firm_commitment_vs_best_efforts_underwriting"
      ]
    },
    "accredited_vs_institutional_vs_qib": {
      "label": "Accredited Vs Institutional Vs Qib",
      "section": "2 - Products & Risks",
      "confuses_with": [
        "rule_144_vs_rule_144a"
      ]
    },
    "registered_vs_exempt_securities": {
      "label": "Registered Vs Exempt Securities",
      "section": "1 - Capital Markets",
      "confuses_with": []
    },
    "senior_vs_subordinated_junior_tranche": {
      "label": "Senior Vs Subordinated Junior Tranche",
      "section": "2 - Products & Risks",
      "confuses_with": []
    },
    "call_vs_put_options": {
      "label": "Call Vs Put Options",
      "section": "2 - Products & Risks",
      "confuses_with": []
    },
    "common_vs_preferred_stock": {
      "label": "Common Vs Preferred Stock",
      "section": "2 - Products & Risks",
      "confuses_with": [
        "cumulative_vs_non_cumulative_preferred"
      ]
    },
    "cumulative_vs_non_cumulative_preferred": {
      "label": "Cumulative Vs Non Cumulative Preferred",
      "section": "2 - Products & Risks",
      "confuses_with": [
        "common_vs_preferred_stock"
      ]
    },
    "accretion_vs_amortization_of_discount_premium": {
      "label": "Accretion Vs Amortization Of Discount Premium",
      "section": "2 - Products & Risks",
      "confuses_with": []
    },
    "growth_vs_income_objectives": {
      "label": "Growth Vs Income Objectives",
      "section": "2 - Products & Risks",
      "confuses_with": []
    },
    "etf_vs_open_end_mutual_fund": {
      "label": "Etf Vs Open End Mutual Fund",
      "section": "2 - Products & Risks",
      "confuses_with": []
    },
    "forward_vs_futures_contract": {
      "label": "Forward Vs Futures Contract",
      "section": "2 - Products & Risks",
      "confuses_with": []
    },
    "american_vs_european_options": {
      "label": "American Vs European Options",
      "section": "2 - Products & Risks",
      "confuses_with": []
    },
    "systematic_vs_unsystematic_risk": {
      "label": "Systematic Vs Unsystematic Risk",
      "section": "2 - Products & Risks",
      "confuses_with": []
    },
    "investment_grade_vs_high_yield_junk_bonds": {
      "label": "Investment Grade Vs High Yield Junk Bonds",
      "section": "2 - Products & Risks",
      "confuses_with": []
    },
    "secured_vs_unsecured_debenture_debt": {
      "label": "Secured Vs Unsecured Debenture Debt",
      "section": "2 - Products & Risks",
      "confuses_with": []
    },
    "long_vs_short_position": {
      "label": "Long Vs Short Position",
      "section": "2 - Products & Risks",
      "confuses_with": []
    },
    "marked_to_market_vs_haircut": {
      "label": "Marked To Market Vs Haircut",
      "section": "3 - Trading, Accounts & Prohibited",
      "confuses_with": []
    },
    "settlement_t_1_vs_t_2": {
      "label": "Settlement T 1 Vs T 2",
      "section": "3 - Trading, Accounts & Prohibited",
      "confuses_with": []
    },
    "insider_vs_restricted_stock": {
      "label": "Insider Vs Restricted Stock",
      "section": "3 - Trading, Accounts & Prohibited",
      "confuses_with": [
        "rule_144_vs_rule_144a"
      ]
    },
    "cash_vs_margin_account": {
      "label": "Cash Vs Margin Account",
      "section": "3 - Trading, Accounts & Prohibited",
      "confuses_with": [
        "reg_t_vs_maintenance_margin"
      ]
    },
    "solicited_vs_unsolicited_order": {
      "label": "Solicited Vs Unsolicited Order",
      "section": "3 - Trading, Accounts & Prohibited",
      "confuses_with": []
    },
    "discretionary_vs_non_discretionary_account": {
      "label": "Discretionary Vs Non Discretionary Account",
      "section": "3 - Trading, Accounts & Prohibited",
      "confuses_with": []
    },
    "front_running_vs_trading_ahead": {
      "label": "Front Running Vs Trading Ahead",
      "section": "3 - Trading, Accounts & Prohibited",
      "confuses_with": []
    },
    "market_vs_limit_order": {
      "label": "Market Vs Limit Order",
      "section": "3 - Trading, Accounts & Prohibited",
      "confuses_with": []
    },
    "statutory_vs_cumulative_voting": {
      "label": "Statutory Vs Cumulative Voting",
      "section": "2 - Products & Risks",
      "confuses_with": [
        "common_vs_preferred_stock"
      ]
    },
    "finra_vs_sec": {
      "label": "Finra Vs Sec",
      "section": "4 - Regulatory Framework",
      "confuses_with": [
        "msrb_vs_finra",
        "sipc_vs_fdic"
      ]
    },
    "reg_t_vs_maintenance_margin": {
      "label": "Reg T Vs Maintenance Margin",
      "section": "3 - Trading, Accounts & Prohibited",
      "confuses_with": [
        "cash_vs_margin_account"
      ]
    },
    "msrb_vs_finra": {
      "label": "Msrb Vs Finra",
      "section": "4 - Regulatory Framework",
      "confuses_with": [
        "finra_vs_sec"
      ]
    },
    "sipc_vs_fdic": {
      "label": "Sipc Vs Fdic",
      "section": "4 - Regulatory Framework",
      "confuses_with": [
        "finra_vs_sec"
      ]
    },
    "rule_144_vs_rule_144a": {
      "label": "Rule 144 Vs Rule 144A",
      "section": "4 - Regulatory Framework",
      "confuses_with": [
        "accredited_vs_institutional_vs_qib",
        "insider_vs_restricted_stock"
      ]
    },
    "rights_vs_warrants": {
      "label": "Rights vs. Warrants",
      "section": "2 - Products & Risks",
      "confuses_with": [
        "accred_vs_qib"
      ]
    },
    "accred_vs_qib": {
      "label": "Accredited Investor vs. QIB",
      "section": "2 - Products & Risks",
      "confuses_with": [
        "rights_vs_warrants"
      ]
    },
    "etn_vs_etf": {
      "label": "ETN vs. ETF",
      "section": "2 - Products & Risks",
      "confuses_with": []
    },
    "loi_mutualfund": {
      "label": "Mutual Fund Letter of Intent",
      "section": "2 - Products & Risks",
      "confuses_with": []
    },
    "reg_bluesky": {
      "label": "Blue-Sky Laws",
      "section": "4 - Regulatory Framework",
      "confuses_with": []
    },
    "voting_rights": {
      "label": "Statutory vs. Cumulative Voting",
      "section": "2 - Products & Risks",
      "confuses_with": []
    },
    "u4_disqual": {
      "label": "Statutory Disqualification (Form U4)",
      "section": "4 - Regulatory Framework",
      "confuses_with": []
    },
    "index_option_settlement": {
      "label": "Index Option Settlement",
      "section": "2 - Products & Risks",
      "confuses_with": []
    }
  },
  "qmap": {
    "web-WEBMORE-2": {
      "concept": "rights_vs_warrants",
      "role": "target"
    },
    "web-WEBMORE-22": {
      "concept": "rights_vs_warrants",
      "role": "target"
    },
    "web-WEBMORE-19": {
      "concept": "accred_vs_qib",
      "role": "target"
    },
    "web-WEBMORE-29": {
      "concept": "etn_vs_etf",
      "role": "target"
    },
    "web-WEBMORE-12": {
      "concept": "loi_mutualfund",
      "role": "target"
    },
    "web-WEBMORE-6": {
      "concept": "reg_bluesky",
      "role": "target"
    },
    "web-WEBMORE-18": {
      "concept": "voting_rights",
      "role": "target"
    },
    "web-WEBMORE-23": {
      "concept": "u4_disqual",
      "role": "target"
    },
    "web-WEBMORE-14": {
      "concept": "index_option_settlement",
      "role": "target"
    }
  },
  "rules": [
    {
      "if_stem_contains": [
        "primary market",
        "secondary market",
        "initial public offering",
        "ipo "
      ],
      "then_concept": "primary_vs_secondary_market"
    },
    {
      "if_stem_contains": [
        "general obligation",
        "go bond",
        "revenue bond",
        "revenue municipal"
      ],
      "then_concept": "go_vs_revenue_municipal_bonds"
    },
    {
      "if_stem_contains": [
        "broker",
        "dealer",
        "acts as an agent",
        "agent for the customer",
        "principal capacity",
        "makes a market"
      ],
      "then_concept": "broker_vs_dealer"
    },
    {
      "if_stem_contains": [
        "agency capacity",
        "principal capacity",
        "as agent",
        "as principal",
        "markup",
        "markdown"
      ],
      "then_concept": "agency_vs_principal_capacity"
    },
    {
      "if_stem_contains": [
        "firm commitment",
        "best efforts",
        "underwrit"
      ],
      "then_concept": "firm_commitment_vs_best_efforts_underwriting"
    },
    {
      "if_stem_contains": [
        "syndicate",
        "selling group",
        "managing underwriter"
      ],
      "then_concept": "syndicate_vs_selling_group"
    },
    {
      "if_stem_contains": [
        "accredited investor",
        "qib",
        "qualified institutional buyer",
        "rule 144a",
        "institutional investor",
        "private placement"
      ],
      "then_concept": "accredited_vs_institutional_vs_qib"
    },
    {
      "if_stem_contains": [
        "exempt security",
        "exempt from registration",
        "registered security",
        "registration statement"
      ],
      "then_concept": "registered_vs_exempt_securities"
    },
    {
      "if_stem_contains": [
        "senior tranche",
        "subordinated",
        "junior tranche",
        "tranche",
        "cmo",
        "abs ",
        "structured product"
      ],
      "then_concept": "senior_vs_subordinated_junior_tranche"
    },
    {
      "if_stem_contains": [
        "call option",
        "put option",
        "calls and puts",
        "right to buy",
        "right to sell"
      ],
      "then_concept": "call_vs_put_options"
    },
    {
      "if_stem_contains": [
        "common stock",
        "preferred stock",
        "voting rights",
        "common shareholder"
      ],
      "then_concept": "common_vs_preferred_stock"
    },
    {
      "if_stem_contains": [
        "cumulative preferred",
        "non-cumulative",
        "skipped dividend",
        "dividend in arrears",
        "preferred dividend"
      ],
      "then_concept": "cumulative_vs_non_cumulative_preferred"
    },
    {
      "if_stem_contains": [
        "accretion",
        "amortiz",
        "discount bond",
        "premium bond",
        "cost basis"
      ],
      "then_concept": "accretion_vs_amortization_of_discount_premium"
    },
    {
      "if_stem_contains": [
        "growth objective",
        "income objective",
        "capital appreciation",
        "current income"
      ],
      "then_concept": "growth_vs_income_objectives"
    },
    {
      "if_stem_contains": [
        "exchange-traded fund",
        "etf",
        "mutual fund",
        "nav ",
        "open-end"
      ],
      "then_concept": "etf_vs_open_end_mutual_fund"
    },
    {
      "if_stem_contains": [
        "forward contract",
        "futures contract",
        "forward ",
        "futures "
      ],
      "then_concept": "forward_vs_futures_contract"
    },
    {
      "if_stem_contains": [
        "american style",
        "european style",
        "american option",
        "european option",
        "exercise"
      ],
      "then_concept": "american_vs_european_options"
    },
    {
      "if_stem_contains": [
        "systematic risk",
        "unsystematic",
        "market risk",
        "diversif",
        "company-specific"
      ],
      "then_concept": "systematic_vs_unsystematic_risk"
    },
    {
      "if_stem_contains": [
        "investment grade",
        "high-yield",
        "junk bond",
        "below investment",
        "bbb",
        "baa"
      ],
      "then_concept": "investment_grade_vs_high_yield_junk_bonds"
    },
    {
      "if_stem_contains": [
        "secured debt",
        "unsecured",
        "debenture",
        "collateral",
        "secured bond"
      ],
      "then_concept": "secured_vs_unsecured_debenture_debt"
    },
    {
      "if_stem_contains": [
        "long position",
        "short position",
        "short sale",
        "borrowed and sold",
        "profit when price"
      ],
      "then_concept": "long_vs_short_position"
    },
    {
      "if_stem_contains": [
        "marked-to-market",
        "mark to market",
        "haircut",
        "collateral value"
      ],
      "then_concept": "marked_to_market_vs_haircut"
    },
    {
      "if_stem_contains": [
        "settlement",
        "t+1",
        "t+2",
        "t+3",
        "trade date",
        "settles in"
      ],
      "then_concept": "settlement_t_1_vs_t_2"
    },
    {
      "if_stem_contains": [
        "insider",
        "restricted stock",
        "rule 144",
        "section 16",
        "short-swing",
        "control securities",
        "affiliate"
      ],
      "then_concept": "insider_vs_restricted_stock"
    },
    {
      "if_stem_contains": [
        "cash account",
        "margin account",
        "regulation t",
        "reg t",
        "initial margin",
        "maintenance margin",
        "borrow"
      ],
      "then_concept": "cash_vs_margin_account"
    },
    {
      "if_stem_contains": [
        "solicited",
        "unsolicited",
        "recommended",
        "recommendation"
      ],
      "then_concept": "solicited_vs_unsolicited_order"
    },
    {
      "if_stem_contains": [
        "discretionary",
        "non-discretionary",
        "power of attorney",
        "written authority"
      ],
      "then_concept": "discretionary_vs_non_discretionary_account"
    },
    {
      "if_stem_contains": [
        "front-run",
        "front running",
        "trading ahead",
        "research report"
      ],
      "then_concept": "front_running_vs_trading_ahead"
    },
    {
      "if_stem_contains": [
        "market order",
        "limit order",
        "guarantees execution",
        "guarantees price"
      ],
      "then_concept": "market_vs_limit_order"
    },
    {
      "if_stem_contains": [
        "statutory voting",
        "cumulative voting",
        "board of directors",
        "one vote per share",
        "straight voting"
      ],
      "then_concept": "statutory_vs_cumulative_voting"
    },
    {
      "if_stem_contains": [
        "finra",
        "sec ",
        "securities and exchange commission",
        "sro",
        "self-regulatory"
      ],
      "then_concept": "finra_vs_sec"
    },
    {
      "if_stem_contains": [
        "regulation t",
        "reg t",
        "initial margin",
        "maintenance margin",
        "margin call"
      ],
      "then_concept": "reg_t_vs_maintenance_margin"
    },
    {
      "if_stem_contains": [
        "msrb",
        "municipal securities",
        "muni "
      ],
      "then_concept": "msrb_vs_finra"
    },
    {
      "if_stem_contains": [
        "sipc",
        "fdic",
        "customer protection",
        "fails",
        "insurance"
      ],
      "then_concept": "sipc_vs_fdic"
    },
    {
      "if_stem_contains": [
        "rule 144",
        "rule 144a",
        "control securities",
        "restricted securities",
        "holding period"
      ],
      "then_concept": "rule_144_vs_rule_144a"
    },
    {
      "if_stem_contains": [
        "rights",
        "warrants",
        "longest period to expiration",
        "fixed price",
        "privilege to obtain its shares"
      ],
      "then_concept": "rights_vs_warrants"
    },
    {
      "if_stem_contains": [
        "qib",
        "qualified institutional buyer",
        "accredited investor",
        "rule 144a",
        "restricted stock"
      ],
      "then_concept": "accred_vs_qib"
    },
    {
      "if_stem_contains": [
        "exchange-traded note",
        "etn",
        "credit rating",
        "downgraded"
      ],
      "then_concept": "etn_vs_etf"
    },
    {
      "if_stem_contains": [
        "letter of intent",
        "13 months",
        "breakpoint",
        "mutual fund purchase"
      ],
      "then_concept": "loi_mutualfund"
    },
    {
      "if_stem_contains": [
        "blue-sky",
        "blue sky",
        "state securities regulators"
      ],
      "then_concept": "reg_bluesky"
    },
    {
      "if_stem_contains": [
        "statutory voting",
        "shares owned",
        "board of directors",
        "votes"
      ],
      "then_concept": "voting_rights"
    },
    {
      "if_stem_contains": [
        "form u4",
        "statutory disqualification",
        "felony",
        "dui"
      ],
      "then_concept": "u4_disqual"
    },
    {
      "if_stem_contains": [
        "s&p 100",
        "index call options",
        "settled by the delivery",
        "cash"
      ],
      "then_concept": "index_option_settlement"
    }
  ]
};
