import { getModuleRouters } from 'utils/utils';
import * as hzeroFrontRouters from 'hzero-front/lib/utils/router';
import * as hzeroFrontHagdRouters from 'hzero-front-hagd/lib/utils/router';
import * as hzeroFrontHdttRouters from 'hzero-front-hdtt/lib/utils/router';
import * as hzeroFrontHfileRouters from 'hzero-front-hfile/lib/utils/router';
import * as hzeroFrontHiamRouters from 'hzero-front-hiam/lib/utils/router';
import * as hzeroFrontHimpRouters from 'hzero-front-himp/lib/utils/router';
import * as hzeroFrontHmsgRouters from 'hzero-front-hmsg/lib/utils/router';
import * as hzeroFrontHpayRouters from 'hzero-front-hpay/lib/utils/router';
import * as hzeroFrontHpfmRouters from 'hzero-front-hpfm/lib/utils/router';
import * as hzeroFrontHitfRouters from 'hzero-front-hitf/lib/utils/router';
import * as hzeroFrontHrptRouters from 'hzero-front-hrpt/lib/utils/router';
import * as hzeroFrontHsdrRouters from 'hzero-front-hsdr/lib/utils/router';
import * as hzeroFrontHwfpRouters from 'hzero-front-hwfp/lib/utils/router';
import * as hzeroFrontHnlpRouters from 'hzero-front-hnlp/lib/utils/router';
import * as hzeroFrontHmntRouters from 'hzero-front-hmnt/lib/utils/router';
import * as hzeroFrontHexlRouters from 'hzero-front-hexl/lib/utils/router';
import * as hzeroFrontHimsRouters from 'hzero-front-hims/lib/utils/router';
import * as hzeroFrontHocrRouters from 'hzero-front-hocr/lib/utils/router';
import * as hzeroFrontHadmRouters from 'hzero-front-hadm/lib/utils/router';

export default app => getModuleRouters(app, [hzeroFrontRouters, hzeroFrontHagdRouters, hzeroFrontHdttRouters, hzeroFrontHfileRouters, hzeroFrontHiamRouters, hzeroFrontHimpRouters, hzeroFrontHmsgRouters, hzeroFrontHpayRouters, hzeroFrontHpfmRouters, hzeroFrontHitfRouters, hzeroFrontHrptRouters, hzeroFrontHsdrRouters, hzeroFrontHwfpRouters, hzeroFrontHnlpRouters, hzeroFrontHmntRouters, hzeroFrontHexlRouters, hzeroFrontHimsRouters, hzeroFrontHocrRouters, hzeroFrontHadmRouters]);