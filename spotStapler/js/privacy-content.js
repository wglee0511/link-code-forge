window.SPOT_STAPLER_LEGAL = window.SPOT_STAPLER_LEGAL || {};
window.SPOT_STAPLER_LEGAL.privacy = {
  ko: {
    pageTitle: "개인정보 처리방침 — Spot Stapler",
    docLabel: "개인정보 처리방침",
    navLabel: "이용약관",
    html: `
      <h1>스팟 스테이플러 개인정보 처리방침</h1>
      <p class="effective-date"><strong>시행일자: 2026년 6월 30일</strong></p>
      <p class="intro"><a href="https://getcodeforge.dev" target="_blank" rel="noopener">CodeForge</a>(이하 "회사")은 이용자의 개인정보를 중요하게 생각하며, 「개인정보 보호법」 등 관련 법령을 준수합니다. 본 처리방침은 모바일 애플리케이션 <strong>스팟 스테이플러(Spot Stapler)</strong>(이하 "서비스")가 어떤 개인정보를 수집·이용·보관·제공하는지 설명합니다.</p>
      <hr class="divider" />
      <h2>1. 수집하는 개인정보 항목</h2>
      <p>서비스는 다음 정보를 수집·처리합니다.</p>
      <h3>가. 위치 정보 (가장 중요)</h3>
      <ul>
        <li><strong>전경(앱 사용 중) 및 배경(앱 종료/미사용 시) 위치 정보</strong></li>
        <li>서비스는 이용자가 앱을 실행하지 않은 상태에서도 저장한 장소 도착을 감지하기 위해 <strong>백그라운드 위치 정보</strong>를 사용합니다.</li>
        <li>위치 정보는 도착 감지 및 알림 발송 목적으로만 사용됩니다.</li>
      </ul>
      <h3>나. 이용자가 등록한 데이터</h3>
      <ul>
        <li>장소명, 주소, 위치 좌표(위도·경도), 도착 감지 반경</li>
        <li>알림 제목 및 알림 내용</li>
        <li>위치 알림 활성화 상태, 위치 출처(직접 등록 / Google 장소)</li>
      </ul>
      <h3>다. 계정 및 식별 정보</h3>
      <ul>
        <li>익명 사용자 식별자(자동 생성)</li>
        <li>(선택) Google 계정 연동 시 Google 계정 식별 정보</li>
      </ul>
      <h3>라. 구독 및 설정 정보</h3>
      <ul>
        <li>구독 상태, 구독 상품 식별자, 구독 시작·만료 정보</li>
        <li>앱 언어 설정, 온보딩 완료 여부</li>
        <li>마지막 알림 발생 시각</li>
      </ul>
      <p class="note">서비스는 이름·전화번호·주민등록번호 등 별도의 회원 식별 정보를 수집하지 않습니다.</p>
      <h2>2. 개인정보의 수집 방법</h2>
      <ul>
        <li>이용자가 서비스 내에서 직접 입력하거나 위치를 선택할 때</li>
        <li>기기 OS의 위치 권한 허용 후 위치 감지 과정에서 자동으로</li>
        <li>이용자가 Google 계정 연동에 동의한 경우 해당 연동 과정에서</li>
      </ul>
      <h2>3. 개인정보의 이용 목적</h2>
      <ol>
        <li>위치 도착 알림 기능의 제공</li>
        <li>앱 종료 상태에서의 위치 감지 및 알림 발송</li>
        <li>등록한 위치 알림 데이터의 저장·동기화 및 앱 재설치 시 복원</li>
        <li>무료/유료 구독 상태 확인 및 기능 제한 관리</li>
        <li>다국어 환경 및 사용자 설정 제공</li>
        <li>서비스 운영·개선 및 문의 대응</li>
      </ol>
      <h2>4. 개인정보의 보관 및 파기</h2>
      <ol>
        <li>위치 알림 데이터, 설정 정보, 구독 상태는 서비스 제공 기간 동안 보관됩니다.</li>
        <li>이용자가 위치 알림을 삭제하면 해당 위치 데이터도 함께 삭제됩니다.</li>
        <li>이용자가 계정 삭제 또는 데이터 삭제를 요청하는 경우, 관련 법령에 따라 보관이 필요한 경우를 제외하고 지체 없이 파기합니다.</li>
      </ol>
      <h2>5. 개인정보의 제3자 제공 및 처리위탁</h2>
      <p>회사는 서비스 제공을 위해 다음의 외부 서비스에 개인정보 처리를 위탁하거나 정보를 전달합니다.</p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>수탁자 / 제3자</th>
              <th>처리 목적</th>
              <th>처리 항목</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Supabase</strong></td>
              <td>위치 알림·설정·구독 데이터 저장 및 동기화</td>
              <td>등록 데이터, 식별자, 구독·설정 정보</td>
            </tr>
            <tr>
              <td><strong>Google</strong> (Places / Geocoding API)</td>
              <td>장소 검색 및 좌표↔주소 변환</td>
              <td>검색어, 좌표</td>
            </tr>
            <tr>
              <td><strong>RevenueCat</strong></td>
              <td>인앱 구독 상태 관리 및 검증</td>
              <td>구독 식별자, 구독 상태</td>
            </tr>
            <tr>
              <td><strong>Apple App Store / Google Play</strong></td>
              <td>인앱 결제 처리</td>
              <td>결제 정보(각 스토어가 처리)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li>결제 정보는 Apple 및 Google이 직접 처리하며, 회사는 카드 번호 등 결제 수단 정보를 보관하지 않습니다.</li>
        <li>위 외에 이용자의 위치 정보를 제3자에게 판매하거나 광고 목적으로 제공하지 않습니다.</li>
      </ul>
      <h2>6. 위치 정보의 처리에 관한 고지</h2>
      <ol>
        <li>서비스는 위치 기반 알림 제공이라는 목적에 한해 위치 정보를 처리합니다.</li>
        <li><strong>백그라운드 위치 정보</strong>는 이용자가 앱을 사용하지 않는 동안에도 저장한 장소 도착을 감지하기 위해 사용되며, 그 외 목적으로 사용되지 않습니다.</li>
        <li>이용자는 기기 설정에서 위치 권한을 언제든지 변경하거나 철회할 수 있습니다. 다만 권한을 철회하면 위치 알림 기능이 제한될 수 있습니다.</li>
      </ol>
      <h2>7. 이용자의 권리</h2>
      <p>이용자는 언제든지 다음 권리를 행사할 수 있습니다.</p>
      <ol>
        <li>본인의 위치 알림 및 등록 데이터 열람·수정·삭제</li>
        <li>위치·알림 권한의 허용 및 철회 (기기 설정)</li>
        <li>Google 계정 연동 해제</li>
        <li>개인정보 처리에 대한 동의 철회 및 처리 정지 요청</li>
      </ol>
      <p>권리 행사는 앱 내 기능 또는 아래 문의처를 통해 가능합니다.</p>
      <h2>8. 개인정보의 안전성 확보 조치</h2>
      <ol>
        <li>데이터베이스에 Row Level Security(RLS)를 적용하여 이용자가 본인의 데이터에만 접근할 수 있도록 제한합니다.</li>
        <li>외부 서비스와의 통신은 암호화된 연결(HTTPS)을 사용합니다.</li>
      </ol>
      <h2>9. 개인정보 보호책임자</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>구분</th>
              <th>내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>보호책임자</td>
              <td>CodeForge</td>
            </tr>
            <tr>
              <td>연락처(이메일)</td>
              <td><a href="mailto:admin@getcodeforge.dev">admin@getcodeforge.dev</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>개인정보 관련 문의, 불만 처리, 피해 구제 등에 관한 사항은 위 연락처로 문의할 수 있습니다.</p>
      <h2>10. 처리방침의 변경</h2>
      <p>본 처리방침이 변경되는 경우, 변경 사항을 서비스 화면 또는 회사가 정한 방법으로 사전에 공지합니다.</p>
      <p class="closing">본 개인정보 처리방침은 2026년 6월 30일부터 시행됩니다.</p>
    `,
  },
  en: {
    pageTitle: "Privacy Policy — Spot Stapler",
    docLabel: "Privacy Policy",
    navLabel: "Terms of Service",
    html: `
      <h1>Spot Stapler Privacy Policy</h1>
      <p class="effective-date"><strong>Effective date: June 30, 2026</strong></p>
      <p class="intro"><a href="https://getcodeforge.dev" target="_blank" rel="noopener">CodeForge</a> ("Company") values your privacy and complies with applicable privacy laws. This Policy explains what personal information the mobile application <strong>Spot Stapler</strong> (the "Service") collects, uses, stores, and shares.</p>
      <hr class="divider" />
      <h2>1. Personal Information We Collect</h2>
      <p>The Service collects and processes the following information.</p>
      <h3>A. Location information (most important)</h3>
      <ul>
        <li><strong>Foreground (while using the app) and background (when the app is closed or not in use) location</strong></li>
        <li>The Service uses <strong>background location</strong> to detect arrivals at saved places even when you are not actively using the app.</li>
        <li>Location information is used only for arrival detection and sending notifications.</li>
      </ul>
      <h3>B. Data you register</h3>
      <ul>
        <li>Place name, address, coordinates (latitude/longitude), arrival detection radius</li>
        <li>Notification title and body</li>
        <li>Location reminder activation status and source (manual entry / Google Places)</li>
      </ul>
      <h3>C. Account and identifiers</h3>
      <ul>
        <li>Anonymous user identifier (auto-generated)</li>
        <li>(Optional) Google account identifier when you link Google</li>
      </ul>
      <h3>D. Subscription and settings</h3>
      <ul>
        <li>Subscription status, product identifier, start and expiration information</li>
        <li>App language and onboarding completion status</li>
        <li>Time of last notification</li>
      </ul>
      <p class="note">The Service does not collect separate member identifiers such as name, phone number, or national ID number.</p>
      <h2>2. How We Collect Information</h2>
      <ul>
        <li>When you enter information or select a location in the Service</li>
        <li>Automatically during location detection after you grant location permission on your device</li>
        <li>During Google account linking when you consent</li>
      </ul>
      <h2>3. Purposes of Use</h2>
      <ol>
        <li>Providing location arrival notifications</li>
        <li>Detecting location and sending notifications while the app is closed</li>
        <li>Storing, syncing, and restoring location reminder data after reinstall</li>
        <li>Checking free/paid subscription status and managing feature limits</li>
        <li>Providing multilingual support and user settings</li>
        <li>Operating, improving the Service, and responding to inquiries</li>
      </ol>
      <h2>4. Retention and Deletion</h2>
      <ol>
        <li>Location reminder data, settings, and subscription status are retained while the Service is provided.</li>
        <li>When you delete a location reminder, the related location data is also deleted.</li>
        <li>Upon account or data deletion requests, we delete data without delay unless retention is required by law.</li>
      </ol>
      <h2>5. Third-Party Sharing and Processors</h2>
      <p>We entrust or transfer information to the following external services to provide the Service.</p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Processor / Third party</th>
              <th>Purpose</th>
              <th>Data items</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Supabase</strong></td>
              <td>Storage and sync of reminders, settings, and subscription data</td>
              <td>Registered data, identifiers, subscription and settings</td>
            </tr>
            <tr>
              <td><strong>Google</strong> (Places / Geocoding API)</td>
              <td>Place search and coordinate ↔ address conversion</td>
              <td>Search queries, coordinates</td>
            </tr>
            <tr>
              <td><strong>RevenueCat</strong></td>
              <td>In-app subscription management and verification</td>
              <td>Subscription identifiers and status</td>
            </tr>
            <tr>
              <td><strong>Apple App Store / Google Play</strong></td>
              <td>In-app payment processing</td>
              <td>Payment information (processed by each store)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li>Payment information is processed directly by Apple and Google. We do not store card numbers or other payment method details.</li>
        <li>We do not sell your location information to third parties or provide it for advertising purposes.</li>
      </ul>
      <h2>6. Notice on Location Information</h2>
      <ol>
        <li>Location information is processed solely to provide location-based notifications.</li>
        <li><strong>Background location</strong> is used to detect arrivals at saved places while you are not using the app and is not used for other purposes.</li>
        <li>You may change or revoke location permission in device settings at any time. Revoking permission may limit location reminder features.</li>
      </ol>
      <h2>7. Your Rights</h2>
      <p>You may exercise the following rights at any time:</p>
      <ol>
        <li>Access, correct, or delete your location reminders and registered data</li>
        <li>Grant or revoke location and notification permissions (device settings)</li>
        <li>Disconnect Google account linking</li>
        <li>Withdraw consent or request suspension of processing</li>
      </ol>
      <p>You may exercise these rights through in-app features or the contact below.</p>
      <h2>8. Security Measures</h2>
      <ol>
        <li>Row Level Security (RLS) is applied so users can access only their own data.</li>
        <li>Communications with external services use encrypted connections (HTTPS).</li>
      </ol>
      <h2>9. Privacy Officer</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Privacy officer</td>
              <td>CodeForge</td>
            </tr>
            <tr>
              <td>Email</td>
              <td><a href="mailto:admin@getcodeforge.dev">admin@getcodeforge.dev</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>For privacy inquiries, complaints, or remedies, please contact us at the address above.</p>
      <h2>10. Changes to This Policy</h2>
      <p>If this Policy changes, we will notify you in advance through the Service or other means determined by the Company.</p>
      <p class="closing">This Privacy Policy is effective from June 30, 2026.</p>
    `,
  },
  ja: {
    pageTitle: "プライバシーポリシー — Spot Stapler",
    docLabel: "プライバシーポリシー",
    navLabel: "利用規約",
    html: `
      <h1>スポットステープラー プライバシーポリシー</h1>
      <p class="effective-date"><strong>施行日: 2026年6月30日</strong></p>
      <p class="intro"><a href="https://getcodeforge.dev" target="_blank" rel="noopener">CodeForge</a>（以下「当社」）は利用者の個人情報を重視し、関連法令を遵守します。本ポリシーは、モバイルアプリケーション <strong>スポットステープラー（Spot Stapler）</strong>（以下「本サービス」）がどのような個人情報を収集・利用・保管・提供するかを説明します。</p>
      <hr class="divider" />
      <h2>1. 収集する個人情報の項目</h2>
      <p>本サービスは次の情報を収集・処理します。</p>
      <h3>ア. 位置情報（最重要）</h3>
      <ul>
        <li><strong>フォアグラウンド（アプリ使用中）およびバックグラウンド（アプリ終了/未使用時）の位置情報</strong></li>
        <li>本サービスは、アプリを起動していない状態でも保存した場所への到着を検知するため <strong>バックグラウンド位置情報</strong> を使用します。</li>
        <li>位置情報は到着検知および通知送信の目的にのみ使用されます。</li>
      </ul>
      <h3>イ. 利用者が登録したデータ</h3>
      <ul>
        <li>場所名、住所、位置座標（緯度・経度）、到着検知半径</li>
        <li>通知タイトルおよび通知内容</li>
        <li>位置リマインダーの有効状態、位置の出所（直接登録 / Google 場所）</li>
      </ul>
      <h3>ウ. アカウントおよび識別情報</h3>
      <ul>
        <li>匿名ユーザー識別子（自動生成）</li>
        <li>（任意）Googleアカウント連携時のGoogleアカウント識別情報</li>
      </ul>
      <h3>エ. サブスクリプションおよび設定情報</h3>
      <ul>
        <li>サブスクリプション状態、商品識別子、開始・失効情報</li>
        <li>アプリ言語設定、オンボーディング完了状況</li>
        <li>最後の通知発生時刻</li>
      </ul>
      <p class="note">本サービスは氏名・電話番号・住民登録番号などの別途会員識別情報を収集しません。</p>
      <h2>2. 個人情報の収集方法</h2>
      <ul>
        <li>利用者が本サービス内で直接入力または位置を選択したとき</li>
        <li>端末OSの位置権限許可後、位置検知過程で自動的に</li>
        <li>利用者がGoogleアカウント連携に同意した場合の連携過程で</li>
      </ul>
      <h2>3. 個人情報の利用目的</h2>
      <ol>
        <li>位置到着通知機能の提供</li>
        <li>アプリ終了状態での位置検知および通知送信</li>
        <li>登録した位置リマインダーデータの保存・同期および再インストール時の復元</li>
        <li>無料/有料サブスクリプション状態の確認および機能制限の管理</li>
        <li>多言語環境およびユーザー設定の提供</li>
        <li>本サービスの運営・改善およびお問い合わせ対応</li>
      </ol>
      <h2>4. 個人情報の保管および破棄</h2>
      <ol>
        <li>位置リマインダーデータ、設定情報、サブスクリプション状態は本サービス提供期間中保管されます。</li>
        <li>利用者が位置リマインダーを削除すると、該当位置データも削除されます。</li>
        <li>アカウント削除またはデータ削除の要請があった場合、法令により保管が必要な場合を除き遅滞なく破棄します。</li>
      </ol>
      <h2>5. 第三者提供および処理委託</h2>
      <p>当社は本サービス提供のため、次の外部サービスに個人情報処理を委託または情報を提供します。</p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>受託者 / 第三者</th>
              <th>処理目的</th>
              <th>処理項目</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Supabase</strong></td>
              <td>位置リマインダー・設定・サブスクリプションデータの保存および同期</td>
              <td>登録データ、識別子、サブスクリプション・設定情報</td>
            </tr>
            <tr>
              <td><strong>Google</strong> (Places / Geocoding API)</td>
              <td>場所検索および座標↔住所変換</td>
              <td>検索語、座標</td>
            </tr>
            <tr>
              <td><strong>RevenueCat</strong></td>
              <td>アプリ内サブスクリプション状態の管理および検証</td>
              <td>サブスクリプション識別子、状態</td>
            </tr>
            <tr>
              <td><strong>Apple App Store / Google Play</strong></td>
              <td>アプリ内決済処理</td>
              <td>決済情報（各ストアが処理）</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li>決済情報はAppleおよびGoogleが直接処理し、当社はカード番号等の決済手段情報を保管しません。</li>
        <li>上記以外に、利用者の位置情報を第三者に販売したり広告目的で提供したりしません。</li>
      </ul>
      <h2>6. 位置情報の処理に関する告知</h2>
      <ol>
        <li>本サービスは位置ベース通知提供という目的に限り位置情報を処理します。</li>
        <li><strong>バックグラウンド位置情報</strong>は、アプリを使用していない間も保存した場所への到着を検知するために使用され、それ以外の目的には使用されません。</li>
        <li>利用者は端末設定で位置権限をいつでも変更または撤回できます。ただし権限を撤回すると位置リマインダー機能が制限される場合があります。</li>
      </ol>
      <h2>7. 利用者の権利</h2>
      <p>利用者はいつでも次の権利を行使できます。</p>
      <ol>
        <li>自身の位置リマインダーおよび登録データの閲覧・修正・削除</li>
        <li>位置・通知権限の許可および撤回（端末設定）</li>
        <li>Googleアカウント連携の解除</li>
        <li>個人情報処理に関する同意撤回および処理停止の要請</li>
      </ol>
      <p>権利行使はアプリ内機能または下記お問い合わせ先を通じて可能です。</p>
      <h2>8. 個人情報の安全性確保措置</h2>
      <ol>
        <li>データベースにRow Level Security（RLS）を適用し、利用者が自身のデータにのみアクセスできるよう制限します。</li>
        <li>外部サービスとの通信には暗号化接続（HTTPS）を使用します。</li>
      </ol>
      <h2>9. 個人情報保護責任者</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>区分</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>保護責任者</td>
              <td>CodeForge</td>
            </tr>
            <tr>
              <td>連絡先（メール）</td>
              <td><a href="mailto:admin@getcodeforge.dev">admin@getcodeforge.dev</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>個人情報に関するお問い合わせ、苦情処理、被害救済等は上記連絡先までご連絡ください。</p>
      <h2>10. ポリシーの変更</h2>
      <p>本ポリシーが変更される場合、変更内容を本サービス画面または当社が定める方法で事前に告知します。</p>
      <p class="closing">本プライバシーポリシーは2026年6月30日より施行されます。</p>
    `,
  },
  zh: {
    pageTitle: "隐私政策 — Spot Stapler",
    docLabel: "隐私政策",
    navLabel: "服务条款",
    html: `
      <h1>Spot Stapler 隐私政策</h1>
      <p class="effective-date"><strong>生效日期：2026年6月30日</strong></p>
      <p class="intro"><a href="https://getcodeforge.dev" target="_blank" rel="noopener">CodeForge</a>（“公司”）重视用户隐私并遵守相关隐私法律。本政策说明移动应用程序 <strong>Spot Stapler</strong>（“服务”）收集、使用、存储和共享哪些个人信息。</p>
      <hr class="divider" />
      <h2>1. 收集的个人信息</h2>
      <p>服务收集并处理以下信息。</p>
      <h3>（一）位置信息（最重要）</h3>
      <ul>
        <li><strong>前台（使用应用时）和后台（应用关闭或未使用时）位置信息</strong></li>
        <li>服务使用 <strong>后台位置信息</strong>，以便在您未主动使用应用时也能检测已保存地点的到达。</li>
        <li>位置信息仅用于到达检测和发送通知。</li>
      </ul>
      <h3>（二）用户注册的数据</h3>
      <ul>
        <li>地点名称、地址、坐标（纬度/经度）、到达检测半径</li>
        <li>通知标题和内容</li>
        <li>位置提醒启用状态及来源（手动注册 / Google 地点）</li>
      </ul>
      <h3>（三）账户及标识信息</h3>
      <ul>
        <li>匿名用户标识符（自动生成）</li>
        <li>（可选）关联 Google 账户时的 Google 账户标识信息</li>
      </ul>
      <h3>（四）订阅及设置信息</h3>
      <ul>
        <li>订阅状态、商品标识符、开始及到期信息</li>
        <li>应用语言设置、引导完成状态</li>
        <li>上次通知时间</li>
      </ul>
      <p class="note">服务不收集姓名、电话号码、身份证号等单独的会员识别信息。</p>
      <h2>2. 信息收集方式</h2>
      <ul>
        <li>用户在服务内直接输入或选择位置时</li>
        <li>在设备操作系统授予位置权限后，于位置检测过程中自动收集</li>
        <li>用户同意关联 Google 账户时的关联过程中</li>
      </ul>
      <h2>3. 使用目的</h2>
      <ol>
        <li>提供位置到达通知功能</li>
        <li>在应用关闭状态下进行位置检测并发送通知</li>
        <li>存储、同步位置提醒数据，并在重新安装后恢复</li>
        <li>确认免费/付费订阅状态并管理功能限制</li>
        <li>提供多语言环境和用户设置</li>
        <li>服务运营、改进及咨询响应</li>
      </ol>
      <h2>4. 保存与删除</h2>
      <ol>
        <li>位置提醒数据、设置信息和订阅状态在服务提供期间保存。</li>
        <li>用户删除位置提醒时，相关位置数据一并删除。</li>
        <li>用户请求删除账户或数据时，除法律要求保留的情况外，将及时删除。</li>
      </ol>
      <h2>5. 第三方提供及委托处理</h2>
      <p>为提供服务，公司委托或向以下外部服务传输信息。</p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>受托方 / 第三方</th>
              <th>处理目的</th>
              <th>处理项目</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Supabase</strong></td>
              <td>位置提醒、设置、订阅数据的存储与同步</td>
              <td>注册数据、标识符、订阅及设置信息</td>
            </tr>
            <tr>
              <td><strong>Google</strong>（Places / Geocoding API）</td>
              <td>地点搜索及坐标与地址转换</td>
              <td>搜索词、坐标</td>
            </tr>
            <tr>
              <td><strong>RevenueCat</strong></td>
              <td>应用内订阅状态管理与验证</td>
              <td>订阅标识符、订阅状态</td>
            </tr>
            <tr>
              <td><strong>Apple App Store / Google Play</strong></td>
              <td>应用内支付处理</td>
              <td>支付信息（由各商店处理）</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li>支付信息由 Apple 和 Google 直接处理，公司不保存卡号等支付手段信息。</li>
        <li>除上述情况外，不会向第三方出售位置信息或用于广告目的。</li>
      </ul>
      <h2>6. 位置信息处理说明</h2>
      <ol>
        <li>位置信息仅出于提供基于位置的通知这一目的而处理。</li>
        <li><strong>后台位置信息</strong>用于在您未使用应用时检测已保存地点的到达，不用于其他目的。</li>
        <li>用户可随时在设备设置中更改或撤回位置权限。撤回权限可能会限制位置提醒功能。</li>
      </ol>
      <h2>7. 用户权利</h2>
      <p>用户可随时行使以下权利：</p>
      <ol>
        <li>查阅、修改、删除本人的位置提醒及注册数据</li>
        <li>允许或撤回位置及通知权限（设备设置）</li>
        <li>解除 Google 账户关联</li>
        <li>撤回同意或请求停止处理</li>
      </ol>
      <p>可通过应用内功能或下方联系方式行使上述权利。</p>
      <h2>8. 安全保障措施</h2>
      <ol>
        <li>数据库应用行级安全（RLS），限制用户仅可访问本人数据。</li>
        <li>与外部服务的通信使用加密连接（HTTPS）。</li>
      </ol>
      <h2>9. 个人信息保护负责人</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>项目</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>保护负责人</td>
              <td>CodeForge</td>
            </tr>
            <tr>
              <td>联系邮箱</td>
              <td><a href="mailto:admin@getcodeforge.dev">admin@getcodeforge.dev</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>有关个人信息咨询、投诉处理及救济事项，请通过上述联系方式与我们联系。</p>
      <h2>10. 政策变更</h2>
      <p>本政策变更时，将通过服务界面或公司规定的其他方式提前公告。</p>
      <p class="closing">本隐私政策自 2026年6月30日起生效。</p>
    `,
  },
  es: {
    pageTitle: "Política de privacidad — Spot Stapler",
    docLabel: "Política de privacidad",
    navLabel: "Términos de servicio",
    html: `
      <h1>Política de privacidad de Spot Stapler</h1>
      <p class="effective-date"><strong>Fecha de vigencia: 30 de junio de 2026</strong></p>
      <p class="intro"><a href="https://getcodeforge.dev" target="_blank" rel="noopener">CodeForge</a> ("Compañía") valora su privacidad y cumple con las leyes aplicables. Esta Política explica qué información personal recopila, usa, almacena y comparte la aplicación móvil <strong>Spot Stapler</strong> (el "Servicio").</p>
      <hr class="divider" />
      <h2>1. Información personal que recopilamos</h2>
      <p>El Servicio recopila y procesa la siguiente información.</p>
      <h3>A. Información de ubicación (más importante)</h3>
      <ul>
        <li><strong>Ubicación en primer plano (mientras usa la app) y en segundo plano (cuando la app está cerrada o no en uso)</strong></li>
        <li>El Servicio usa <strong>ubicación en segundo plano</strong> para detectar llegadas a lugares guardados incluso cuando no está usando activamente la app.</li>
        <li>La ubicación se usa solo para detectar llegadas y enviar notificaciones.</li>
      </ul>
      <h3>B. Datos que usted registra</h3>
      <ul>
        <li>Nombre del lugar, dirección, coordenadas (latitud/longitud), radio de detección</li>
        <li>Título y contenido de la notificación</li>
        <li>Estado de activación del recordatorio y origen (registro manual / Google Places)</li>
      </ul>
      <h3>C. Cuenta e identificadores</h3>
      <ul>
        <li>Identificador de usuario anónimo (generado automáticamente)</li>
        <li>(Opcional) Identificador de cuenta de Google al vincular Google</li>
      </ul>
      <h3>D. Suscripción y configuración</h3>
      <ul>
        <li>Estado de suscripción, identificador del producto, fechas de inicio y vencimiento</li>
        <li>Idioma de la app y estado de incorporación</li>
        <li>Hora de la última notificación</li>
      </ul>
      <p class="note">El Servicio no recopila identificadores de miembro separados como nombre, teléfono o número de identificación nacional.</p>
      <h2>2. Cómo recopilamos información</h2>
      <ul>
        <li>Cuando ingresa información o selecciona una ubicación en el Servicio</li>
        <li>Automáticamente durante la detección de ubicación tras conceder permiso en el dispositivo</li>
        <li>Durante la vinculación de cuenta de Google cuando usted consiente</li>
      </ul>
      <h2>3. Finalidades del uso</h2>
      <ol>
        <li>Proporcionar notificaciones de llegada por ubicación</li>
        <li>Detectar ubicación y enviar notificaciones con la app cerrada</li>
        <li>Almacenar, sincronizar y restaurar datos de recordatorios tras reinstalar</li>
        <li>Verificar estado de suscripción gratuita/de pago y gestionar límites de funciones</li>
        <li>Proporcionar soporte multilingüe y configuración del usuario</li>
        <li>Operar, mejorar el Servicio y responder consultas</li>
      </ol>
      <h2>4. Conservación y eliminación</h2>
      <ol>
        <li>Los datos de recordatorios, configuración y suscripción se conservan mientras se presta el Servicio.</li>
        <li>Al eliminar un recordatorio, también se eliminan los datos de ubicación relacionados.</li>
        <li>Ante solicitudes de eliminación de cuenta o datos, eliminamos sin demora salvo obligación legal de conservación.</li>
      </ol>
      <h2>5. Cesión a terceros y encargados</h2>
      <p>Encargamos o transferimos información a los siguientes servicios externos para prestar el Servicio.</p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Encargado / Tercero</th>
              <th>Finalidad</th>
              <th>Datos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Supabase</strong></td>
              <td>Almacenamiento y sincronización de recordatorios, ajustes y suscripción</td>
              <td>Datos registrados, identificadores, suscripción y ajustes</td>
            </tr>
            <tr>
              <td><strong>Google</strong> (Places / Geocoding API)</td>
              <td>Búsqueda de lugares y conversión coordenadas ↔ dirección</td>
              <td>Consultas de búsqueda, coordenadas</td>
            </tr>
            <tr>
              <td><strong>RevenueCat</strong></td>
              <td>Gestión y verificación de suscripciones en la app</td>
              <td>Identificadores y estado de suscripción</td>
            </tr>
            <tr>
              <td><strong>Apple App Store / Google Play</strong></td>
              <td>Procesamiento de pagos en la app</td>
              <td>Información de pago (procesada por cada tienda)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li>La información de pago la procesan directamente Apple y Google. No almacenamos números de tarjeta ni otros datos de pago.</li>
        <li>No vendemos su ubicación a terceros ni la proporcionamos con fines publicitarios.</li>
      </ul>
      <h2>6. Aviso sobre información de ubicación</h2>
      <ol>
        <li>La ubicación se procesa únicamente para proporcionar notificaciones basadas en ubicación.</li>
        <li><strong>La ubicación en segundo plano</strong> se usa para detectar llegadas mientras no usa la app y no se usa para otros fines.</li>
        <li>Puede cambiar o revocar el permiso de ubicación en la configuración del dispositivo en cualquier momento. Revocarlo puede limitar las funciones de recordatorio.</li>
      </ol>
      <h2>7. Sus derechos</h2>
      <p>Puede ejercer en cualquier momento los siguientes derechos:</p>
      <ol>
        <li>Acceder, corregir o eliminar sus recordatorios y datos registrados</li>
        <li>Conceder o revocar permisos de ubicación y notificaciones (configuración del dispositivo)</li>
        <li>Desvincular la cuenta de Google</li>
        <li>Retirar el consentimiento o solicitar la suspensión del tratamiento</li>
      </ol>
      <p>Puede ejercer estos derechos mediante funciones de la app o el contacto indicado abajo.</p>
      <h2>8. Medidas de seguridad</h2>
      <ol>
        <li>Se aplica Row Level Security (RLS) para que los usuarios accedan solo a sus propios datos.</li>
        <li>Las comunicaciones con servicios externos usan conexiones cifradas (HTTPS).</li>
      </ol>
      <h2>9. Responsable de privacidad</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Rol</th>
              <th>Detalles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Responsable de privacidad</td>
              <td>CodeForge</td>
            </tr>
            <tr>
              <td>Correo</td>
              <td><a href="mailto:admin@getcodeforge.dev">admin@getcodeforge.dev</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Para consultas, reclamaciones o reclamaciones de privacidad, contáctenos en la dirección anterior.</p>
      <h2>10. Cambios en esta Política</h2>
      <p>Si esta Política cambia, le notificaremos con anticipación a través del Servicio u otros medios determinados por la Compañía.</p>
      <p class="closing">Esta Política de privacidad entra en vigor el 30 de junio de 2026.</p>
    `,
  },
};
