export const Schemas = {
  "Job": {
    "$id":"Job","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object",
    "properties":{"id":{"type":"string"},"title":{"type":"string"},"company":{"type":"string"},"location":{"type":"string"},"url":{"type":"string","format":"uri"},"tags":{"type":"array","items":{"type":"string"}},"createdAt":{"type":"string","format":"date-time"}},
    "required":["title"],"additionalProperties": true
  },
  "Application":{
    "$id":"Application","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object",
    "properties":{"id":{"type":"string"},"jobId":{"type":"string"},"status":{"type":"string"},"notes":{"type":"string"},"createdAt":{"type":"string","format":"date-time"}},
    "required":["jobId","status"],"additionalProperties": true
  },
  "Contact":{
    "$id":"Contact","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object",
    "properties":{"id":{"type":"string"},"name":{"type":"string"},"email":{"type":"string","format":"email"},"role":{"type":"string"},"company":{"type":"string"}},
    "required":["name"],"additionalProperties": true
  },
  "Preferences":{
    "$id":"Preferences","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object",
    "properties":{"id":{"type":"string"},"userId":{"type":"string"},"theme":{"type":"string","enum":["light","dark","system"]},"notifications":{"type":"boolean"}},
    "required":["userId"],"additionalProperties": true
  },
  "BulletPoint":{
    "$id":"BulletPoint","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object",
    "properties":{"id":{"type":"string"},"text":{"type":"string"},"topic":{"type":"string"}},
    "required":["text"],"additionalProperties": true
  },
  "ResumeVersion":{
    "$id":"ResumeVersion","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object",
    "properties":{"id":{"type":"string"},"label":{"type":"string"},"content":{"type":"string"}},
    "required":["label"],"additionalProperties": true
  },
  "LearningResource":{
    "$id":"LearningResource","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object",
    "properties":{"id":{"type":"string"},"title":{"type":"string"},"url":{"type":"string","format":"uri"},"tags":{"type":"array","items":{"type":"string"}}},
    "required":["title"],"additionalProperties": true
  },
  "CareerGoal":{
    "$id":"CareerGoal","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object",
    "properties":{"id":{"type":"string"},"title":{"type":"string"},"deadline":{"type":"string"}},
    "required":["title"],"additionalProperties": true
  },
  "JobOffer":{
    "$id":"JobOffer","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object",
    "properties":{"id":{"type":"string"},"jobId":{"type":"string"},"salary":{"type":"number"},"benefits":{"type":"array","items":{"type":"string"}}},
    "required":["jobId"],"additionalProperties": true
  },
  "PortfolioProject":{
    "$id":"PortfolioProject","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object",
    "properties":{"id":{"type":"string"},"title":{"type":"string"},"description":{"type":"string"},"url":{"type":"string","format":"uri"}},
    "required":["title"],"additionalProperties": true
  },
  "Notification":{
    "$id":"Notification","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object",
    "properties":{"id":{"type":"string"},"type":{"type":"string"},"message":{"type":"string"},"read":{"type":"boolean"}},
    "required":["type","message"],"additionalProperties": true
  },
  "JobAlert":{
    "$id":"JobAlert","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object",
    "properties":{"id":{"type":"string"},"query":{"type":"string"},"cadence":{"type":"string","enum":["daily","weekly","monthly"]}},
    "required":["query","cadence"],"additionalProperties": true
  }
} as const;
export type EntityName = keyof typeof Schemas;
