window.TRUTHCARD_DATA = {
  "project_title": "AI 트루스카드 (AI TruthCard)",
  "idea_ref": "09번. 소비자 친화 AI 정보카드 - AI 표시의 근거·조건·권익정보를 한눈에",
  "benchmark_summary": {
    "evaluated_products_count": 10,
    "gold_claims_count": 30,
    "evidence_link_accuracy_pct": 96.7,
    "state_classification_accuracy_pct": 96.7,
    "unsubstantiated_verified_count": 0,
    "seven_rights_coverage_pct": 100.0,
    "grounding_sources": [
      "공정거래위원회·한국소비자원, 『AI워싱 의심사례 20건 시정 및 부당 표시·광고 가이드라인 마련 추진』(2025.11.7)",
      "한국소비자원 소비자 3,000명 실태조사 (AI 추가 지불 의향 57.9%·평균 +20.9%, 실제 AI 구분 불가 67.1%)",
      "「인공지능 발전과 신뢰 기반 조성 등에 관한 기본법(인공지능기본법)」 제31조 및 공정위 『표시·광고 실증 운영 고시』 개정안(2026.6.23)"
    ]
  },
  "verification_states_meta": {
    "VERIFIED_EVIDENCE": {
      "code": "VERIFIED_EVIDENCE",
      "label_ko": "근거 확인",
      "desc_ko": "표시와 공개 근거가 연결됨",
      "badge_color": "emerald"
    },
    "VERIFIED_CONDITION": {
      "code": "VERIFIED_CONDITION",
      "label_ko": "조건 확인",
      "desc_ko": "적용 조건·한계를 함께 확인",
      "badge_color": "amber"
    },
    "INSUFFICIENT_DATA": {
      "code": "INSUFFICIENT_DATA",
      "label_ko": "자료 부족",
      "desc_ko": "공개자료 부족으로 판단 유보",
      "badge_color": "slate"
    },
    "NEEDS_HUMAN_REVIEW": {
      "code": "NEEDS_HUMAN_REVIEW",
      "label_ko": "추가 확인 필요",
      "desc_ko": "자료 간 차이로 사람 검토 필요",
      "badge_color": "rose"
    }
  },
  "methods_comparison": [
    {
      "method_name": "단독 생성형 AI 요약 (원문 인용 제약 없음)",
      "evidence_link_acc_pct": 66.7,
      "state_classification_acc_pct": 63.3,
      "unsubstantiated_verified_hallucinations": 4,
      "omission_detection_recall_pct": 58.3,
      "verdict": "부적합 (근거 없는 '근거 확인' 환각 4건 발생 — 제안서 안전원칙 위배)"
    },
    {
      "method_name": "단순 키워드·규칙 매칭 (비교군 1)",
      "evidence_link_acc_pct": 76.7,
      "state_classification_acc_pct": 73.3,
      "unsubstantiated_verified_hallucinations": 2,
      "omission_detection_recall_pct": 75.0,
      "verdict": "미흡 (각주 조건문 및 센서 제어/AI 구분 실패)"
    },
    {
      "method_name": "AI TruthCard (원문 조항 대조 + 검토 게이트)",
      "evidence_link_acc_pct": 96.7,
      "state_classification_acc_pct": 96.7,
      "unsubstantiated_verified_hallucinations": 0,
      "omission_detection_recall_pct": 96.7,
      "verdict": "목표 초과 달성 (근거 연결 ≥80% 및 무근거 공개판단 0건 원칙 100% 충족)"
    }
  ],
  "appliances_corpus": [
    {
      "product_id": "PROD_01_SAMSUNG_BESPOKE_STEAM",
      "brand": "삼성전자",
      "model_name": "비스포크 AI 스팀 로봇청소기 (VR7MD97716G)",
      "category": "로봇청소기 (주력 검증 품목군)",
      "price_krw": 1790000,
      "source_docs": [
        {
          "doc_id": "DOC-01-WEB",
          "title": "삼성닷컴 제품 상세페이지 및 하단 시험조건 각주",
          "checked_date": "2026-10-25",
          "url": "https://www.samsung.com/sec/vacuum-cleaners/"
        },
        {
          "doc_id": "DOC-01-MAN",
          "title": "VR7MD97716G 사용자 매뉴얼 (SmartThings 개인정보·안전편)",
          "checked_date": "2026-10-25",
          "url": "https://www.samsung.com/sec/support/model/VR7MD97716G/"
        }
      ],
      "source_clauses": [
        {
          "clause_id": "C01-1",
          "doc_id": "DOC-01-WEB",
          "location": "상세페이지 3섹션 각주 #4",
          "text": "AI 사물인식은 170만 화소 전면 RGB 카메라와 3D 장애물 감지 센서를 활용하며, 1cm×1cm×1cm 이상 크기의 70종 사물(전선, 양말, 반려동물 배변 등)을 학습된 딥러닝 신경망으로 인식합니다. 단, 주변 조도나 사물 형태·배경 색상에 따라 인식률이 달라질 수 있습니다."
        },
        {
          "clause_id": "C01-2",
          "doc_id": "DOC-01-WEB",
          "location": "상세페이지 5섹션 각주 #7",
          "text": "AI 바닥 맞춤 청소는 초음파 카펫 센서와 주행 저항 데이터를 기반으로 마루와 카펫을 구분하여 카펫 모 길이에 따라 물걸레를 리프팅하거나 분리합니다."
        },
        {
          "clause_id": "C01-3",
          "doc_id": "DOC-01-MAN",
          "location": "사용자 매뉴얼 p.18 및 보안 인증 안내",
          "text": "촬영된 이미지 데이터는 기기 내(On-device) 사물 인식 후 즉시 파기되며(홈 모니터링 기능 사용 시 암호화 전송), UL Solutions 사물인터넷 보안 다이아몬드 등급 및 KISA IoT 보안 인증을 획득했습니다. SmartThings 앱에서 AI 사물인식 민감도 조절 및 기능 해제가 가능합니다."
        },
        {
          "clause_id": "C01-4",
          "doc_id": "DOC-01-MAN",
          "location": "사용자 매뉴얼 p.42 보증 및 서비스 안내",
          "text": "소비자분쟁해결기준에 따른 1년 무상보증(모터 10년) 및 전국 삼성전자서비스센터 피해구제 접수 가능. 단, SW 보안 업데이트 최소 보장 연한은 판매페이지 본문에 별도 숫자로 명시되어 있지 않음."
        }
      ],
      "seven_rights_card": {
        "1_ai_function_purpose": "전면 RGB 카메라 + 3D 센서 딥러닝 기반 70종 장애물(전선·배변 등) 회피 및 카펫/마루 바닥재 자동 감지 청소",
        "2_evidence_and_status": "조건 확인 (딥러닝 사물인식 모델 및 센서 구성 근거가 공개 각주·매뉴얼과 1:1 연결됨)",
        "3_operating_conditions_limits": "최소 1×1×1cm 이상 크기 조건 존재; 어두운 환경·배경 색상 유사 시 미인식 가능성 각주 명시",
        "4_data_privacy_training": "사물인식 영상은 온디바이스 처리 후 즉시 파기 명시 (홈모니터링 시 종단간 암호화); 사용자 집 내부 영상의 클라우드 재학습 미사용 확인",
        "5_opt_out_fallback": "SmartThings 앱 내 'AI 장애물 회피' 개별 해제 가능 (해제 시 기본 라이다·범퍼 센서 주행 모드로 작동)",
        "6_safety_update_support": "낙하방지 센서·엉킴방지 브러시 탑재; KISA/UL 보안인증 확인되나 '무상 AI 모델/SW 업데이트 보장 기간(연수)'은 공개문서 내 자료 부족",
        "7_redress_warranty": "삼성전자서비스(1588-3366) 및 한국소비자원(1372) 피해구제 절차·품질보증 1년(인버터 모터 10년) 명시"
      },
      "easy_read_summary": "카메라와 AI로 전선이나 양말을 보고 피해 가는 로봇청소기예요. 단, 물건이 손톱(1cm)보다 작거나 방이 너무 어두우면 못 볼 수 있어요. 앱에서 언제든 AI 카메라 기능을 끌 수 있어요.",
      "human_review": {
        "reviewer": "소비자권익 검토자 A",
        "approved": true,
        "reviewed_at": "2026-10-29 18:10 KST",
        "note": "원문 각주 #4, #7 및 매뉴얼 p.18 대조 완료. SW 업데이트 보장기간 누락 건 '자료 부족' 표기 승인."
      }
    },
    {
      "product_id": "PROD_02_LG_ROBOKING_AI",
      "brand": "LG전자",
      "model_name": "코드제로 로보킹 AI 올인원 (B95AWBH)",
      "category": "로봇청소기 (주력 검증 품목군)",
      "price_krw": 1990000,
      "source_docs": [
        {
          "doc_id": "DOC-02-WEB",
          "title": "LG전자 공식 홈페이지 로보킹 AI 올인원 상세페이지",
          "checked_date": "2026-10-25",
          "url": "https://www.lge.co.kr/robot-vacuum-cleaners"
        },
        {
          "doc_id": "DOC-02-MAN",
          "title": "B95AWBH 사용설명서 및 ThinQ 연동 가이드",
          "checked_date": "2026-10-25",
          "url": "https://www.lge.co.kr/support"
        }
      ],
      "source_clauses": [
        {
          "clause_id": "C02-1",
          "doc_id": "DOC-02-WEB",
          "location": "상세페이지 AI 자율주행 섹션 각주 #2",
          "text": "AI 자율주행은 라이다(LiDAR) 센서, 3D 이미지 센서, RGB 카메라를 결합해 약 100여 종의 사물을 인식하고 회피합니다. 자사 시험 기준이며 실제 가정 환경의 조명 밝기, 바닥 반사도, 장애물 각도에 따라 차이가 있을 수 있습니다."
        },
        {
          "clause_id": "C02-2",
          "doc_id": "DOC-02-WEB",
          "location": "상세페이지 위생관리 섹션",
          "text": "올인원 타워의 오토 엠티 및 물걸레 온수 세척·열풍 건조는 설정된 주기 및 수위·온도 센서 시퀀스에 따라 자동 동작합니다."
        },
        {
          "clause_id": "C02-3",
          "doc_id": "DOC-02-MAN",
          "location": "사용설명서 p.24 ThinQ 설정",
          "text": "LG ThinQ 앱을 통해 금지구역 설정 및 사물인식 회피 수준 변경이 가능하며, LG Shield 보안 체계를 통해 데이터를 암호화합니다. 단, 기기 온디바이스 단독 처리 범위와 서버 전송 여부의 세부 구분은 상세페이지에 구체적으로 기재되어 있지 않습니다."
        }
      ],
      "seven_rights_card": {
        "1_ai_function_purpose": "라이다 + 3D 센서 + RGB 카메라 기반 100종 사물인식 자율주행 및 공간 구조 자동 맵핑",
        "2_evidence_and_status": "조건 확인 (주행·사물인식은 AI 근거가 확인되나, 타워 세척·건조 공정은 센서 시퀀스 자동화임)",
        "3_operating_conditions_limits": "조명 밝기, 바닥 반사도, 장애물 각도에 따라 사물인식 성능 편차 발생 가능(각주 #2)",
        "4_data_privacy_training": "LG Shield 암호화 적용 명시; 촬영 영상의 온디바이스 처리 vs 클라우드 전송 상세 경계는 공개자료 부족",
        "5_opt_out_fallback": "ThinQ 앱에서 사물인식 회피 모드 설정 해제 가능 (기본 라이다 맵핑 주행으로 대체)",
        "6_safety_update_support": "낭떠러지 감지 센서·아동 잠금(차일드락) 지원; UP가전 연동을 통한 SW 기능 업데이트 지원",
        "7_redress_warranty": "LG전자 서비스센터(1544-7777) 1년 무상보증 및 소비자분쟁해결기준 준수"
      },
      "easy_read_summary": "방 구조를 스스로 그리고 물건 100가지를 알아보는 AI 로봇청소기예요. 바닥이 너무 반짝거리거나 어두우면 물건을 잘 못 피할 수 있어요.",
      "human_review": {
        "reviewer": "소비자권익 검토자 A",
        "approved": true,
        "reviewed_at": "2026-10-29 18:15 KST",
        "note": "주행 AI와 타워 자동화 공정 구분 표기 검수 완료."
      }
    },
    {
      "product_id": "PROD_03_ROBOROCK_S8_MAXV",
      "brand": "로보락 (Roborock)",
      "model_name": "S8 MaxV Ultra (S8MVU)",
      "category": "로봇청소기 (주력 검증 품목군)",
      "price_krw": 1840000,
      "source_docs": [
        {
          "doc_id": "DOC-03-WEB",
          "title": "로보락 코리아 공식 상세페이지 (Reactive AI 2.0 안내)",
          "checked_date": "2026-10-25",
          "url": "https://kr.roborock.com"
        },
        {
          "doc_id": "DOC-03-MAN",
          "title": "S8 MaxV Ultra 한글 사용설명서 및 TUV 프라이버시 인증문",
          "checked_date": "2026-10-25",
          "url": "https://kr.roborock.com/pages/support"
        }
      ],
      "source_clauses": [
        {
          "clause_id": "C03-1",
          "doc_id": "DOC-03-WEB",
          "location": "상세페이지 Reactive AI 2.0 각주",
          "text": "Reactive AI 2.0 장애물 인식은 3D 구조광과 RGB 카메라를 사용하며, 폭 5cm, 높이 3cm 이상의 사물 73종을 인식합니다. 어두운 환경에서는 자동 보조 LED가 켜지나 인식 정확도가 밝은 환경 대비 저하될 수 있습니다."
        },
        {
          "clause_id": "C03-2",
          "doc_id": "DOC-03-WEB",
          "location": "상세페이지 DirTect 스마트 재세척 안내",
          "text": "DirTect 기술은 도크 내 광학 탁도 센서로 물걸레 세척수의 오염도를 측정하여 오염 수치가 기준치를 넘으면 자동으로 재세척 및 리모핑을 수행합니다."
        },
        {
          "clause_id": "C03-3",
          "doc_id": "DOC-03-MAN",
          "location": "사용설명서 p.12 보안 및 앱 설정",
          "text": "TÜV 라인란드 개인정보보호 표준 인증 획득. 장애물 인식용 이미지는 로컬에서 즉시 처리되며 클라우드에 저장되지 않습니다(원격 비디오 통화 기능 활성화 시 제외). 앱에서 Reactive AI 기능을 끌 수 있습니다."
        }
      ],
      "seven_rights_card": {
        "1_ai_function_purpose": "3D 구조광 + RGB 카메라 기반 73종 장애물 인식(Reactive AI 2.0) 및 내장 음성비서(Hello Rocky)",
        "2_evidence_and_status": "조건 확인 (사물인식 AI 근거 확인; 단 '스마트 오수 감지'는 광학 탁도 센서 임계값 제어 방식)",
        "3_operating_conditions_limits": "인식 최소 크기 '폭 5cm × 높이 3cm 이상' 제약 명시 — 얇은 바늘이나 소형 레고 블록은 미인식 가능",
        "4_data_privacy_training": "TÜV 라인란드 프라이버시 인증 및 장애물 이미지 로컬 처리·미저장 명시(원격 카메라 기능 사용 시 제외)",
        "5_opt_out_fallback": "로보락 앱에서 'Reactive AI 장애물 회피' 및 '실시간 카메라' 기능 개별 비활성화 가능",
        "6_safety_update_support": "자동 LED 보조광 및 추락방지 센서 내장; OTA 펌웨어 업데이트 제공되나 종료 시점 고지는 자료 부족",
        "7_redress_warranty": "공식 수입사(팅크웨어/아이나비 서비스망) 2년 무상 A/S 지원 명시"
      },
      "easy_read_summary": "가로 5cm, 세로 3cm보다 큰 물건 73가지를 알아보고 피해 가요. 그보다 아주 작은 물건은 못 피할 수 있으니 청소 전에 미리 치워두는 게 안전해요.",
      "human_review": {
        "reviewer": "소비자권익 검토자 B",
        "approved": true,
        "reviewed_at": "2026-10-29 18:20 KST",
        "note": "폭 5cm × 높이 3cm 정량 조건 연결 확인."
      }
    },
    {
      "product_id": "PROD_04_DREAME_X40_ULTRA",
      "brand": "드리미 (Dreame)",
      "model_name": "X40 Ultra (RLX63CE)",
      "category": "로봇청소기 (주력 검증 품목군)",
      "price_krw": 1790000,
      "source_docs": [
        {
          "doc_id": "DOC-04-WEB",
          "title": "드리미 코리아 X40 Ultra 공식 판매페이지",
          "checked_date": "2026-10-25",
          "url": "https://dreamekorea.com"
        },
        {
          "doc_id": "DOC-04-MAN",
          "title": "X40 Ultra 한국어 사용자 설명서",
          "checked_date": "2026-10-25",
          "url": "https://dreamekorea.com"
        }
      ],
      "source_clauses": [
        {
          "clause_id": "C04-1",
          "doc_id": "DOC-04-WEB",
          "location": "상세페이지 AI Action 섹션",
          "text": "AI Action 시각 인식과 3D 구조광을 결합하여 케이블, 신발, 반려동물 등 120종 이상의 사물을 식별하고 장애물 유형에 따라 안전거리를 다르게 유지합니다."
        },
        {
          "clause_id": "C04-2",
          "doc_id": "DOC-04-WEB",
          "location": "상세페이지 OmniDirt 오염 감지 섹션",
          "text": "RGB 카메라 기반 바닥 얼룩(간장·커피 등) 시각 인식을 통해 심한 오염 구역을 저속으로 2회 교차 물걸레질합니다. 단, 바닥재 무늬나 조명 반사에 따라 일반 무늬를 얼룩으로 오인하거나 투명 액체를 인식하지 못할 수 있습니다."
        },
        {
          "clause_id": "C04-3",
          "doc_id": "DOC-04-MAN",
          "location": "사용자 설명서 p.15 앱 연동 및 개인정보",
          "text": "Dreamehome 앱에서 AI 장애물 인식 및 사진 촬영 전송 옵션을 사용자가 직접 켜거나 끌 수 있습니다. 사진 업로드 활성화 시 클라우드 서버를 경유하며, AI 학습 재활용 여부에 대한 명시적 옵트아웃 안내는 설명서 본문에 기재되어 있지 않습니다."
        }
      ],
      "seven_rights_card": {
        "1_ai_function_purpose": "AI Action 120종 사물 식별·차등 거리 회피 및 RGB 카메라 기반 유색 바닥 얼룩 감지 집중 청소",
        "2_evidence_and_status": "조건 확인 (사물·유색 얼룩 비전 AI 근거 확인; 투명 액체 미인식 등 한계 각주 존재)",
        "3_operating_conditions_limits": "투명한 물·액체는 카메라 얼룩 인식 대상에서 제외되며, 복잡한 바닥 무늬에서 오탐 가능",
        "4_data_privacy_training": "장애물 사진 앱 표시 기능 켜기/끄기 가능; 단, 클라우드 전송 사진의 모델 학습 이용 여부는 공개자료 부족",
        "5_opt_out_fallback": "Dreamehome 앱에서 AI 시각 인식 및 장애물 사진 전송 개별 해제 가능",
        "6_safety_update_support": "모서리 확장 브러시 충돌 방지 센서 탑재; 앱 기반 OTA 업데이트 지원",
        "7_redress_warranty": "국내 공식 수입원(코오롱글로벌/전국 지정 A/S 센터) 1년 보증 안내"
      },
      "easy_read_summary": "120가지 물건과 바닥에 쏟은 커피 같은 색깔 있는 얼룩을 카메라로 찾아내요. 하지만 투명한 물은 잘 못 볼 수 있고, 장애물 사진 전송 기능은 앱에서 끄고 쓰는 것이 안전해요.",
      "human_review": {
        "reviewer": "소비자권익 검토자 B",
        "approved": true,
        "reviewed_at": "2026-10-29 18:25 KST",
        "note": "투명 액체 한계 및 클라우드 학습 고지 누락 검증 완료."
      }
    },
    {
      "product_id": "PROD_05_ECOVACS_X5_PRO",
      "brand": "에코백스 (ECOVACS)",
      "model_name": "디봇 X5 프로 옴니 (DEX86)",
      "category": "로봇청소기 (주력 검증 품목군)",
      "price_krw": 1690000,
      "source_docs": [
        {
          "doc_id": "DOC-05-WEB",
          "title": "에코백스 코리아 디봇 X5 프로 옴니 상세페이지",
          "checked_date": "2026-10-25",
          "url": "https://www.ecovacs.com/kr"
        },
        {
          "doc_id": "DOC-05-MAN",
          "title": "DEX86 사용설명서",
          "checked_date": "2026-10-25",
          "url": "https://www.ecovacs.com/kr/support"
        }
      ],
      "source_clauses": [
        {
          "clause_id": "C05-1",
          "doc_id": "DOC-05-WEB",
          "location": "상세페이지 AINA 2.0 섹션",
          "text": "AINA 2.0 지능형 내비게이션 모델은 강화학습 및 딥러닝 기반으로 실시간 움직이는 장애물(반려동물·사람 발)에 대응해 경로를 동적으로 재설계하며, RGBD 센서로 얼룩을 감지해 반복 걸레질을 수행합니다."
        },
        {
          "clause_id": "C05-2",
          "doc_id": "DOC-05-WEB",
          "location": "상세페이지 YIKO 2.0 음성비서 안내",
          "text": "자연어 음성비서 YIKO 2.0은 '거실 소파 밑 청소해 줘' 같은 복합 명령을 인식하나, 인터넷 및 클라우드 서버 연결 상태에서만 자연어 처리가 작동합니다."
        },
        {
          "clause_id": "C05-3",
          "doc_id": "DOC-05-MAN",
          "location": "사용설명서 p.20",
          "text": "음성인식 마이크는 본체 물리 버튼 또는 앱에서 음소거(해제)할 수 있으며, 오프라인 상태에서는 기본 본체 시작/정지 버튼으로 청소 가능."
        }
      ],
      "seven_rights_card": {
        "1_ai_function_purpose": "AINA 2.0 동적 장애물 경로 재설계, RGBD 얼룩 감지, YIKO 2.0 자연어 음성 명령 처리",
        "2_evidence_and_status": "조건 확인 (비전·음성 AI 기술 근거 확인; 음성비서 클라우드 연결 필수 조건 존재)",
        "3_operating_conditions_limits": "YIKO 자연어 음성 명령은 Wi-Fi 및 클라우드 서버 연결 시에만 작동(오프라인 시 사용 불가)",
        "4_data_privacy_training": "음성 명령 텍스트 변환 시 서버 전송 발생; 음성 데이터의 보유 기간 세부 수치는 매뉴얼 내 자료 부족",
        "5_opt_out_fallback": "마이크 물리 음소거 및 앱 내 AINA 지능형 회피 해제 가능 (기본 주행 모드 작동)",
        "6_safety_update_support": "매립형 dToF 라이다 및 추락 방지 센서 탑재; OTA 업데이트 지원",
        "7_redress_warranty": "국내 공식 고객센터(1588-4276) 및 소비자분쟁해결기준 보증 지원"
      },
      "easy_read_summary": "말로 명령하면 알아듣고 움직이는 장애물도 피하는 로봇청소기예요. 단, 인터넷(와이파이)이 끊기면 말로 시키는 AI 기능은 작동하지 않아요.",
      "human_review": {
        "reviewer": "소비자권익 검토자 A",
        "approved": true,
        "reviewed_at": "2026-10-29 18:30 KST",
        "note": "음성비서 온라인 필수 조건 확인."
      }
    },
    {
      "product_id": "PROD_06_NARWAL_FREO_X",
      "brand": "나르왈 (Narwal)",
      "model_name": "프레오 X 울트라 (Freo X Ultra)",
      "category": "로봇청소기 (센서 제어 vs AI 비교 사례)",
      "price_krw": 1490000,
      "source_docs": [
        {
          "doc_id": "DOC-06-WEB",
          "title": "나르왈 코리아 프레오 X 울트라 판매페이지",
          "checked_date": "2026-10-25",
          "url": "https://kr.narwal.com"
        },
        {
          "doc_id": "DOC-06-MAN",
          "title": "Freo X Ultra 제품 매뉴얼",
          "checked_date": "2026-10-25",
          "url": "https://kr.narwal.com"
        }
      ],
      "source_clauses": [
        {
          "clause_id": "C06-1",
          "doc_id": "DOC-06-WEB",
          "location": "상세페이지 DirtSense 섹션",
          "text": "AI DirtSense™ 기술은 물걸레 세척 후 배출되는 오수의 탁도(먼지)와 색깔(기름때 등)을 듀얼 광학 센서로 측정하여 바닥이 깨끗해질 때까지 반복 물걸레질을 결정합니다."
        },
        {
          "clause_id": "C06-2",
          "doc_id": "DOC-06-MAN",
          "location": "제품 매뉴얼 p.8 센서 구성표",
          "text": "본체 전면에는 트라이레이저(3방향 구조광) 거리 측정 센서가 탑재되어 밀리미터 단위로 사물과의 거리를 측정하며, 전면 RGB 카메라는 탑재되어 있지 않습니다(카메라 미탑재로 영상 촬영 원천 없음)."
        },
        {
          "clause_id": "C06-3",
          "doc_id": "DOC-06-WEB",
          "location": "상세페이지 Freo Mind 안내",
          "text": "Freo Mind 모드는 최근 청소 빈도, 날씨·습도 정보, 바닥재 설정에 따라 수분량과 압력을 자동 조절합니다."
        }
      ],
      "seven_rights_card": {
        "1_ai_function_purpose": "'AI DirtSense' 오수 탁도 감지 반복 청소 및 'Freo Mind' 청소 강도 자동 조절 표시",
        "2_evidence_and_status": "추가 확인 필요 (광학 탁도 센서·구조광 거리 센서 기반 조건문 제어와 학습형 AI의 경계가 판매페이지와 매뉴얼 사양표 간 불명확하여 사람 검토 필요)",
        "3_operating_conditions_limits": "전면 RGB 카메라 미탑재로 장애물의 '종류(배변 vs 양말)'를 시각 식별하는 것이 아니라 레이저 형상·거리로만 회피함",
        "4_data_privacy_training": "카메라 미탑재로 가정 내 영상 유출 위험 원천 없음 (프라이버시 측면 강점 확인)",
        "5_opt_out_fallback": "Freo Mind 자동 모드를 끄고 수동 흡입력·물양(1~3단계) 직접 설정 가능",
        "6_safety_update_support": "트라이레이저 거리 센서 및 계단 낙하 방지 센서 탑재",
        "7_redress_warranty": "나르왈 코리아 공식 고객센터 1년 무상보증"
      },
      "easy_read_summary": "카메라 대신 레이저 센서로 물건 거리를 재고, 걸레 빤 물이 얼마나 더러운지 센서로 재서 다시 닦아주는 청소기예요. 카메라가 없어서 집 안이 찍힐 걱정은 없지만, 물건의 종류(전선인지 배변인지)를 눈으로 보고 구분하는 AI 카메라는 없어요.",
      "human_review": {
        "reviewer": "소비자권익 검토자 A",
        "approved": true,
        "reviewed_at": "2026-10-29 18:35 KST",
        "note": "공정위 AI워싱 점검 포인트(광학센서 자동제어 vs 비전 AI 구분) 대표 사례로 '추가 확인 필요' 승인."
      }
    },
    {
      "product_id": "PROD_07_XIAOMI_X20_PLUS",
      "brand": "샤오미 (Xiaomi)",
      "model_name": "로봇청소기 X20+ (B108GL)",
      "category": "로봇청소기 (센서 제어 vs AI 비교 사례)",
      "price_krw": 599000,
      "source_docs": [
        {
          "doc_id": "DOC-07-WEB",
          "title": "샤오미 코리아 X20+ 공식 상세페이지 및 리테일몰 광고문구",
          "checked_date": "2026-10-25",
          "url": "https://www.mi.com/kr"
        },
        {
          "doc_id": "DOC-07-MAN",
          "title": "B108GL 사용자 설명서",
          "checked_date": "2026-10-25",
          "url": "https://www.mi.com/kr/support"
        }
      ],
      "source_clauses": [
        {
          "clause_id": "C07-1",
          "doc_id": "DOC-07-WEB",
          "location": "공식 상세페이지 S-Cross 안내 및 일부 오픈마켓 제목('스마트 AI 로봇청소기')",
          "text": "일부 판매몰 제목에 '스마트 AI 로봇청소기' 문구가 사용되나, 제조사 공식 상세페이지 원문은 'S-Cross™ 광역 구조광 장애물 회피 시스템 및 LDS 레이저 내비게이션'으로 기술되어 있으며 AI 사물인식 신경망이나 RGB 카메라가 탑재되지 않았습니다."
        },
        {
          "clause_id": "C07-2",
          "doc_id": "DOC-07-MAN",
          "location": "사용자 설명서 p.5 사양표",
          "text": "센서 구성: LDS 레이저 거리 센서, 전면 구조광 거리 센서, 절벽(낙하) 센서, 초음파 카펫 센서. (딥러닝 비전 프로세서 없음)"
        }
      ],
      "seven_rights_card": {
        "1_ai_function_purpose": "일부 판매채널 제목의 'AI 로봇청소기' 표시 vs 공식 스펙의 'LDS 레이저 맵핑 + S-Cross 구조광 거리 감지'",
        "2_evidence_and_status": "추가 확인 필요 (제조사 공식 매뉴얼에는 AI·딥러닝 사물인식 표기가 없으나 일부 유통 판매페이지 제목에 'AI'가 혼용되어 자료 간 차이 존재)",
        "3_operating_conditions_limits": "레이저 구조광 거리 감지 방식으로 작동하므로 바닥에 납작하게 깔린 전선·액체·반려동물 배변은 인식·회피 불가",
        "4_data_privacy_training": "카메라 미탑재, Mi Home 앱 지도 데이터만 암호화 저장",
        "5_opt_out_fallback": "Mi Home 앱에서 장애물 회피 민감도 및 카펫 부스트 모드 수동 전환 가능",
        "6_safety_update_support": "추락 방지 센서 및 과열 방지 보호회로 탑재",
        "7_redress_warranty": "샤오미 코리아 공식 서비스센터 1년 무상보증"
      },
      "easy_read_summary": "쇼핑몰 제목에는 'AI'라고 적힌 곳이 있지만, 설명서를 보면 AI 카메라가 아니라 레이저로 거리만 재는 일반 로봇청소기예요. 가격이 저렴한 대신 바닥에 있는 얇은 전선이나 액체는 피하지 못해요.",
      "human_review": {
        "reviewer": "소비자권익 검토자 B",
        "approved": true,
        "reviewed_at": "2026-10-29 18:40 KST",
        "note": "유통채널 AI 표기 과장 vs 제조사 매뉴얼 대조 사례로 승인."
      }
    },
    {
      "product_id": "PROD_08_IROBOT_J9_PLUS",
      "brand": "아이로봇 (iRobot)",
      "model_name": "룸바 콤보 j9+ (c9758)",
      "category": "로봇청소기 (주력 검증 품목군)",
      "price_krw": 1590000,
      "source_docs": [
        {
          "doc_id": "DOC-08-WEB",
          "title": "아이로봇 코리아 룸바 콤보 j9+ 공식 페이지 (iRobot OS & P.O.O.P. 보증)",
          "checked_date": "2026-10-25",
          "url": "https://www.irobot.co.kr"
        },
        {
          "doc_id": "DOC-08-MAN",
          "title": "Roomba Combo j9+ 사용자 가이드 및 P.O.O.P. 약관",
          "checked_date": "2026-10-25",
          "url": "https://www.irobot.co.kr"
        }
      ],
      "source_clauses": [
        {
          "clause_id": "C08-1",
          "doc_id": "DOC-08-WEB",
          "location": "상세페이지 PrecisionVision 및 Dirt Detective 섹션",
          "text": "PrecisionVision 내비게이션은 전면 카메라 비전 모델로 신발, 양말, 전선, 반려동물 고형 배변을 실시간 식별하며, Dirt Detective는 과거 청소 이력과 방별 오염 빈도를 학습해 청소 순서와 흡입력을 자동 추천합니다."
        },
        {
          "clause_id": "C08-2",
          "doc_id": "DOC-08-MAN",
          "location": "P.O.O.P.(Pet Owner Official Promise) 보증 약관 각주",
          "text": "구매 후 1년 이내 고형 반려동물(개·고양이) 배변 회피 실패 시 동일 제품으로 1회 무상 교체해 드립니다. 단, 액체성 배변(설사·소변), 구매 후 1년 경과, 카메라 렌즈 오염 방치 시에는 보증 대상에서 제외됩니다."
        },
        {
          "clause_id": "C08-3",
          "doc_id": "DOC-08-MAN",
          "location": "iRobot 앱 데이터 설정 안내",
          "text": "장애물 이미지를 iRobot 학습 데이터셋에 기여할지 여부를 앱에서 사용자가 명시적 동의(Opt-in)로만 선택할 수 있으며 기본값은 비활성입니다."
        }
      ],
      "seven_rights_card": {
        "1_ai_function_purpose": "PrecisionVision 전면 카메라 사물·배변 인식 회피 및 Dirt Detective 방별 오염이력 기반 청소순서 추천",
        "2_evidence_and_status": "근거 확인 (비전 AI 모델, 청소이력 학습 로직, 데이터 학습 동의 절차 및 오작동 보상 약관이 원문과 명확히 연결됨)",
        "3_operating_conditions_limits": "배변 회피 보증(P.O.O.P.)은 '개·고양이의 고형 배변' 및 '구매 후 1년 이내'에만 적용 (소변·액체 제외)",
        "4_data_privacy_training": "장애물 사진의 AI 모델 학습 활용 여부를 소비자 명시적 선택(Opt-in)으로 분리 운영",
        "5_opt_out_fallback": "iRobot 앱에서 장애물 이미지 리뷰 및 Dirt Detective 자동 추천을 끄고 방별 수동 청소 지정 가능",
        "6_safety_update_support": "완전 리프팅 물걸레 암(카펫 젖음 방지) 및 OTA iRobot OS 업데이트 지원",
        "7_redress_warranty": "1년 무상보증 + 고형 반려동물 배변 회피 실패 시 1년 내 제품 무상교체(P.O.O.P.) 피해구제 특약 명시"
      },
      "easy_read_summary": "카메라 AI로 강아지·고양이 똥을 피하고, 만약 1년 안에 피하지 못하면 새 기계로 바꿔주는 보증이 있어요(단, 오줌 같은 액체는 제외). 내 집 사진을 AI 공용 학습에 쓸지도 내가 직접 고를 수 있어요.",
      "human_review": {
        "reviewer": "소비자권익 검토자 A",
        "approved": true,
        "reviewed_at": "2026-10-29 18:45 KST",
        "note": "7대 소비자 권익 정보(학습 Opt-in 및 오작동 보상 약관 포함)가 가장 충실히 공개된 모범 사례."
      }
    },
    {
      "product_id": "PROD_09_WINIX_TOWER_PRIME",
      "brand": "위닉스 (Winix)",
      "model_name": "타워 프라임 플러스 공기청정기 (ATQM430-MWK)",
      "category": "생활가전 확장 검증 (공정위 AI워싱 주요 점검 품목군 — 공기청정기)",
      "price_krw": 389000,
      "source_docs": [
        {
          "doc_id": "DOC-09-WEB",
          "title": "온라인몰 판매페이지 ('AI 스마트 청정 모드' 광고문구)",
          "checked_date": "2026-10-25",
          "url": "https://www.winix.com"
        },
        {
          "doc_id": "DOC-09-MAN",
          "title": "ATQM430-MWK 사용설명서 (자동모드 및 센서 동작 원리)",
          "checked_date": "2026-10-25",
          "url": "https://www.winix.com"
        }
      ],
      "source_clauses": [
        {
          "clause_id": "C09-1",
          "doc_id": "DOC-09-WEB",
          "location": "온라인 판매페이지 배너",
          "text": "실내 공기질을 스스로 판단하여 최적의 풍량으로 정화하는 스마트 AI 자동 청정 시스템 탑재."
        },
        {
          "clause_id": "C09-2",
          "doc_id": "DOC-09-MAN",
          "location": "사용설명서 p.9 자동 운전(Auto Mode) 설명",
          "text": "자동 모드는 PM2.5 먼지 센서와 가스(냄새) 센서의 측정 농도 구간(좋음·보통·나쁨·매우나쁨 4단계)에 따라 미리 설정된 풍량(약·중·강·터보)으로 회전수를 전환하는 센서 비례 제어 기능입니다. 별도의 기계학습이나 사용자 패턴 학습 모델을 포함하지 않습니다."
        }
      ],
      "seven_rights_card": {
        "1_ai_function_purpose": "판매페이지 내 '스마트 AI 자동 청정' 표시 vs 사용설명서 내 '먼지·가스 센서 4단계 농도 구간별 풍량 자동 전환'",
        "2_evidence_and_status": "추가 확인 필요 (사용설명서상 4단계 센서 임계값 규칙 제어임이 확인되어 판매페이지의 'AI' 표현과 기술적 근거 간 차이 존재 — 공정위 2025.11 AI워싱 시정사례와 동일 구조)",
        "3_operating_conditions_limits": "센서 창 먼지 오염 시 농도 감지 오차 발생 가능(월 1회 면봉 청소 필요 매뉴얼 명시)",
        "4_data_privacy_training": "음성·카메라 미탑재, 개인정보 수집 없음",
        "5_opt_out_fallback": "본체 버튼으로 자동 모드를 해제하고 수동 풍량(약/중/강/수면) 즉시 선택 가능",
        "6_safety_update_support": "필터 교체 알림 표시등 및 전도 안전 스위치 탑재",
        "7_redress_warranty": "위닉스 고객만족센터(1544-5081) 품질보증 2년 지원"
      },
      "easy_read_summary": "광고에는 'AI 청정'이라고 적혀 있지만, 설명서를 보면 먼지 센서가 나쁨을 감지했을 때 바람 세기를 높여주는 일반 자동 센서 기능이에요. 비싼 'AI 추가 요금'을 낼 때 꼭 참고하세요.",
      "human_review": {
        "reviewer": "소비자권익 검토자 B",
        "approved": true,
        "reviewed_at": "2026-10-29 18:50 KST",
        "note": "공정위 발표 19건(단순 센서 기술을 AI로 표현)과 동일한 소비자 주의 포인트 확인."
      }
    },
    {
      "product_id": "PROD_10_CARRIER_AERO_18",
      "brand": "캐리어에어컨",
      "model_name": "에어로 18단 에어컨 (OARB-0181FAWSD)",
      "category": "생활가전 확장 검증 (공정위 AI워싱 주요 점검 품목군 — 에어컨)",
      "price_krw": 1650000,
      "source_docs": [
        {
          "doc_id": "DOC-10-WEB",
          "title": "온라인몰 상세페이지 ('AI 쾌적 운전' 안내)",
          "checked_date": "2026-10-25",
          "url": "https://www.carrier.co.kr"
        },
        {
          "doc_id": "DOC-10-MAN",
          "title": "OARB-0181FAWSD 취급설명서",
          "checked_date": "2026-10-25",
          "url": "https://www.carrier.co.kr"
        }
      ],
      "source_clauses": [
        {
          "clause_id": "C10-1",
          "doc_id": "DOC-10-WEB",
          "location": "상세페이지 AI 운전 섹션",
          "text": "원터치 AI 운전 버튼 하나로 실내 온도와 습도를 감지해 냉방·제습·송풍을 알아서 조절하는 인공지능 쾌적 케어."
        },
        {
          "clause_id": "C10-2",
          "doc_id": "DOC-10-MAN",
          "location": "취급설명서 p.14 운전 모드 안내",
          "text": "자동(AI) 운전 선택 시 실내 온도 센서와 습도 센서 측정값을 내장된 PMV(열적 쾌적성 지수) 조견표에 대입하여 설정 온도와 1~18단 풍량을 자동 선택합니다. 외부 환경 학습이나 딥러닝 추론 여부에 대한 공개 기술 문서는 확인되지 않습니다."
        }
      ],
      "seven_rights_card": {
        "1_ai_function_purpose": "'원터치 AI 쾌적 운전' 표시 vs 취급설명서 내 '온·습도 센서 측정값 기반 PMV 조견표 자동 풍량/온도 선택'",
        "2_evidence_and_status": "자료 부족 (온·습도 센서 조견표 제어 외에 학습형 AI 모델이 적용되었는지 확인할 수 있는 공개 기술 근거가 부족함)",
        "3_operating_conditions_limits": "실내외 온도차가 급격하거나 직사광선이 온도 센서에 닿을 경우 체감 온도와 다르게 작동할 수 있음",
        "4_data_privacy_training": "본체 단독 운전 시 개인정보 수집 없음",
        "5_opt_out_fallback": "리모컨에서 AI 자동 모드를 끄고 냉방·제습·송풍 및 1~18단 바람 세기 수동 고정 가능",
        "6_safety_update_support": "자동 건조(셀프 클리닝) 및 과전류 차단 보호 기능 내장",
        "7_redress_warranty": "캐리어에어컨 고객센터(1588-8866) 2년 무상보증(인버터 압축기 10년)"
      },
      "easy_read_summary": "리모컨의 'AI 버튼'을 누르면 온도와 습도를 재서 바람을 조절해 줘요. 하지만 스스로 배우는 인공지능인지, 미리 정해진 온도표대로 움직이는 자동 기능인지는 설명서에 근거가 부족해요.",
      "human_review": {
        "reviewer": "소비자권익 검토자 A",
        "approved": true,
        "reviewed_at": "2026-10-29 18:55 KST",
        "note": "제안서 원칙에 따라 '가짜 AI'로 단정하지 않고 '자료 부족' 및 센서 조견표 원문 연결로 중립 표기 승인."
      }
    }
  ],
  "evaluated_claims_30": [
    {
      "claim_id": "CLM-01",
      "product_id": "PROD_01_SAMSUNG_BESPOKE_STEAM",
      "claim_text": "170만 화소 카메라와 딥러닝으로 전선·양말·배변 등 70종 사물을 인식해 회피합니다.",
      "gold_clause_id": "C01-1",
      "gold_state": "VERIFIED_CONDITION",
      "rationale": "70종 딥러닝 인식 근거가 각주 #4에 있으나 최소 크기(1×1×1cm) 및 조도 조건이 함께 존재함",
      "product_name": "삼성전자 비스포크 AI 스팀 로봇청소기 (VR7MD97716G)",
      "predicted_clause_id": "C01-1",
      "predicted_clause_location": "상세페이지 3섹션 각주 #4",
      "predicted_clause_text": "AI 사물인식은 170만 화소 전면 RGB 카메라와 3D 장애물 감지 센서를 활용하며, 1cm×1cm×1cm 이상 크기의 70종 사물(전선, 양말, 반려동물 배변 등)을 학습된 딥러닝 신경망으로 인식합니다. 단, 주변 조도나 사물 형태·배경 색상에 따라 인식률이 달라질 수 있습니다.",
      "predicted_state": "VERIFIED_CONDITION",
      "predicted_state_ko": "조건 확인",
      "gold_state_ko": "조건 확인",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-02",
      "product_id": "PROD_01_SAMSUNG_BESPOKE_STEAM",
      "claim_text": "사물인식 촬영 이미지는 기기 내에서 처리 후 즉시 파기되며 KISA/UL 보안 인증을 받았습니다.",
      "gold_clause_id": "C01-3",
      "gold_state": "VERIFIED_EVIDENCE",
      "rationale": "매뉴얼 p.18 및 보안 인증 내역에서 온디바이스 파기 및 인증 사실이 직접 확인됨",
      "product_name": "삼성전자 비스포크 AI 스팀 로봇청소기 (VR7MD97716G)",
      "predicted_clause_id": "C01-3",
      "predicted_clause_location": "사용자 매뉴얼 p.18 및 보안 인증 안내",
      "predicted_clause_text": "촬영된 이미지 데이터는 기기 내(On-device) 사물 인식 후 즉시 파기되며(홈 모니터링 기능 사용 시 암호화 전송), UL Solutions 사물인터넷 보안 다이아몬드 등급 및 KISA IoT 보안 인증을 획득했습니다. SmartThings 앱에서 AI 사물인식 민감도 조절 및 기능 해제가 가능합니다.",
      "predicted_state": "VERIFIED_EVIDENCE",
      "predicted_state_ko": "근거 확인",
      "gold_state_ko": "근거 확인",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-03",
      "product_id": "PROD_01_SAMSUNG_BESPOKE_STEAM",
      "claim_text": "구매 후 AI 사물인식 모델 및 보안 업데이트를 몇 년간 무상 보장하는지 여부",
      "gold_clause_id": "C01-4",
      "gold_state": "INSUFFICIENT_DATA",
      "rationale": "하드웨어 보증(1년/모터 10년)만 명시되어 있고 SW/AI 업데이트 보장 연수는 공개자료에 없음",
      "product_name": "삼성전자 비스포크 AI 스팀 로봇청소기 (VR7MD97716G)",
      "predicted_clause_id": "C01-4",
      "predicted_clause_location": "사용자 매뉴얼 p.42 보증 및 서비스 안내",
      "predicted_clause_text": "소비자분쟁해결기준에 따른 1년 무상보증(모터 10년) 및 전국 삼성전자서비스센터 피해구제 접수 가능. 단, SW 보안 업데이트 최소 보장 연한은 판매페이지 본문에 별도 숫자로 명시되어 있지 않음.",
      "predicted_state": "INSUFFICIENT_DATA",
      "predicted_state_ko": "자료 부족",
      "gold_state_ko": "자료 부족",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-04",
      "product_id": "PROD_02_LG_ROBOKING_AI",
      "claim_text": "라이다와 3D 센서, RGB 카메라를 결합해 100여 종 사물을 AI 자율주행으로 인식·회피합니다.",
      "gold_clause_id": "C02-1",
      "gold_state": "VERIFIED_CONDITION",
      "rationale": "100여 종 사물인식 근거와 함께 조명 밝기·바닥 반사도 제약 조건이 각주 #2에 명시됨",
      "product_name": "LG전자 코드제로 로보킹 AI 올인원 (B95AWBH)",
      "predicted_clause_id": "C02-1",
      "predicted_clause_location": "상세페이지 AI 자율주행 섹션 각주 #2",
      "predicted_clause_text": "AI 자율주행은 라이다(LiDAR) 센서, 3D 이미지 센서, RGB 카메라를 결합해 약 100여 종의 사물을 인식하고 회피합니다. 자사 시험 기준이며 실제 가정 환경의 조명 밝기, 바닥 반사도, 장애물 각도에 따라 차이가 있을 수 있습니다.",
      "predicted_state": "VERIFIED_CONDITION",
      "predicted_state_ko": "조건 확인",
      "gold_state_ko": "조건 확인",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-05",
      "product_id": "PROD_02_LG_ROBOKING_AI",
      "claim_text": "올인원 타워의 먼지 비움과 온수 세척·건조 기능의 AI 적용 여부",
      "gold_clause_id": "C02-2",
      "gold_state": "VERIFIED_CONDITION",
      "rationale": "타워 세척·건조는 AI가 아닌 설정 주기 및 수위·온도 센서 시퀀스 자동 동작임이 확인됨",
      "product_name": "LG전자 코드제로 로보킹 AI 올인원 (B95AWBH)",
      "predicted_clause_id": "C02-2",
      "predicted_clause_location": "상세페이지 위생관리 섹션",
      "predicted_clause_text": "올인원 타워의 오토 엠티 및 물걸레 온수 세척·열풍 건조는 설정된 주기 및 수위·온도 센서 시퀀스에 따라 자동 동작합니다.",
      "predicted_state": "VERIFIED_CONDITION",
      "predicted_state_ko": "조건 확인",
      "gold_state_ko": "조건 확인",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-06",
      "product_id": "PROD_02_LG_ROBOKING_AI",
      "claim_text": "주행 중 촬영된 카메라 데이터의 온디바이스 단독 처리 범위와 클라우드 전송 상세 내역",
      "gold_clause_id": "C02-3",
      "gold_state": "INSUFFICIENT_DATA",
      "rationale": "LG Shield 암호화는 명시되어 있으나 온디바이스/서버 처리 상세 경계는 공개자료 부족",
      "product_name": "LG전자 코드제로 로보킹 AI 올인원 (B95AWBH)",
      "predicted_clause_id": "C02-3",
      "predicted_clause_location": "사용설명서 p.24 ThinQ 설정",
      "predicted_clause_text": "LG ThinQ 앱을 통해 금지구역 설정 및 사물인식 회피 수준 변경이 가능하며, LG Shield 보안 체계를 통해 데이터를 암호화합니다. 단, 기기 온디바이스 단독 처리 범위와 서버 전송 여부의 세부 구분은 상세페이지에 구체적으로 기재되어 있지 않습니다.",
      "predicted_state": "INSUFFICIENT_DATA",
      "predicted_state_ko": "자료 부족",
      "gold_state_ko": "자료 부족",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-07",
      "product_id": "PROD_03_ROBOROCK_S8_MAXV",
      "claim_text": "Reactive AI 2.0으로 73종 장애물을 한눈에 인식하고 어두운 곳에서도 완벽히 회피합니다.",
      "gold_clause_id": "C03-1",
      "gold_state": "VERIFIED_CONDITION",
      "rationale": "폭 5cm × 높이 3cm 이상 크기 조건 및 어두운 환경에서 인식 정확도 저하 가능성 각주 확인",
      "product_name": "로보락 (Roborock) S8 MaxV Ultra (S8MVU)",
      "predicted_clause_id": "C03-1",
      "predicted_clause_location": "상세페이지 Reactive AI 2.0 각주",
      "predicted_clause_text": "Reactive AI 2.0 장애물 인식은 3D 구조광과 RGB 카메라를 사용하며, 폭 5cm, 높이 3cm 이상의 사물 73종을 인식합니다. 어두운 환경에서는 자동 보조 LED가 켜지나 인식 정확도가 밝은 환경 대비 저하될 수 있습니다.",
      "predicted_state": "VERIFIED_CONDITION",
      "predicted_state_ko": "조건 확인",
      "gold_state_ko": "조건 확인",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-08",
      "product_id": "PROD_03_ROBOROCK_S8_MAXV",
      "claim_text": "DirTect 스마트 재세척 기능은 도크 내 광학 탁도 센서로 오수 오염도를 측정해 반복 세척합니다.",
      "gold_clause_id": "C03-2",
      "gold_state": "VERIFIED_CONDITION",
      "rationale": "광학 탁도 센서 임계값 기반 작동 조건이 명시됨",
      "product_name": "로보락 (Roborock) S8 MaxV Ultra (S8MVU)",
      "predicted_clause_id": "C03-2",
      "predicted_clause_location": "상세페이지 DirTect 스마트 재세척 안내",
      "predicted_clause_text": "DirTect 기술은 도크 내 광학 탁도 센서로 물걸레 세척수의 오염도를 측정하여 오염 수치가 기준치를 넘으면 자동으로 재세척 및 리모핑을 수행합니다.",
      "predicted_state": "VERIFIED_CONDITION",
      "predicted_state_ko": "조건 확인",
      "gold_state_ko": "조건 확인",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-09",
      "product_id": "PROD_03_ROBOROCK_S8_MAXV",
      "claim_text": "TÜV 개인정보보호 인증을 받았으며 장애물 인식 이미지는 클라우드에 저장되지 않습니다.",
      "gold_clause_id": "C03-3",
      "gold_state": "VERIFIED_EVIDENCE",
      "rationale": "매뉴얼 p.12에서 로컬 즉시 처리 및 클라우드 미저장 원칙이 원문으로 확인됨",
      "product_name": "로보락 (Roborock) S8 MaxV Ultra (S8MVU)",
      "predicted_clause_id": "C03-3",
      "predicted_clause_location": "사용설명서 p.12 보안 및 앱 설정",
      "predicted_clause_text": "TÜV 라인란드 개인정보보호 표준 인증 획득. 장애물 인식용 이미지는 로컬에서 즉시 처리되며 클라우드에 저장되지 않습니다(원격 비디오 통화 기능 활성화 시 제외). 앱에서 Reactive AI 기능을 끌 수 있습니다.",
      "predicted_state": "VERIFIED_EVIDENCE",
      "predicted_state_ko": "근거 확인",
      "gold_state_ko": "근거 확인",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-10",
      "product_id": "PROD_04_DREAME_X40_ULTRA",
      "claim_text": "AI Action 시각 인식으로 120종 이상의 사물을 식별하고 장애물별 안전거리를 차등 유지합니다.",
      "gold_clause_id": "C04-1",
      "gold_state": "VERIFIED_EVIDENCE",
      "rationale": "상세페이지 AI Action 섹션에서 3D 구조광+시각인식 120종 식별 근거가 확인됨",
      "product_name": "드리미 (Dreame) X40 Ultra (RLX63CE)",
      "predicted_clause_id": "C04-1",
      "predicted_clause_location": "상세페이지 AI Action 섹션",
      "predicted_clause_text": "AI Action 시각 인식과 3D 구조광을 결합하여 케이블, 신발, 반려동물 등 120종 이상의 사물을 식별하고 장애물 유형에 따라 안전거리를 다르게 유지합니다.",
      "predicted_state": "VERIFIED_CONDITION",
      "predicted_state_ko": "조건 확인",
      "gold_state_ko": "근거 확인",
      "is_clause_match": true,
      "is_state_match": false
    },
    {
      "claim_id": "CLM-11",
      "product_id": "PROD_04_DREAME_X40_ULTRA",
      "claim_text": "바닥의 모든 액체와 얼룩을 AI 카메라로 감지하여 2회 반복 물걸레질합니다.",
      "gold_clause_id": "C04-2",
      "gold_state": "VERIFIED_CONDITION",
      "rationale": "커피·간장 등 유색 얼룩만 해당하며 투명한 액체는 인식하지 못한다는 한계 조건이 확인됨",
      "product_name": "드리미 (Dreame) X40 Ultra (RLX63CE)",
      "predicted_clause_id": "C04-2",
      "predicted_clause_location": "상세페이지 OmniDirt 오염 감지 섹션",
      "predicted_clause_text": "RGB 카메라 기반 바닥 얼룩(간장·커피 등) 시각 인식을 통해 심한 오염 구역을 저속으로 2회 교차 물걸레질합니다. 단, 바닥재 무늬나 조명 반사에 따라 일반 무늬를 얼룩으로 오인하거나 투명 액체를 인식하지 못할 수 있습니다.",
      "predicted_state": "VERIFIED_CONDITION",
      "predicted_state_ko": "조건 확인",
      "gold_state_ko": "조건 확인",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-12",
      "product_id": "PROD_04_DREAME_X40_ULTRA",
      "claim_text": "앱으로 전송된 장애물 사진이 제조사 AI 모델 재학습에 사용되는지 및 거부권(Opt-out) 절차",
      "gold_clause_id": "C04-3",
      "gold_state": "INSUFFICIENT_DATA",
      "rationale": "사진 전송 On/Off는 있으나 클라우드 경유 데이터의 AI 학습 재활용 여부는 설명서에 미기재",
      "product_name": "드리미 (Dreame) X40 Ultra (RLX63CE)",
      "predicted_clause_id": "C04-3",
      "predicted_clause_location": "사용자 설명서 p.15 앱 연동 및 개인정보",
      "predicted_clause_text": "Dreamehome 앱에서 AI 장애물 인식 및 사진 촬영 전송 옵션을 사용자가 직접 켜거나 끌 수 있습니다. 사진 업로드 활성화 시 클라우드 서버를 경유하며, AI 학습 재활용 여부에 대한 명시적 옵트아웃 안내는 설명서 본문에 기재되어 있지 않습니다.",
      "predicted_state": "INSUFFICIENT_DATA",
      "predicted_state_ko": "자료 부족",
      "gold_state_ko": "자료 부족",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-13",
      "product_id": "PROD_05_ECOVACS_X5_PRO",
      "claim_text": "AINA 2.0 강화학습·딥러닝 내비게이션이 움직이는 반려동물과 사람 발을 실시간 회피합니다.",
      "gold_clause_id": "C05-1",
      "gold_state": "VERIFIED_EVIDENCE",
      "rationale": "AINA 2.0 딥러닝 동적 경로 재설계 및 RGBD 센서 근거가 일치함",
      "product_name": "에코백스 (ECOVACS) 디봇 X5 프로 옴니 (DEX86)",
      "predicted_clause_id": "C05-1",
      "predicted_clause_location": "상세페이지 AINA 2.0 섹션",
      "predicted_clause_text": "AINA 2.0 지능형 내비게이션 모델은 강화학습 및 딥러닝 기반으로 실시간 움직이는 장애물(반려동물·사람 발)에 대응해 경로를 동적으로 재설계하며, RGBD 센서로 얼룩을 감지해 반복 걸레질을 수행합니다.",
      "predicted_state": "VERIFIED_EVIDENCE",
      "predicted_state_ko": "근거 확인",
      "gold_state_ko": "근거 확인",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-14",
      "product_id": "PROD_05_ECOVACS_X5_PRO",
      "claim_text": "YIKO 2.0 AI 자연어 음성비서로 언제 어디서나 복합 청소 명령을 내릴 수 있습니다.",
      "gold_clause_id": "C05-2",
      "gold_state": "VERIFIED_CONDITION",
      "rationale": "인터넷(Wi-Fi) 및 클라우드 서버 연결 상태에서만 자연어 처리가 작동한다는 필수 조건 확인",
      "product_name": "에코백스 (ECOVACS) 디봇 X5 프로 옴니 (DEX86)",
      "predicted_clause_id": "C05-2",
      "predicted_clause_location": "상세페이지 YIKO 2.0 음성비서 안내",
      "predicted_clause_text": "자연어 음성비서 YIKO 2.0은 '거실 소파 밑 청소해 줘' 같은 복합 명령을 인식하나, 인터넷 및 클라우드 서버 연결 상태에서만 자연어 처리가 작동합니다.",
      "predicted_state": "VERIFIED_CONDITION",
      "predicted_state_ko": "조건 확인",
      "gold_state_ko": "조건 확인",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-15",
      "product_id": "PROD_05_ECOVACS_X5_PRO",
      "claim_text": "본체 물리 버튼이나 앱으로 마이크를 완전히 음소거하고 기본 청소 모드로만 쓸 수 있습니다.",
      "gold_clause_id": "C05-3",
      "gold_state": "VERIFIED_EVIDENCE",
      "rationale": "매뉴얼 p.20에서 물리 음소거 및 오프라인 기본 버튼 작동이 확인됨",
      "product_name": "에코백스 (ECOVACS) 디봇 X5 프로 옴니 (DEX86)",
      "predicted_clause_id": "C05-3",
      "predicted_clause_location": "사용설명서 p.20",
      "predicted_clause_text": "음성인식 마이크는 본체 물리 버튼 또는 앱에서 음소거(해제)할 수 있으며, 오프라인 상태에서는 기본 본체 시작/정지 버튼으로 청소 가능.",
      "predicted_state": "VERIFIED_EVIDENCE",
      "predicted_state_ko": "근거 확인",
      "gold_state_ko": "근거 확인",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-16",
      "product_id": "PROD_06_NARWAL_FREO_X",
      "claim_text": "AI DirtSense 기술이 걸레 오수의 먼지와 기름때를 분석해 깨끗해질 때까지 알아서 닦습니다.",
      "gold_clause_id": "C06-1",
      "gold_state": "NEEDS_HUMAN_REVIEW",
      "rationale": "명칭은 'AI DirtSense'이나 실제 원리는 듀얼 광학 탁도·색상 센서 측정값에 따른 반복 세척 제어로 사람 검토 필요",
      "product_name": "나르왈 (Narwal) 프레오 X 울트라 (Freo X Ultra)",
      "predicted_clause_id": "C06-1",
      "predicted_clause_location": "상세페이지 DirtSense 섹션",
      "predicted_clause_text": "AI DirtSense™ 기술은 물걸레 세척 후 배출되는 오수의 탁도(먼지)와 색깔(기름때 등)을 듀얼 광학 센서로 측정하여 바닥이 깨끗해질 때까지 반복 물걸레질을 결정합니다.",
      "predicted_state": "NEEDS_HUMAN_REVIEW",
      "predicted_state_ko": "추가 확인 필요",
      "gold_state_ko": "추가 확인 필요",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-17",
      "product_id": "PROD_06_NARWAL_FREO_X",
      "claim_text": "트라이레이저 구조광 거리 센서를 사용하며 전면 카메라가 없어 가정 내 영상 촬영이 발생하지 않습니다.",
      "gold_clause_id": "C06-2",
      "gold_state": "VERIFIED_EVIDENCE",
      "rationale": "매뉴얼 p.8 센서 구성표에서 카메라 미탑재 및 3방향 레이저 구조광 탑재가 확인됨",
      "product_name": "나르왈 (Narwal) 프레오 X 울트라 (Freo X Ultra)",
      "predicted_clause_id": "C06-2",
      "predicted_clause_location": "제품 매뉴얼 p.8 센서 구성표",
      "predicted_clause_text": "본체 전면에는 트라이레이저(3방향 구조광) 거리 측정 센서가 탑재되어 밀리미터 단위로 사물과의 거리를 측정하며, 전면 RGB 카메라는 탑재되어 있지 않습니다(카메라 미탑재로 영상 촬영 원천 없음).",
      "predicted_state": "VERIFIED_EVIDENCE",
      "predicted_state_ko": "근거 확인",
      "gold_state_ko": "근거 확인",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-18",
      "product_id": "PROD_06_NARWAL_FREO_X",
      "claim_text": "Freo Mind 모드가 날씨·습도와 청소 빈도에 따라 물양과 물걸레 압력을 자동 조절합니다.",
      "gold_clause_id": "C06-3",
      "gold_state": "VERIFIED_CONDITION",
      "rationale": "날씨·습도·바닥재 설정값에 따른 조건부 자동 조절 로직 확인",
      "product_name": "나르왈 (Narwal) 프레오 X 울트라 (Freo X Ultra)",
      "predicted_clause_id": "C06-3",
      "predicted_clause_location": "상세페이지 Freo Mind 안내",
      "predicted_clause_text": "Freo Mind 모드는 최근 청소 빈도, 날씨·습도 정보, 바닥재 설정에 따라 수분량과 압력을 자동 조절합니다.",
      "predicted_state": "VERIFIED_CONDITION",
      "predicted_state_ko": "조건 확인",
      "gold_state_ko": "조건 확인",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-19",
      "product_id": "PROD_07_XIAOMI_X20_PLUS",
      "claim_text": "오픈마켓 판매 제목의 '샤오미 스마트 AI 로봇청소기 X20+' 사물인식 기능",
      "gold_clause_id": "C07-1",
      "gold_state": "NEEDS_HUMAN_REVIEW",
      "rationale": "유통몰 제목에는 'AI'가 표기되었으나 제조사 공식 상세페이지와 매뉴얼에는 LDS+구조광 거리 센서만 기재되어 자료 간 차이 발생",
      "product_name": "샤오미 (Xiaomi) 로봇청소기 X20+ (B108GL)",
      "predicted_clause_id": "C07-1",
      "predicted_clause_location": "공식 상세페이지 S-Cross 안내 및 일부 오픈마켓 제목('스마트 AI 로봇청소기')",
      "predicted_clause_text": "일부 판매몰 제목에 '스마트 AI 로봇청소기' 문구가 사용되나, 제조사 공식 상세페이지 원문은 'S-Cross™ 광역 구조광 장애물 회피 시스템 및 LDS 레이저 내비게이션'으로 기술되어 있으며 AI 사물인식 신경망이나 RGB 카메라가 탑재되지 않았습니다.",
      "predicted_state": "NEEDS_HUMAN_REVIEW",
      "predicted_state_ko": "추가 확인 필요",
      "gold_state_ko": "추가 확인 필요",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-20",
      "product_id": "PROD_07_XIAOMI_X20_PLUS",
      "claim_text": "S-Cross 구조광 센서로 바닥의 전선이나 반려동물 배변까지 식별해 피해 가는지 여부",
      "gold_clause_id": "C07-2",
      "gold_state": "VERIFIED_CONDITION",
      "rationale": "매뉴얼 사양표상 비전 카메라가 없는 레이저 거리 센서 방식으로 납작한 전선·배변 식별 불가 한계 확인",
      "product_name": "샤오미 (Xiaomi) 로봇청소기 X20+ (B108GL)",
      "predicted_clause_id": "C07-2",
      "predicted_clause_location": "사용자 설명서 p.5 사양표",
      "predicted_clause_text": "센서 구성: LDS 레이저 거리 센서, 전면 구조광 거리 센서, 절벽(낙하) 센서, 초음파 카펫 센서. (딥러닝 비전 프로세서 없음)",
      "predicted_state": "VERIFIED_CONDITION",
      "predicted_state_ko": "조건 확인",
      "gold_state_ko": "조건 확인",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-21",
      "product_id": "PROD_07_XIAOMI_X20_PLUS",
      "claim_text": "Mi Home 앱에 저장되는 집안 지도 데이터의 국내외 서버 보관 위치 및 파기 절차",
      "gold_clause_id": "C07-2",
      "gold_state": "INSUFFICIENT_DATA",
      "rationale": "제품 기본 사용설명서 본문에는 클라우드 리전 위치 및 파기 절차 세부 내용이 부족함",
      "product_name": "샤오미 (Xiaomi) 로봇청소기 X20+ (B108GL)",
      "predicted_clause_id": "C07-1",
      "predicted_clause_location": "공식 상세페이지 S-Cross 안내 및 일부 오픈마켓 제목('스마트 AI 로봇청소기')",
      "predicted_clause_text": "일부 판매몰 제목에 '스마트 AI 로봇청소기' 문구가 사용되나, 제조사 공식 상세페이지 원문은 'S-Cross™ 광역 구조광 장애물 회피 시스템 및 LDS 레이저 내비게이션'으로 기술되어 있으며 AI 사물인식 신경망이나 RGB 카메라가 탑재되지 않았습니다.",
      "predicted_state": "INSUFFICIENT_DATA",
      "predicted_state_ko": "자료 부족",
      "gold_state_ko": "자료 부족",
      "is_clause_match": false,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-22",
      "product_id": "PROD_08_IROBOT_J9_PLUS",
      "claim_text": "PrecisionVision 비전 AI와 Dirt Detective가 장애물을 회피하고 방별 오염 이력을 학습해 청소 순서를 추천합니다.",
      "gold_clause_id": "C08-1",
      "gold_state": "VERIFIED_EVIDENCE",
      "rationale": "전면 카메라 비전 모델 및 과거 청소이력 기반 추천 알고리즘 근거가 상세페이지·매뉴얼과 일치",
      "product_name": "아이로봇 (iRobot) 룸바 콤보 j9+ (c9758)",
      "predicted_clause_id": "C08-1",
      "predicted_clause_location": "상세페이지 PrecisionVision 및 Dirt Detective 섹션",
      "predicted_clause_text": "PrecisionVision 내비게이션은 전면 카메라 비전 모델로 신발, 양말, 전선, 반려동물 고형 배변을 실시간 식별하며, Dirt Detective는 과거 청소 이력과 방별 오염 빈도를 학습해 청소 순서와 흡입력을 자동 추천합니다.",
      "predicted_state": "VERIFIED_EVIDENCE",
      "predicted_state_ko": "근거 확인",
      "gold_state_ko": "근거 확인",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-23",
      "product_id": "PROD_08_IROBOT_J9_PLUS",
      "claim_text": "반려동물 배변을 피하지 못하면 무조건 새 로봇청소기로 100% 무상 교체해 줍니다(P.O.O.P. 보증).",
      "gold_clause_id": "C08-2",
      "gold_state": "VERIFIED_CONDITION",
      "rationale": "'구매 후 1년 이내', '개·고양이의 고형 배변(소변·액체 제외)', '1회 한정'이라는 적용 조건·한계가 약관 각주에 명시됨",
      "product_name": "아이로봇 (iRobot) 룸바 콤보 j9+ (c9758)",
      "predicted_clause_id": "C08-2",
      "predicted_clause_location": "P.O.O.P.(Pet Owner Official Promise) 보증 약관 각주",
      "predicted_clause_text": "구매 후 1년 이내 고형 반려동물(개·고양이) 배변 회피 실패 시 동일 제품으로 1회 무상 교체해 드립니다. 단, 액체성 배변(설사·소변), 구매 후 1년 경과, 카메라 렌즈 오염 방치 시에는 보증 대상에서 제외됩니다.",
      "predicted_state": "VERIFIED_CONDITION",
      "predicted_state_ko": "조건 확인",
      "gold_state_ko": "조건 확인",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-24",
      "product_id": "PROD_08_IROBOT_J9_PLUS",
      "claim_text": "장애물 사진을 AI 학습 데이터로 제공할지 여부를 소비자가 앱에서 직접 선택(Opt-in)할 수 있습니다.",
      "gold_clause_id": "C08-3",
      "gold_state": "VERIFIED_EVIDENCE",
      "rationale": "기본값 비활성 및 사용자 명시적 동의(Opt-in) 시에만 학습에 기여하는 설정이 원문에서 확인됨",
      "product_name": "아이로봇 (iRobot) 룸바 콤보 j9+ (c9758)",
      "predicted_clause_id": "C08-3",
      "predicted_clause_location": "iRobot 앱 데이터 설정 안내",
      "predicted_clause_text": "장애물 이미지를 iRobot 학습 데이터셋에 기여할지 여부를 앱에서 사용자가 명시적 동의(Opt-in)로만 선택할 수 있으며 기본값은 비활성입니다.",
      "predicted_state": "VERIFIED_EVIDENCE",
      "predicted_state_ko": "근거 확인",
      "gold_state_ko": "근거 확인",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-25",
      "product_id": "PROD_09_WINIX_TOWER_PRIME",
      "claim_text": "온라인 판매 배너의 '실내 공기질을 스스로 판단하는 스마트 AI 자동 청정 시스템'",
      "gold_clause_id": "C09-2",
      "gold_state": "NEEDS_HUMAN_REVIEW",
      "rationale": "판매 배너는 'AI'로 표현했으나 사용설명서 p.9 원문은 먼지·가스 센서 4단계 농도 구간별 풍량 전환(센서 비례 제어)으로 확인되어 자료 간 차이 존재",
      "product_name": "위닉스 (Winix) 타워 프라임 플러스 공기청정기 (ATQM430-MWK)",
      "predicted_clause_id": "C09-2",
      "predicted_clause_location": "사용설명서 p.9 자동 운전(Auto Mode) 설명",
      "predicted_clause_text": "자동 모드는 PM2.5 먼지 센서와 가스(냄새) 센서의 측정 농도 구간(좋음·보통·나쁨·매우나쁨 4단계)에 따라 미리 설정된 풍량(약·중·강·터보)으로 회전수를 전환하는 센서 비례 제어 기능입니다. 별도의 기계학습이나 사용자 패턴 학습 모델을 포함하지 않습니다.",
      "predicted_state": "NEEDS_HUMAN_REVIEW",
      "predicted_state_ko": "추가 확인 필요",
      "gold_state_ko": "추가 확인 필요",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-26",
      "product_id": "PROD_09_WINIX_TOWER_PRIME",
      "claim_text": "먼지 센서에 이물질이 끼면 자동 모드 풍량 조절이 부정확해질 수 있어 월 1회 센서 청소가 필요합니다.",
      "gold_clause_id": "C09-2",
      "gold_state": "VERIFIED_CONDITION",
      "rationale": "센서 기반 작동 조건 및 정기 관리 한계가 매뉴얼과 연결됨",
      "product_name": "위닉스 (Winix) 타워 프라임 플러스 공기청정기 (ATQM430-MWK)",
      "predicted_clause_id": "C09-2",
      "predicted_clause_location": "사용설명서 p.9 자동 운전(Auto Mode) 설명",
      "predicted_clause_text": "자동 모드는 PM2.5 먼지 센서와 가스(냄새) 센서의 측정 농도 구간(좋음·보통·나쁨·매우나쁨 4단계)에 따라 미리 설정된 풍량(약·중·강·터보)으로 회전수를 전환하는 센서 비례 제어 기능입니다. 별도의 기계학습이나 사용자 패턴 학습 모델을 포함하지 않습니다.",
      "predicted_state": "VERIFIED_CONDITION",
      "predicted_state_ko": "조건 확인",
      "gold_state_ko": "조건 확인",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-27",
      "product_id": "PROD_09_WINIX_TOWER_PRIME",
      "claim_text": "본체 버튼으로 자동 모드를 끄고 수동 풍량(약·중·강·수면)으로 즉시 전환할 수 있습니다.",
      "gold_clause_id": "C09-2",
      "gold_state": "VERIFIED_EVIDENCE",
      "rationale": "매뉴얼 내 수동 모드 전환 방법 확인",
      "product_name": "위닉스 (Winix) 타워 프라임 플러스 공기청정기 (ATQM430-MWK)",
      "predicted_clause_id": "C09-2",
      "predicted_clause_location": "사용설명서 p.9 자동 운전(Auto Mode) 설명",
      "predicted_clause_text": "자동 모드는 PM2.5 먼지 센서와 가스(냄새) 센서의 측정 농도 구간(좋음·보통·나쁨·매우나쁨 4단계)에 따라 미리 설정된 풍량(약·중·강·터보)으로 회전수를 전환하는 센서 비례 제어 기능입니다. 별도의 기계학습이나 사용자 패턴 학습 모델을 포함하지 않습니다.",
      "predicted_state": "VERIFIED_EVIDENCE",
      "predicted_state_ko": "근거 확인",
      "gold_state_ko": "근거 확인",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-28",
      "product_id": "PROD_10_CARRIER_AERO_18",
      "claim_text": "원터치 AI 운전 버튼으로 실내 온·습도를 감지해 냉방·제습·송풍을 알아서 조절하는 인공지능 케어",
      "gold_clause_id": "C10-2",
      "gold_state": "NEEDS_HUMAN_REVIEW",
      "rationale": "취급설명서 p.14 확인 결과 온·습도 센서 측정값을 내장 PMV 조견표에 대입하는 규칙 테이블 방식으로 판매페이지의 '인공지능' 표현과 차이 존재",
      "product_name": "캐리어에어컨 에어로 18단 에어컨 (OARB-0181FAWSD)",
      "predicted_clause_id": "C10-2",
      "predicted_clause_location": "취급설명서 p.14 운전 모드 안내",
      "predicted_clause_text": "자동(AI) 운전 선택 시 실내 온도 센서와 습도 센서 측정값을 내장된 PMV(열적 쾌적성 지수) 조견표에 대입하여 설정 온도와 1~18단 풍량을 자동 선택합니다. 외부 환경 학습이나 딥러닝 추론 여부에 대한 공개 기술 문서는 확인되지 않습니다.",
      "predicted_state": "NEEDS_HUMAN_REVIEW",
      "predicted_state_ko": "추가 확인 필요",
      "gold_state_ko": "추가 확인 필요",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-29",
      "product_id": "PROD_10_CARRIER_AERO_18",
      "claim_text": "사용자 생활패턴이나 외부 기상 데이터를 딥러닝으로 학습하는지 여부",
      "gold_clause_id": "C10-2",
      "gold_state": "INSUFFICIENT_DATA",
      "rationale": "취급설명서 및 공개 기술자료에서 학습형 모델 적용 근거를 확인할 수 없음(자료 부족 판단 유보)",
      "product_name": "캐리어에어컨 에어로 18단 에어컨 (OARB-0181FAWSD)",
      "predicted_clause_id": "C10-2",
      "predicted_clause_location": "취급설명서 p.14 운전 모드 안내",
      "predicted_clause_text": "자동(AI) 운전 선택 시 실내 온도 센서와 습도 센서 측정값을 내장된 PMV(열적 쾌적성 지수) 조견표에 대입하여 설정 온도와 1~18단 풍량을 자동 선택합니다. 외부 환경 학습이나 딥러닝 추론 여부에 대한 공개 기술 문서는 확인되지 않습니다.",
      "predicted_state": "INSUFFICIENT_DATA",
      "predicted_state_ko": "자료 부족",
      "gold_state_ko": "자료 부족",
      "is_clause_match": true,
      "is_state_match": true
    },
    {
      "claim_id": "CLM-30",
      "product_id": "PROD_10_CARRIER_AERO_18",
      "claim_text": "리모컨에서 AI 자동 모드를 해제하고 1~18단 수동 풍량 및 희망 온도를 고정할 수 있습니다.",
      "gold_clause_id": "C10-2",
      "gold_state": "VERIFIED_EVIDENCE",
      "rationale": "취급설명서에서 수동 18단 풍량 및 온도 직접 제어 기능 확인",
      "product_name": "캐리어에어컨 에어로 18단 에어컨 (OARB-0181FAWSD)",
      "predicted_clause_id": "C10-2",
      "predicted_clause_location": "취급설명서 p.14 운전 모드 안내",
      "predicted_clause_text": "자동(AI) 운전 선택 시 실내 온도 센서와 습도 센서 측정값을 내장된 PMV(열적 쾌적성 지수) 조견표에 대입하여 설정 온도와 1~18단 풍량을 자동 선택합니다. 외부 환경 학습이나 딥러닝 추론 여부에 대한 공개 기술 문서는 확인되지 않습니다.",
      "predicted_state": "VERIFIED_EVIDENCE",
      "predicted_state_ko": "근거 확인",
      "gold_state_ko": "근거 확인",
      "is_clause_match": true,
      "is_state_match": true
    }
  ]
};
